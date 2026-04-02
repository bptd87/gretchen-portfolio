type SessionCookieOptions = {
  httpOnly: true;
  path: "/";
  sameSite: "lax" | "none";
  secure: boolean;
};

type SerializedCookieOptions = SessionCookieOptions & {
  expires?: Date;
  maxAge?: number;
};

function isSecureRequest(request: Request) {
  const url = new URL(request.url);
  if (url.protocol === "https:") {
    return true;
  }

  const forwardedProto = request.headers.get("x-forwarded-proto");
  if (!forwardedProto) {
    return false;
  }

  return forwardedProto
    .split(",")
    .some(proto => proto.trim().toLowerCase() === "https");
}

export function getSessionCookieOptions(request: Request): SessionCookieOptions {
  const secure = isSecureRequest(request);

  return {
    httpOnly: true,
    path: "/",
    sameSite: secure ? "none" : "lax",
    secure,
  };
}

export function serializeCookie(
  name: string,
  value: string,
  options: SerializedCookieOptions
) {
  const parts = [`${name}=${encodeURIComponent(value)}`, `Path=${options.path}`];

  if (options.maxAge !== undefined) {
    parts.push(`Max-Age=${options.maxAge}`);
  }

  if (options.expires) {
    parts.push(`Expires=${options.expires.toUTCString()}`);
  }

  if (options.httpOnly) {
    parts.push("HttpOnly");
  }

  if (options.sameSite === "lax") {
    parts.push("SameSite=Lax");
  }

  if (options.sameSite === "none") {
    parts.push("SameSite=None");
  }

  if (options.secure) {
    parts.push("Secure");
  }

  return parts.join("; ");
}
