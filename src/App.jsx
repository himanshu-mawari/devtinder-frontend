import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import Discover from "./pages/Discover";
import Connections from "./pages/Connections";
import Messages from "./pages/Messages";
import Profile from "./pages/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
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
