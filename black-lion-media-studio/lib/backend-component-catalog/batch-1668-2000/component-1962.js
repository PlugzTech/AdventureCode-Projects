const component = {
  "id": "backend-ops-1962",
  "name": "Rate Limit Rate Limit Policy 15",
  "category": "rate-limit",
  "purpose": "Batch 1962 protects backend workflows from abusive or accidental request bursts.",
  "inputs": [
    "actor key",
    "route key",
    "window size"
  ],
  "outputs": [
    "limit decision",
    "remaining allowance",
    "retry after value"
  ],
  "operationalNotes": [
    "Apply stricter limits to anonymous or high-impact actions.",
    "Use stable keys that do not expose private identifiers.",
    "Catalog-only definition for planning, documentation, and operational reuse; not wired into runtime routes."
  ],
  "safetyLevel": "standard",
  "reusable": true,
  "source": "Black Lion Media Studio backend/ops component catalog batch 1668-2000"
};

export default component;
