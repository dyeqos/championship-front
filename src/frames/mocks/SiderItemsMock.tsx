import {
  Bookmark,
  BookOpen,
  FileText,
  Grid,
  Home,
  Layers,
  Settings,
  Users,
} from "lucide-react";
import type { SidebarItem } from "../interfaces/SidebarItemInterface";
// Sample data for sidebar navigation
export const sidebarItems: SidebarItem[] = [
  {
    title: "Home",
    icon: <Home />,
    isActive: true,
  },
  {
    title: "Parámetros",
    icon: <Settings />,
  },
  {
    title: "Apps",
    icon: <Grid />,
    items: [
      { title: "All Apps", url: "#" },
      { title: "Recent", url: "#" },
      { title: "Updates", url: "#" },
      { title: "Installed", url: "#" },
    ],
  },
  {
    title: "Files",
    icon: <FileText />,
    items: [
      { title: "Recent", url: "#" },
      { title: "Shared with me", url: "#" },
      { title: "Favorites", url: "#" },
      { title: "Trash", url: "#" },
    ],
  },
  {
    title: "Projects",
    icon: <Layers />,
    items: [
      { title: "Active Projects", url: "#" },
      { title: "Archived", url: "#" },
      { title: "Templates", url: "#" },
    ],
  },
  {
    title: "Learn",
    icon: <BookOpen />,
    items: [
      { title: "Tutorials", url: "#" },
      { title: "Courses", url: "#" },
      { title: "Webinars", url: "#" },
      { title: "Resources", url: "#" },
    ],
  },
  {
    title: "Community",
    icon: <Users />,
    items: [
      { title: "Explore", url: "#" },
      { title: "Following", url: "#" },
      { title: "Challenges", url: "#" },
      { title: "Events", url: "#" },
    ],
  },
  {
    title: "Resources",
    icon: <Bookmark />,
    items: [
      { title: "Stock Photos", url: "#" },
      { title: "Fonts", url: "#" },
      { title: "Icons", url: "#" },
      { title: "Templates", url: "#" },
    ],
  },
];
