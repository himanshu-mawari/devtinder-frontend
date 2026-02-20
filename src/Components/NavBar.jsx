import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
import { removeUser } from "../utils/userSlice";

const NavBar = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post(BASE_URL + "logout", {}, { withCredentials: true });
      dispatch(removeUser());
      navigate("/login");
    } catch(err){
      // console.log(err)
    }
  };

  return (
    <div>
      <div className=" navbar bg-base-300 h-16 px-4">
        <div className="flex-1  ml-8">
          <Link
            to="/"
            className="flex items-center gap-0 font-logo text-2xl tracking-tighter transition-opacity hover:opacity-90"
          >
            <span className="font-extrabold text-white">Dev</span>
            <span className="font-light text-[#4f9cff]">Tinder</span>
          </Link>
        </div>
        {user && (
          <div className="mr-8">
            <div className="flex items-center gap-1.5 px-3 text-sm md:text-base">
              <span className="text-gray-400 font-medium tracking-tight">
                Welcome Back 👋🏻,
              </span>
              <span className="text-white font-bold tracking-wide hover:text-[#4f9cff] transition-colors cursor-default">
                {user.firstName}
              </span>
            </div>
            <div className="dropdown dropdown-end dropdown-hover">
              <div tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full overflow-hidden">
                  <img
                    src={user.profilePicture}
                    alt="profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow-2xl border border-white/5"
              >
                <li className="menu-title px-4 py-2 text-xs uppercase tracking-widest text-gray-500">
                  Account Settings
                </li>
                <li>
                  <Link to="/profile/view" className="justify-between py-3">
                    Profile
                    <span className="badge badge-primary badge-outline text-[10px] font-bold">
                      NEW
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/connections">All connections</Link>
                </li>
                <li>
                  <Link to="/requests">Connection Requests</Link>
                </li>
                <li>
                  <a
                    onClick={handleLogout}
                    className="text-error hover:bg-error/10"
                  >
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default NavBar;
