/**
 * Field-level merge: take a Sanity document (which may be null or have
 * missing/empty fields after partial editing) and fill in the gaps from a
 * canonical default. Treats empty strings and empty arrays as "missing" so
 * an editor accidentally clearing a field doesn't blank the section.
 */
export function mergeWithDefaults<T extends object>(
  sanity: Partial<T> | null | undefined,
  defaults: T
): T {
  if (!sanity) return defaults;
  const result: Record<string, unknown> = { ...(defaults as Record<string, unknown>) };
  for (const key of Object.keys(sanity) as (keyof T)[]) {
    const v = sanity[key];
    if (v == null) continue;
    if (typeof v === "string" && v.trim() === "") continue;
    if (Array.isArray(v) && v.length === 0) continue;
    result[key as string] = v;
  }
  return result as T;
}
