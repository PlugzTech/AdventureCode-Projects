const component = {
  "id": "backend-ops-1489",
  "name": "Rate Limit Endpoint Quota 1489",
  "category": "rate-limit",
  "purpose": "Defines a reusable rate limit endpoint quota pattern for Black Lion operational workflows, with explicit inputs, outputs, and review notes for component 1489.",
  "inputs": [
    "subjectKey",
    "endpointName",
    "windowSeconds"
  ],
  "outputs": [
    "limitDecision",
    "remainingQuota",
    "resetAt"
  ],
  "operationalNotes": "Catalog-only definition for planning, review, and smoke coverage; keep inactive until a route, job, or admin workflow explicitly adopts component 1489.",
  "safetyLevel": "catalog-only",
  "reusable": true,
  "source": "backend-component-catalog/batch-1335-1667"
};

export default component;
