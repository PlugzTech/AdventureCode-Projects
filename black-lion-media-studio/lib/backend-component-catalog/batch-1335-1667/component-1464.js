const component = {
  "id": "backend-ops-1464",
  "name": "Deployment Static Hosting Check 1464",
  "category": "deployment",
  "purpose": "Defines a reusable deployment static hosting check pattern for Black Lion operational workflows, with explicit inputs, outputs, and review notes for component 1464.",
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
  "operationalNotes": "Catalog-only definition for planning, review, and smoke coverage; keep inactive until a route, job, or admin workflow explicitly adopts component 1464.",
  "safetyLevel": "catalog-only",
  "reusable": true,
  "source": "backend-component-catalog/batch-1335-1667"
};

export default component;
