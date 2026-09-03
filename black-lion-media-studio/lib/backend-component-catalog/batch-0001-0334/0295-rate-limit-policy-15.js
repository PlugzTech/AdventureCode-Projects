const component = {
    "id": "backend-ops-0295",
    "name": "Rate Limit Policy 0295",
    "category": "rate-limit",
    "purpose": "Defines request throttling boundaries for backend endpoints and jobs. Batch item 0295 keeps the definition cataloged without runtime wiring.",
    "inputs": [
      "actorKey",
      "operationName",
      "windowConfig"
    ],
    "outputs": [
      "limitDecision",
      "retryAfterSeconds",
      "quotaSnapshot"
    ],
    "operationalNotes": [
      "Use stable actor keys.",
      "Apply stricter limits to unauthenticated traffic.",
      "Audit repeated limit violations."
    ],
    "safetyLevel": "catalog-only",
    "reusable": true,
    "source": "backend-component-catalog/batch-0001-0334"
  };

export default component;
