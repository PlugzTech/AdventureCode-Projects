const component = {
  "id": "backend-ops-1393",
  "name": "Queueing Dead Letter 1393",
  "category": "queueing",
  "purpose": "Defines a reusable queueing dead letter pattern for Black Lion operational workflows, with explicit inputs, outputs, and review notes for component 1393.",
  "inputs": [
    "queueName",
    "jobId",
    "attemptCount"
  ],
  "outputs": [
    "jobDecision",
    "nextAttemptAt",
    "deadLetterReason"
  ],
  "operationalNotes": "Catalog-only definition for planning, review, and smoke coverage; keep inactive until a route, job, or admin workflow explicitly adopts component 1393.",
  "safetyLevel": "catalog-only",
  "reusable": true,
  "source": "backend-component-catalog/batch-1335-1667"
};

export default component;
