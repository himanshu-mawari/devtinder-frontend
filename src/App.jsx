import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Navigate } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import AuthLayout from "./layouts/AuthLayout";
import ChatLayout from "./layouts/ChatLayout";
import Discover from "./pages/Discover";
import Connections from "./pages/Connections";
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
    element: (
      <ProtectedRoute>
        <AppLayout />, // Keeps DesktopSidebar & Mobile Top/Bottom bars active
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <Navigate to="/discover" />,
      },
      {
        path: "/discover",
        element: <Discover />,
      },
      {
        path: "/connections",
        element: <Connections />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
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
        element: <ChatViewPlaceholder />,
      },
      {
        path: ":userId",
        element: <ChatView />,
      },
      
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
