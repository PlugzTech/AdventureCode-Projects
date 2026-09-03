import { listAllRequestsWithUsers, listModelProfiles } from "./db";
import { buildConsultationCalendarData, parseConsultationDateTime } from "./consultation-calendar";
import { getConsultationAvailability } from "./consultations";

const completedStatuses = new Set(["Completed", "Delivered", "Closed"]);
const cancelledStatuses = new Set(["Cancelled", "Declined"]);
const oneDayMs = 24 * 60 * 60 * 1000;
const followUpStatuses = new Set(["New", "Approved", "Awaiting Payment", "In Progress"]);
const priorityRank = new Map([
  ["Urgent", 4],
  ["High", 3],
  ["Standard", 2],
  ["Low", 1]
]);

function parsePriceFloor(label) {
  const match = String(label || "").match(/\$([\d,]+)/);
  if (!match) {
    return 0;
  }

  return Number(match[1].replace(/,/g, ""));
}

function buildCountMap(items, key) {
  return items.reduce((map, item) => {
    const value = String(item[key] || "Unspecified");
    map.set(value, (map.get(value) || 0) + 1);
    return map;
  }, new Map());
}

function sortMapEntries(map) {
  return [...map.entries()]
    .sort((a, b) => b[1] - a[1])
    .map(([label, value]) => ({ label, value }));
}

function latestTime(...values) {
  return values.reduce((latest, value) => {
    const time = value ? new Date(value).getTime() : 0;
    return Number.isFinite(time) && time > latest ? time : latest;
  }, 0);
}

function needsBillingFollowUp(request) {
  if (request.source === "Square Appointments") {
    return false;
  }

  return !request.billing_name || !request.billing_email || !request.preferred_payment_method;
}

function buildCustomerDatabase(requests) {
  const customers = new Map();

  for (const request of requests) {
    const customerKey = request.user_id || request.client_email || request.square_customer_id || request.id;
    const budgetFloor = parsePriceFloor(request.budget);
    const isInactive = completedStatuses.has(request.status) || cancelledStatuses.has(request.status);
    const paymentOpen = !["Paid", "Waived", "Not Required"].includes(request.payment_status || "");
    const invoiceOpen = !["Paid", "Waived", "Not Required", "Appointment-only"].includes(request.invoice_status || "");
    const requestActivityTime = latestTime(
      request.updated_at,
      request.last_manager_update_at,
      request.created_at
    );
    const existing = customers.get(customerKey) || {
      id: customerKey,
      clientId: request.user_id || "",
      name: request.client_name || "Unknown client",
      email: request.client_email || "",
      company: request.client_company || "",
      phone: request.client_phone || "",
      website: request.client_website || "",
      tier: request.client_tier || "Standard",
      type: request.client_type || "Individual",
      lifecycleStage: request.client_lifecycle_stage || "New Lead",
      leadSource: request.client_lead_source || "Website",
      requestCount: 0,
      activeRequestCount: 0,
      completedRequestCount: 0,
      cancelledRequestCount: 0,
      appointmentOnlyCount: 0,
      serviceTypes: [],
      openBudgetFloor: 0,
      totalBudgetFloor: 0,
      invoiceOpenCount: 0,
      paymentOpenCount: 0,
      billingFollowUpCount: 0,
      shippingReadyCount: 0,
      highestPriority: "Standard",
      nextConsultationAt: 0,
      nextConsultationLabel: "",
      latestActivityAt: 0,
      latestActivityLabel: "",
      latestRequestStatus: "",
      latestRequestType: ""
    };

    existing.requestCount += 1;
    existing.totalBudgetFloor += budgetFloor;
    if (request.source === "Square Appointments") existing.appointmentOnlyCount += 1;
    if (isInactive) {
      if (completedStatuses.has(request.status)) existing.completedRequestCount += 1;
      if (cancelledStatuses.has(request.status)) existing.cancelledRequestCount += 1;
    } else {
      existing.activeRequestCount += 1;
      existing.openBudgetFloor += budgetFloor;
    }
    if (invoiceOpen && !isInactive) existing.invoiceOpenCount += 1;
    if (paymentOpen && !isInactive) existing.paymentOpenCount += 1;
    if (needsBillingFollowUp(request) && !isInactive) existing.billingFollowUpCount += 1;
    if (request.shipping_name && request.shipping_address) existing.shippingReadyCount += 1;
    if (request.project_type && !existing.serviceTypes.includes(request.project_type)) {
      existing.serviceTypes.push(request.project_type);
    }
    if ((priorityRank.get(request.internal_priority) || 0) > (priorityRank.get(existing.highestPriority) || 0)) {
      existing.highestPriority = request.internal_priority;
    }

    const consultationAt = parseConsultationDateTime(request.consultation_date, request.consultation_time)?.getTime() || 0;
    if (consultationAt >= Date.now() && (!existing.nextConsultationAt || consultationAt < existing.nextConsultationAt)) {
      existing.nextConsultationAt = consultationAt;
      existing.nextConsultationLabel = `${request.consultation_date} at ${request.consultation_time}`;
    }

    if (requestActivityTime >= existing.latestActivityAt) {
      existing.latestActivityAt = requestActivityTime;
      existing.latestActivityLabel = request.updated_at || request.last_manager_update_at || request.created_at || "";
      existing.latestRequestStatus = request.status || "";
      existing.latestRequestType = request.project_type || "";
    }

    customers.set(customerKey, existing);
  }

  return [...customers.values()]
    .map((customer) => {
      const followUpReasons = [
        customer.billingFollowUpCount ? "Billing details" : "",
        customer.paymentOpenCount ? "Payment" : "",
        customer.invoiceOpenCount ? "Invoice" : "",
        followUpStatuses.has(customer.latestRequestStatus) ? "Status follow-up" : ""
      ].filter(Boolean);

      return {
        ...customer,
        serviceTypes: customer.serviceTypes.slice(0, 5),
        followUpReasons,
        needsFollowUp: followUpReasons.length > 0,
        health:
          customer.billingFollowUpCount || customer.paymentOpenCount
            ? "Needs follow-up"
            : customer.activeRequestCount
              ? "Active"
              : customer.completedRequestCount
                ? "Stable"
                : "New",
        latestActivityAt: customer.latestActivityLabel,
        latestActivitySort: customer.latestActivityAt
      };
    })
    .sort((a, b) => {
      if (Number(b.needsFollowUp) !== Number(a.needsFollowUp)) {
        return Number(b.needsFollowUp) - Number(a.needsFollowUp);
      }

      if (b.openBudgetFloor !== a.openBudgetFloor) {
        return b.openBudgetFloor - a.openBudgetFloor;
      }

      return b.latestActivitySort - a.latestActivitySort;
    });
}

export async function buildManagerDashboardData() {
  const [requests, modelProfiles] = await Promise.all([
    listAllRequestsWithUsers(),
    listModelProfiles()
  ]);
  const now = Date.now();
  const uniqueClients = new Set(requests.map((request) => request.user_id).filter(Boolean)).size;
  const newRequests = requests.filter((request) => request.status === "New").length;
  const appointmentOnlyRequests = requests.filter(
    (request) => request.source === "Square Appointments"
  );
  const billableRequests = requests.filter(
    (request) => request.source !== "Square Appointments"
  );
  const completedRequests = requests.filter((request) =>
    completedStatuses.has(request.status)
  ).length;
  const cancelledRequests = requests.filter((request) =>
    cancelledStatuses.has(request.status)
  ).length;
  const activeRequests = requests.length - completedRequests - cancelledRequests;
  const consultationQueue = requests.filter((request) => {
    if (cancelledStatuses.has(request.status)) {
      return false;
    }

    const sortTime = parseConsultationDateTime(request.consultation_date, request.consultation_time)?.getTime();
    return sortTime && sortTime >= now;
  }).length;
  const receivablesFloor = billableRequests.reduce((sum, request) => sum + parsePriceFloor(request.budget), 0);
  const invoiceReadyCount = billableRequests.filter((request) => request.billing_name && request.billing_email).length;
  const paymentMethodCount = billableRequests.filter((request) => request.preferred_payment_method).length;
  const shippingReadyCount = requests.filter((request) => request.shipping_name && request.shipping_address).length;
  const billingFollowUpCount = billableRequests.filter(
    (request) => !request.billing_name || !request.billing_email || !request.preferred_payment_method
  ).length;

  const serviceBreakdown = sortMapEntries(buildCountMap(requests, "project_type")).slice(0, 6);
  const statusBreakdown = sortMapEntries(buildCountMap(requests, "status"));
  const invoiceStatusBreakdown = sortMapEntries(buildCountMap(requests, "invoice_status"));
  const paymentStatusBreakdown = sortMapEntries(buildCountMap(requests, "payment_status"));
  const fulfillmentStatusBreakdown = sortMapEntries(buildCountMap(requests, "fulfillment_status"));
  const consultationCalendar = buildConsultationCalendarData({
    availability: getConsultationAvailability(),
    requests,
    perspective: "manager"
  });
  const customerRecords = buildCustomerDatabase(requests);

  const latestRequests = requests.slice(0, 12).map((request) => {
    const consultationAt = parseConsultationDateTime(
      request.consultation_date,
      request.consultation_time
    );
    const daysUntilConsultation = consultationAt
      ? Math.max(0, Math.ceil((consultationAt.getTime() - now) / oneDayMs))
      : null;

    return {
      ...request,
      daysUntilConsultation,
      paymentReady: Boolean(request.billing_name && request.billing_email && request.preferred_payment_method),
      shippingReady: Boolean(request.shipping_name && request.shipping_address),
      budgetFloor: parsePriceFloor(request.budget)
    };
  });

  return {
    metrics: {
      totalRequests: requests.length,
      uniqueClients,
      newRequests,
      activeRequests,
      completedRequests,
      cancelledRequests,
      consultationQueue,
      receivablesFloor,
      invoiceReadyCount,
      paymentMethodCount,
      shippingReadyCount,
      billingFollowUpCount,
      appointmentOnlyRequests: appointmentOnlyRequests.length,
      customerFollowUpCount: customerRecords.filter((customer) => customer.needsFollowUp).length,
      activeCustomerCount: customerRecords.filter((customer) => customer.activeRequestCount > 0).length,
      openCustomerRevenueFloor: customerRecords.reduce((sum, customer) => sum + customer.openBudgetFloor, 0)
    },
    serviceBreakdown,
    statusBreakdown,
    invoiceStatusBreakdown,
    paymentStatusBreakdown,
    fulfillmentStatusBreakdown,
    consultationCalendar,
    customerRecords: customerRecords.slice(0, 24),
    latestRequests,
    modelProfiles
  };
}
