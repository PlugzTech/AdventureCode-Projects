const component = {
  "id": "backend-ops-1515",
  "name": "Auth Account Recovery 1515",
  "category": "auth",
  "purpose": "Defines a reusable auth account recovery pattern for Black Lion operational workflows, with explicit inputs, outputs, and review notes for component 1515.",
  "inputs": [
    "userId",
    "sessionCookie",
    "requiredRole"
  ],
  "outputs": [
    "authorizationDecision",
    "normalizedClaims",
    "auditEvent"
  ],
  "operationalNotes": "Catalog-only definition for planning, review, and smoke coverage; keep inactive until a route, job, or admin workflow explicitly adopts component 1515.",
  "safetyLevel": "catalog-only",
  "reusable": true,
  "source": "backend-component-catalog/batch-1335-1667"
};

export default component;
