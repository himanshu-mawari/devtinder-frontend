import NavBar from "./NavBar";
import Footer from "./Footer";
import { Outlet , useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { getProfileData } from "../services/userService";

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fetchUserData = async () => {
    try {
      const res = await getProfileData()
      dispatch(addUser(res.data));
    } catch (err) {
      if (err.response?.status === 401) {
        navigate("/login");
      }
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <>
      <NavBar /> 
      <Outlet />
      <Footer />
    </>
  )
};

export default Body;