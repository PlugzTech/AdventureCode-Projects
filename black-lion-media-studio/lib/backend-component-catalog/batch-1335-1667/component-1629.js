const component = {
  "id": "backend-ops-1629",
  "name": "Rate Limit Cooldown Window 1629",
  "category": "rate-limit",
  "purpose": "Defines a reusable rate limit cooldown window pattern for Black Lion operational workflows, with explicit inputs, outputs, and review notes for component 1629.",
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
  "operationalNotes": "Catalog-only definition for planning, review, and smoke coverage; keep inactive until a route, job, or admin workflow explicitly adopts component 1629.",
  "safetyLevel": "catalog-only",
  "reusable": true,
  "source": "backend-component-catalog/batch-1335-1667"
};

export default component;
