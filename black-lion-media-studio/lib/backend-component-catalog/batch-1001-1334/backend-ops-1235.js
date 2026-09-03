const component = {
  "id": "backend-ops-1235",
  "name": "Abuse Backoff Rule 1235",
  "category": "rate-limit",
  "purpose": "Defines rate-limit keys, windows, and operator notes for high-risk backend actions. Batch item 1235 focuses on rate-limit operations wave 12.",
  "inputs": [
    "actor key",
    "endpoint name",
    "request timestamp"
  ],
  "outputs": [
    "limit decision",
    "retry-after value",
    "abuse marker"
  ],
  "operationalNotes": "Combine IP, account, and action keys for sensitive workflows. Catalog-only definition; review and adapt before wiring into any runtime route.",
  "safetyLevel": "standard",
  "reusable": true,
  "source": "Black Lion Media Studio backend/ops component catalog batch 1001-1334"
};

export default component;
