import { routesConfig } from "@/lib/routesConfig";

export function getRouteConfigByPath(path: string) {
  const exact = routesConfig.find((r) => r.path === path);
  if (exact) return exact;

  for (const route of routesConfig) {
    if (route.path.includes(":")) {
      const base = route.path.split("/:")[0];
      if (path.startsWith(base + "/")) {
        return route;
      }
    }
  }

  return undefined;
}

export function getRouteLabel(path: string) {
  return getRouteConfigByPath(path)?.label ?? "";
}
