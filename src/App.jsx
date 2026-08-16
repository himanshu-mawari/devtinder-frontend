import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Navigate } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import AuthLayout from "./layouts/AuthLayout";
import ChatLayout from "./layouts/ChatLayout";
import Discover from "./pages/Discover";
import Connections from "./pages/Connections";
import Messages from "./pages/Messages";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import ChatViewPlaceholder from "./pages/ChatViewPlaceholder";
import ChatView from "./pages/ChatView";

const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <Signup /> },
    ],
  },
  {
    element: <AppLayout />, // Keeps DesktopSidebar & Mobile Top/Bottom bars active
    children: [
      {
        index: true,
        element: (
          <ProtectedRoute>
            <Navigate to="/discover" />
          </ProtectedRoute>
        ),
      },
      {
        path: "/discover",
        element: (
          <ProtectedRoute>
            <Discover />
          </ProtectedRoute>
        ),
      },
      {
        path: "/connections",
        element: (
          <ProtectedRoute>
            <Connections />
          </ProtectedRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ),
      },

      // Nested ChatLayout inside AppLayout
    ],
  },
{
  path: "/dm",
  element: (
    <ProtectedRoute>
      <ChatLayout />
    </ProtectedRoute>
  ),
  children: [
    {
      index: true,
      element: <ChatViewPlaceholder />, // Render desktop empty state (e.g. "Select a chat")
    },
    {
      path: ":userId", // Relative path without leading "/dm"
      element: <ChatView />, // Component rendering active messages & input bar
    },
  ],
}
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
