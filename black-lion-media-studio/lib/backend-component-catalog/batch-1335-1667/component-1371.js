const component = {
  "id": "backend-ops-1371",
  "name": "Backup Export Check 1371",
  "category": "backup",
  "purpose": "Defines a reusable backup export check pattern for Black Lion operational workflows, with explicit inputs, outputs, and review notes for component 1371.",
  "inputs": [
    "datasetName",
    "snapshotId",
    "storageLocation"
  ],
  "outputs": [
    "backupState",
    "integrityReport",
    "nextSnapshotAt"
  ],
  "operationalNotes": "Catalog-only definition for planning, review, and smoke coverage; keep inactive until a route, job, or admin workflow explicitly adopts component 1371.",
  "safetyLevel": "catalog-only",
  "reusable": true,
  "source": "backend-component-catalog/batch-1335-1667"
};

export default component;
