const component = {
  "id": "backend-ops-1374",
  "name": "Scheduling Calendar Sync 1374",
  "category": "scheduling",
  "purpose": "Defines a reusable scheduling calendar sync pattern for Black Lion operational workflows, with explicit inputs, outputs, and review notes for component 1374.",
  "inputs": [
    "scheduleId",
    "timezone",
    "executionWindow"
  ],
  "outputs": [
    "scheduledRun",
    "conflictState",
    "reminderPlan"
  ],
  "operationalNotes": "Catalog-only definition for planning, review, and smoke coverage; keep inactive until a route, job, or admin workflow explicitly adopts component 1374.",
  "safetyLevel": "catalog-only",
  "reusable": true,
  "source": "backend-component-catalog/batch-1335-1667"
};

export default component;
