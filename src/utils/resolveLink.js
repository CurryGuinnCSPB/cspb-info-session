const rawBase = import.meta.env.BASE_URL || "/";

function normalizeBase(base) {
  if (!base || base === "/") return "";
  return `/${base.replace(/^\/+|\/+$/g, "")}`;
}

const basePath = normalizeBase(rawBase);

export function resolveLink(target) {
  if (!target) return "#";

  if (typeof target !== "string") return "#";

  if (
    target.startsWith("http://") ||
    target.startsWith("https://") ||
    target.startsWith("mailto:") ||
    target.startsWith("tel:") ||
    target.startsWith("#")
  ) {
    return target;
  }

  const cleanTarget = target.startsWith("/")
    ? target
    : `/${target}`;

  return `${basePath}${cleanTarget}`;
}
