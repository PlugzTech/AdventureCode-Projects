const component = {
  "id": "backend-ops-1541",
  "name": "Notifications Email Dispatch 1541",
  "category": "notifications",
  "purpose": "Defines a reusable notifications email dispatch pattern for Black Lion operational workflows, with explicit inputs, outputs, and review notes for component 1541.",
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
  "operationalNotes": "Catalog-only definition for planning, review, and smoke coverage; keep inactive until a route, job, or admin workflow explicitly adopts component 1541.",
  "safetyLevel": "catalog-only",
  "reusable": true,
  "source": "backend-component-catalog/batch-1335-1667"
};

export default component;
