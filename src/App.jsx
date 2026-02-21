import Body from "./components/Body";
import Test from "./components/Test";
import Login from "./components/Login";
import Feed from "./components/Feed";
import Profile from "./components/Profile"
import Connections from "./components/Connection";
import RequestPage from "./components/RequestPage";
import EditProfile from "./components/EditProfile";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import NotFoundCoolUI from "./components/NotFound";
import Signup from "./components/Signup";
import ChangePassword from "./components/ChangePassword";

function App() {
  return (
    <Provider store={appStore}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />}>
            <Route index element={<Feed />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup/>} />
            <Route path="test" element={<Test />} />
            <Route path="profile/view" element={<Profile />} />
            <Route path="profile/edit" element={<EditProfile />} />
            <Route path="requests" element={<RequestPage />} />
            <Route path="connections" element={<Connections />} />
            <Route path="change-password" element={<ChangePassword />} />

            <Route path="*" element={<NotFoundCoolUI />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
