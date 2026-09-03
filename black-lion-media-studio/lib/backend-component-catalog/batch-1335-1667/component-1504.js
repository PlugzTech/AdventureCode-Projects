const component = {
  "id": "backend-ops-1504",
  "name": "Deployment Rollback Marker 1504",
  "category": "deployment",
  "purpose": "Defines a reusable deployment rollback marker pattern for Black Lion operational workflows, with explicit inputs, outputs, and review notes for component 1504.",
  "inputs": [
    "releaseId",
    "environment",
    "artifactHash"
  ],
  "outputs": [
    "deploymentDecision",
    "releaseNotes",
    "rollbackHint"
  ],
  "operationalNotes": "Catalog-only definition for planning, review, and smoke coverage; keep inactive until a route, job, or admin workflow explicitly adopts component 1504.",
  "safetyLevel": "catalog-only",
  "reusable": true,
  "source": "backend-component-catalog/batch-1335-1667"
};

export default component;
