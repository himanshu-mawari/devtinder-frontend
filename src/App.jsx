import Body from "./components/Body";
import Test from "./components/Test";
import Login from "./components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux"
import appStore from "./utils/appStore";
import Feed from "./components/Feed"


function App() {
  return (
    <Provider store={appStore}>

    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Body />}>
          <Route path="/test" element={<Test />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Feed />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
