const component = {
  "id": "backend-ops-1581",
  "name": "Notifications Delivery Retry 1581",
  "category": "notifications",
  "purpose": "Defines a reusable notifications delivery retry pattern for Black Lion operational workflows, with explicit inputs, outputs, and review notes for component 1581.",
  "inputs": [
    "recipient",
    "templateId",
    "messageContext"
  ],
  "outputs": [
    "deliveryPlan",
    "messageId",
    "retryAfter"
  ],
  "operationalNotes": "Catalog-only definition for planning, review, and smoke coverage; keep inactive until a route, job, or admin workflow explicitly adopts component 1581.",
  "safetyLevel": "catalog-only",
  "reusable": true,
  "source": "backend-component-catalog/batch-1335-1667"
};

export default component;
