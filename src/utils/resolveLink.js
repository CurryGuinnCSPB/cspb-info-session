import links from "../data/links.json";

const rawBase = import.meta.env.BASE_URL || "/";

function normalizeBase(base) {
  if (!base || base === "/") return "";
  return `/${base.replace(/^\/+|\/+$/g, "")}`;
}

const basePath = normalizeBase(rawBase);

export function resolveLink(target) {
  if (!target) return "#";

  if (typeof target !== "string") return "#";

  const resolvedTarget = links[target] || target;

  if (
    resolvedTarget.startsWith("http://") ||
    resolvedTarget.startsWith("https://") ||
    resolvedTarget.startsWith("mailto:") ||
    resolvedTarget.startsWith("tel:") ||
    resolvedTarget.startsWith("#")
  ) {
    return resolvedTarget;
  }

  const cleanTarget = resolvedTarget.startsWith("/")
    ? resolvedTarget
    : `/${resolvedTarget}`;

  return `${basePath}${cleanTarget}`;
}
