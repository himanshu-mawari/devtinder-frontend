import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Navigate } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import AuthLayout from "./layouts/AuthLayout";
import Discover from "./pages/Discover";
import Connections from "./pages/Connections";
import Messages from "./pages/Messages";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },

  {
    element: <AppLayout />,
    children: [
      { index: true, element: <Navigate to="/discover" /> },
      { path: "/discover", element: <Discover /> },
      { path: "/connections", element: <Connections /> },
      { path: "/messages", element: <Messages /> },
      { path: "/profile", element: <Profile /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
