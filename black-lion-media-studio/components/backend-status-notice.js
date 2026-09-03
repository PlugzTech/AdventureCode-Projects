"use client";

import { useEffect, useState } from "react";

export function BackendStatusNotice({
  context = "account and request",
  className = ""
}) {
  const [offline, setOffline] = useState(false);

  useEffect(() => {
    let active = true;

    fetch("/api/me", { cache: "no-store", credentials: "same-origin" })
      .then((response) => {
        if (active) {
          setOffline(response.status >= 500);
        }
      })
      .catch(() => {
        if (active) {
          setOffline(true);
        }
      });

    return () => {
      active = false;
    };
  }, []);

  if (!offline) {
    return null;
  }

  return (
    <div className={`ui-support-notice ${className}`.trim()} role="status">
      <strong>Online {context} tools are temporarily unavailable.</strong>
      <p>
        The public branch pages are live. Use Square Appointments or email contact@blacklionstudios.com
        until the Firebase account backend is restored.
      </p>
    </div>
  );
}
