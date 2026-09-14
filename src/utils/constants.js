import { Compass, Users, MessageSquare, User } from "lucide-react";

export const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const NAV_ITEMS = [
  { id: 1, path: "/discover", label: "Discover", icon: Compass },
  { id: 2, path: "/connections", label: "Connections", icon: Users },
  { id: 3, path: "/dm", label: "Messages", icon: MessageSquare },
  { id: 4, path: "/profile", label: "Profile", icon: User, mobileOnly: true },
];
