const component = {
    "id": "backend-ops-0301",
    "name": "Identity Session Guard 0301",
    "category": "auth",
    "purpose": "Standardizes server-side session checks before privileged backend operations run. Batch item 0301 keeps the definition cataloged without runtime wiring.",
    "inputs": [
      "sessionCookie",
      "requiredRole",
      "requestContext"
    ],
    "outputs": [
      "authDecision",
      "normalizedUserId",
      "roleClaims"
    ],
    "operationalNotes": [
      "Validate cookies on the server only.",
      "Log denied access without storing secrets.",
      "Keep role checks explicit per operation."
    ],
    "safetyLevel": "catalog-only",
    "reusable": true,
    "source": "backend-component-catalog/batch-0001-0334"
  };

export default component;
