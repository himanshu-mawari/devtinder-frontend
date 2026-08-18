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
      text: "Hey!  🚀",
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
// mockMessages.js
// Structure: { [otherUserId]: Message[] }
// Message shape mirrors your Message collection: senderId, text, createdAt
// "dev_me" = the logged-in user for testing purposes — swap for real auth user later

export const CURRENT_USER_ID = "dev_me";

export const mockMessages = {
  dev_101: [
    {
      id: "msg_1",
      senderId: "dev_101",
      text: "Hey! Did you get a chance to check out the new chat layout? Hey! Did you get a chance to check out the new chat layout? Hey! Did you get a chance to check out the new chat layout?",
      createdAt: "2026-08-17T10:30:00.000Z",
    },
    {
      id: "msg_2",
      senderId: "dev_me",
      text: "Yes! Looks super crisp on both mobile and desktop views.",
      createdAt: "2026-08-17T10:35:00.000Z",
    },
    {
      id: "msg_3",
      senderId: "dev_101",
      text: "Just reviewed your PR for the WebSocket hook 🚀",
      createdAt: "2026-08-17T10:42:00.000Z",
    },
  ],
  dev_102: [
    {
      id: "msg_1",
      senderId: "dev_102",
      text: "Do you have the Docker setup specs ready?",
      createdAt: "2026-08-16T18:10:00.000Z",
    },
    {
      id: "msg_2",
      senderId: "dev_me",
      text: "Sounds good! Let's schedule a call tomorrow.",
      createdAt: "2026-08-16T18:22:00.000Z",
    },
  ],
};