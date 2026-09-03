const component = {
    "id": "backend-ops-0020",
    "name": "Scheduled Task Window 0020",
    "category": "scheduling",
    "purpose": "Captures safe scheduling rules for recurring backend maintenance tasks. Batch item 0020 keeps the definition cataloged without runtime wiring.",
    "inputs": [
      "taskName",
      "cronExpression",
      "timezone"
    ],
    "outputs": [
      "schedulePlan",
      "nextRunWindow",
      "overlapPolicy"
    ],
    "operationalNotes": [
      "Define timezone explicitly.",
      "Prevent overlapping executions.",
      "Log missed and delayed runs."
    ],
    "safetyLevel": "catalog-only",
    "reusable": true,
    "source": "backend-component-catalog/batch-0001-0334"
  };

export default component;
