import { Compass, Users, MessageSquare, User } from "lucide-react";


export const BASE_URL = "http://localhost:2007/";

export const NAV_ITEMS = [
  { path: "/discover", label: "Discover", icon: Compass },
  { path: "/connections", label: "Connections", icon: Users },
  { path: "/dm", label: "Messages", icon: MessageSquare },
  { path: "/profile", label: "Profile", icon: User ,  mobileOnly: true},
];
