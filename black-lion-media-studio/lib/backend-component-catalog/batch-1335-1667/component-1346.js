const component = {
  "id": "backend-ops-1346",
  "name": "Health Readiness Probe 1346",
  "category": "health",
  "purpose": "Defines a reusable health readiness probe pattern for Black Lion operational workflows, with explicit inputs, outputs, and review notes for component 1346.",
  "inputs": [
    "serviceName",
    "dependencyList",
    "buildVersion"
  ],
  "outputs": [
    "healthState",
    "dependencyReport",
    "responseTimeMs"
  ],
  "operationalNotes": "Catalog-only definition for planning, review, and smoke coverage; keep inactive until a route, job, or admin workflow explicitly adopts component 1346.",
  "safetyLevel": "catalog-only",
  "reusable": true,
  "source": "backend-component-catalog/batch-1335-1667"
};

export default component;
