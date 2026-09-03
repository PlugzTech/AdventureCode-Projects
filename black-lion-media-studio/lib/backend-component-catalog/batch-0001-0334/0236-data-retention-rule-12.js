const component = {
    "id": "backend-ops-0236",
    "name": "Data Retention Rule 0236",
    "category": "data-retention",
    "purpose": "Captures lifecycle rules for operational records and user-associated data. Batch item 0236 keeps the definition cataloged without runtime wiring.",
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
