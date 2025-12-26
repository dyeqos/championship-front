import type { ReactNode } from "react";

export interface SidebarItem {
  title: string;
  icon: ReactNode;
  isActive?: boolean;
  url?: string;
  items?: {
    title: string;
    url: string;
  }[];
}
