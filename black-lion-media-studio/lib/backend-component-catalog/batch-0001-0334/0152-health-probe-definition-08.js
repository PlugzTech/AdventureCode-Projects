const component = {
    "id": "backend-ops-0152",
    "name": "Health Probe Definition 0152",
    "category": "health",
    "purpose": "Models a backend health probe for dependency and readiness checks. Batch item 0152 keeps the definition cataloged without runtime wiring.",
    "inputs": [
      "dependencyName",
      "probeTimeoutMs",
      "expectedState"
    ],
    "outputs": [
      "healthStatus",
      "dependencyLatency",
      "degradedReason"
    ],
    "operationalNotes": [
      "Keep probes lightweight.",
      "Distinguish readiness from liveness.",
      "Do not require privileged writes for health checks."
    ],
    "safetyLevel": "catalog-only",
    "reusable": true,
    "source": "backend-component-catalog/batch-0001-0334"
  };

export default component;
