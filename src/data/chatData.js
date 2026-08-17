// Currently logged-in user profile
export const currentUser = {
  id: "user_me",
  name: "Himanshu Mawari",
  username: "himanshumawari21",
  avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200",
  headline: "Full Stack Engineer | React & Node.js",
  isOnline: true,
};

// Data for Column 2: ChatList
export const mockChats = [
  {
    userId: "dev_101",
    name: "Sarah Chen",
    username: "sarah_codes",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
    isOnline: true,
    unreadCount: 2,
    lastMessage: {
      text: "Hey! Just reviewed your PR for the WebSocket hook 🚀",
      senderId: "dev_101",
      timestamp: new Date("2026-08-17T10:42:00+05:30"),
    },
    read: true,
  },
  {
    read: false,
    userId: "dev_102",
    name: "Alex Rivera",
    username: "arivera_dev",
    avatar:
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    isOnline: false,
    unreadCount: 0,
    lastMessage: {
      text: "Sounds good! Let's schedule a call tomorrow.",
      senderId: "user_me",
      timestamp: new Date("2026-08-16T18:30:00+05:30"),
    },
  },
  {
    read: false,
    online: false,
    userId: "dev_103",
    name: "Elena Rostova",
    username: "elena_ui",
    avatar:
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=200",
    isOnline: true,
    unreadCount: 0,
    lastMessage: {
      text: "Love the design system dark mode colors!",
      senderId: "dev_103",
      timestamp: new Date("2026-08-14T15:20:00+05:30"),
    },
  },
  {
    userId: "dev_104",
    name: "Marcus Vance",
    online: true,
    read: true,
    username: "marcus_v",
    avatar:
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
    isOnline: false,
    unreadCount: 0,
    lastMessage: {
      text: "Are you free for a quick pair-programming session?",
      senderId: "dev_104",
      timestamp: new Date("2026-08-12T11:45:00+05:30"),
    },
  },
];

// Data for Column 3: Active Message Thread inside ChatView (Keyed by userId)
export const mockMessages = {
  dev_101: [
    {
      id: "msg_1",
      senderId: "user_me",
      text: "Hey Sarah! Did you get a chance to check out the new chat layout?",
      timestamp: "10:30 AM",
    },
    {
      id: "msg_2",
      senderId: "dev_101",
      text: "Yes! Looks super crisp on both mobile and desktop views.",
      timestamp: "10:35 AM",
    },
    {
      id: "msg_3",
      senderId: "dev_101",
      text: "Hey! Just reviewed your PR for the WebSocket hook 🚀",
      timestamp: "10:42 AM",
    },
  ],
  dev_102: [
    {
      id: "msg_1",
      senderId: "dev_102",
      text: "Do you have the Docker setup specs ready?",
      timestamp: "Yesterday",
    },
    {
      id: "msg_2",
      senderId: "user_me",
      text: "Sounds good! Let's schedule a call tomorrow.",
      timestamp: "Yesterday",
    },
  ],
};