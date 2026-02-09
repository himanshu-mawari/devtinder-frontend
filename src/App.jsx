import Body from "./components/Body";
import Test from "./components/Test";
import Login from "./components/Login";
import Feed from "./components/Feed";
import Profile from "./components/Profile"

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

function App() {
  return (
    <Provider store={appStore}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/" element={<Feed />} />
            <Route path="login" element={<Login />} />
            <Route path="test" element={<Test />} />
            <Route path="profile" element={<Profile />} />
            <Route path="Login" element={<Navigate to="/login" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
