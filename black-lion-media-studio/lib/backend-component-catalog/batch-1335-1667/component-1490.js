const component = {
  "id": "backend-ops-1490",
  "name": "Data Retention Archive Rule 1490",
  "category": "data-retention",
  "purpose": "Defines a reusable data retention archive rule pattern for Black Lion operational workflows, with explicit inputs, outputs, and review notes for component 1490.",
  "inputs": [
    "recordType",
    "createdAt",
    "retentionPolicy"
  ],
  "outputs": [
    "retentionDecision",
    "purgeCandidate",
    "receiptRecord"
  ],
  "operationalNotes": "Catalog-only definition for planning, review, and smoke coverage; keep inactive until a route, job, or admin workflow explicitly adopts component 1490.",
  "safetyLevel": "catalog-only",
  "reusable": true,
  "source": "backend-component-catalog/batch-1335-1667"
};

export default component;
