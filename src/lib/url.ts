// Prefix internal links with the site's base path so it works on any host.
export function url(path: string): string {
  if (!path || /^(https?:|mailto:|tel:|#)/.test(path)) return path;
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}
