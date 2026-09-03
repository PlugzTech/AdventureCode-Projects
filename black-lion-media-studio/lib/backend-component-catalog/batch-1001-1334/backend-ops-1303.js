const component = {
  "id": "backend-ops-1303",
  "name": "App Instance Registry 1303",
  "category": "firebase",
  "purpose": "Documents Firebase admin setup, project targeting, and environment separation for backend processes. Batch item 1303 focuses on firebase operations wave 16.",
  "inputs": [
    "Firebase project id",
    "admin app name",
    "runtime environment"
  ],
  "outputs": [
    "project boundary summary",
    "admin readiness signal",
    "environment warning"
  ],
  "operationalNotes": "Never include private keys or service account JSON in catalog entries. Catalog-only definition; review and adapt before wiring into any runtime route.",
  "safetyLevel": "restricted",
  "reusable": true,
  "source": "Black Lion Media Studio backend/ops component catalog batch 1001-1334"
};

export default component;
