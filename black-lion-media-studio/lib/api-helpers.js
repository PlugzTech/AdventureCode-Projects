import { NextResponse } from "next/server";
import { enforceTrustedOrigin, getAuthenticatedUser } from "./auth";
import { isBookingManager } from "./booking-manager";

const maxJsonBodyBytes = 64 * 1024;

export function jsonOk(payload, init = {}) {
  return NextResponse.json(payload, init);
}

export function jsonError(message, status = 400) {
  return NextResponse.json({ error: message }, { status });
}

export async function parseJsonWithSchema(request, schema, parseWithSchema) {
  const contentType = request.headers.get("content-type") || "";
  if (!contentType.toLowerCase().includes("application/json")) {
    return { error: jsonError("Expected application/json request body.", 415) };
  }

  const contentLength = Number(request.headers.get("content-length") || "0");
  if (contentLength > maxJsonBodyBytes) {
    return { error: jsonError("Request body is too large.", 413) };
  }

  let body;
  try {
    const rawBody = await request.text();
    if (Buffer.byteLength(rawBody, "utf8") > maxJsonBodyBytes) {
      return { error: jsonError("Request body is too large.", 413) };
    }

    body = JSON.parse(rawBody);
  } catch {
    return { error: jsonError("Invalid JSON body.", 400) };
  }

  const parsed = parseWithSchema(schema, body);
  if (!parsed.ok) {
    return { error: jsonError(parsed.error, 400) };
  }

  return { data: parsed.data };
}

export async function requireAuthenticatedUser(request, message = "Please sign in first.") {
  const session = await getAuthenticatedUser(request);
  if (!session) {
    return { error: jsonError(message, 401) };
  }

  return { session };
}

export async function requireBookingManager(request) {
  const auth = await requireAuthenticatedUser(request);
  if (auth.error) {
    return auth;
  }

  if (!isBookingManager(auth.session.user)) {
    return { error: jsonError("Manager access required.", 403) };
  }

  return auth;
}

export async function enforceMutationRequest(request, rateLimit) {
  const untrusted = enforceTrustedOrigin(request);
  if (untrusted) {
    return { error: untrusted };
  }

  if (rateLimit) {
    const limited = await rateLimit(request);
    if (limited) {
      return { error: limited };
    }
  }

  return { ok: true };
}
