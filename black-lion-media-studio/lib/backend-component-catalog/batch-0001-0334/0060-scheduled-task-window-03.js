const component = {
    "id": "backend-ops-0060",
    "name": "Scheduled Task Window 0060",
    "category": "scheduling",
    "purpose": "Captures safe scheduling rules for recurring backend maintenance tasks. Batch item 0060 keeps the definition cataloged without runtime wiring.",
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
