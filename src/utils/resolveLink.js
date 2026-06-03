import links from "../data/links.json";

export function resolveLink(value) {
  if (!value) return "#";

  const resolved = links[value] || value;

  if (
    resolved.startsWith("http://") ||
    resolved.startsWith("https://") ||
    resolved.startsWith("mailto:") ||
    resolved.startsWith("tel:") ||
    resolved.startsWith("#")
  ) {
    return resolved;
  }

  const base = import.meta.env.BASE_URL || "/";

  if (resolved.startsWith("/")) {
    return `${base.replace(/\/$/, "")}${resolved}`;
  }

  return resolved;
}
