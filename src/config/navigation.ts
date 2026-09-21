import { LucideIcon } from "lucide-react";

export interface NavigationItem {
  key: string;
  path: `/${string}`;
  icon?: LucideIcon;
  isContentType: boolean;
}

export const NAVIGATION_CONFIG = [
  { key: "guide", path: "/guide", isContentType: true },
  { key: "characters", path: "/characters", isContentType: true },
  { key: "maps", path: "/maps", isContentType: true },
  { key: "modes", path: "/modes", isContentType: true },
  { key: "items", path: "/items", isContentType: true },
  { key: "progression", path: "/progression", isContentType: true },
  { key: "community", path: "/community", isContentType: true },
] satisfies readonly NavigationItem[];

export const CONTENT_TYPES = [
  "guide",
  "characters",
  "maps",
  "modes",
  "items",
  "progression",
  "community",
] as const;
