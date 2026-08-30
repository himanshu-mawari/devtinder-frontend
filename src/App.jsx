import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
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
import ProfileEdit from "./pages/ProfileEdit";
import useAuth from "./hooks/useAuth";
import { useEffect } from "react";
import { socket } from "./utils/socket";
import { Toaster } from "sonner";

function RootLayout() {
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (!isAuthenticated) return;

    socket.connect();

    return () => {
      socket.disconnect();
    };
  }, [isAuthenticated]);

  return <Outlet />;
}
const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
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
            <AppLayout />
          </ProtectedRoute>
        ),
        children: [
          { index: true, element: <Navigate to="/discover" /> },
          { path: "discover", element: <Discover /> },
          { path: "connections", element: <Connections /> },
          {
            path: "profile",
            children: [
              { index: true, element: <Profile /> },
              { path: "edit", element: <ProfileEdit /> },
            ],
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
          { index: true, element: <ChatViewPlaceholder /> },
          { path: ":userId", element: <ChatView /> },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <>
      <Toaster position="top-center" richColors />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
