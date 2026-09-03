const component = {
    "id": "backend-ops-0216",
    "name": "Data Retention Rule 0216",
    "category": "data-retention",
    "purpose": "Captures lifecycle rules for operational records and user-associated data. Batch item 0216 keeps the definition cataloged without runtime wiring.",
    "inputs": [
      "recordType",
      "retentionWindowDays",
      "legalHoldState"
    ],
    "outputs": [
      "retentionDecision",
      "deletionCandidate",
      "holdReason"
    ],
    "operationalNotes": [
      "Respect legal holds.",
      "Prefer scheduled deletion records.",
      "Keep retention reasons reviewable."
    ],
    "safetyLevel": "catalog-only",
    "reusable": true,
    "source": "backend-component-catalog/batch-0001-0334"
  };

export default component;
