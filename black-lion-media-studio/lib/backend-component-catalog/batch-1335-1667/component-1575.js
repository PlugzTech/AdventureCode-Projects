const component = {
  "id": "backend-ops-1575",
  "name": "Auth Role Claim 1575",
  "category": "auth",
  "purpose": "Defines a reusable auth role claim pattern for Black Lion operational workflows, with explicit inputs, outputs, and review notes for component 1575.",
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
  "operationalNotes": "Catalog-only definition for planning, review, and smoke coverage; keep inactive until a route, job, or admin workflow explicitly adopts component 1575.",
  "safetyLevel": "catalog-only",
  "reusable": true,
  "source": "backend-component-catalog/batch-1335-1667"
};

export default component;
