import {
  Bookmark,
  BookOpen,
  FileText,
  Grid,
  Home,
  Layers,
  Users,
} from "lucide-react";
// Sample data for sidebar navigation
export const sidebarItems = [
  {
    title: "Home",
    icon: <Home />,
    isActive: true,
  },
  {
    title: "Apps",
    icon: <Grid />,
    badge: "2",
    items: [
      { title: "All Apps", url: "#" },
      { title: "Recent", url: "#" },
      { title: "Updates", url: "#", badge: "2" },
      { title: "Installed", url: "#" },
    ],
  },
  {
    title: "Files",
    icon: <FileText />,
    items: [
      { title: "Recent", url: "#" },
      { title: "Shared with me", url: "#", badge: "3" },
      { title: "Favorites", url: "#" },
      { title: "Trash", url: "#" },
    ],
  },
  {
    title: "Projects",
    icon: <Layers />,
    badge: "4",
    items: [
      { title: "Active Projects", url: "#", badge: "4" },
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
