const component = {
  "id": "backend-ops-1703",
  "name": "Data Retention Data Retention Rule 2",
  "category": "data-retention",
  "purpose": "Batch 1703 sets operational expectations for keeping, archiving, or deleting records.",
  "inputs": [
    "record type",
    "age threshold",
    "legal hold state"
  ],
  "outputs": [
    "retention action",
    "review due date",
    "deletion eligibility"
  ],
  "operationalNotes": [
    "Honor legal hold and active dispute flags before deletion.",
    "Prefer documented retention classes over ad hoc cleanup.",
    "Catalog-only definition for planning, documentation, and operational reuse; not wired into runtime routes."
  ],
  "safetyLevel": "restricted",
  "reusable": true,
  "source": "Black Lion Media Studio backend/ops component catalog batch 1668-2000"
};

export default component;
