const component = {
  "id": "backend-ops-1550",
  "name": "Data Retention Expiry Policy 1550",
  "category": "data-retention",
  "purpose": "Defines a reusable data retention expiry policy pattern for Black Lion operational workflows, with explicit inputs, outputs, and review notes for component 1550.",
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
  "operationalNotes": "Catalog-only definition for planning, review, and smoke coverage; keep inactive until a route, job, or admin workflow explicitly adopts component 1550.",
  "safetyLevel": "catalog-only",
  "reusable": true,
  "source": "backend-component-catalog/batch-1335-1667"
};

export default component;
