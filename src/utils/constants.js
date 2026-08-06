import { Compass, Users, MessageSquare, User } from "lucide-react";


export const BASE_URL = "http://localhost:2007/";

export const NAV_ITEMS = [
  { id: "discover", label: "Discover", icon: Compass },
  { id: "connections", label: "Connections", icon: Users },
  { id: "messages", label: "Messages", icon: MessageSquare },
  { id: "profile", label: "Profile", icon: User },
];
