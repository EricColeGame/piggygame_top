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

export type ContentType = (typeof CONTENT_TYPES)[number];

/**
 * 判断任意字符串是否为合法的内容分类
 * CONTENT_TYPES 是 as const 字面量元组，其 includes() 只接受字面量联合类型，
 * 直接传 string 会编译失败，故统一用此守卫收窄。
 */
export function isContentType(value: string): value is ContentType {
  return (CONTENT_TYPES as readonly string[]).includes(value);
}
