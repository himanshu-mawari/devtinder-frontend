import { useSelector , useDispatch} from "react-redux";
import { Link , useNavigate} from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { removeUser } from "../utils/userSlice";

const NavBar = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post(BASE_URL + "logout" , {withCredentionals:true});
      dispatch(removeUser())
      navigate("/login")

    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <div className=" navbar bg-base-200 ">
        <div className="flex-1  ml-8">
          <Link className=" btn btn-ghost text-xl font-semibold">
            🧑🏻‍💻DevTinder
          </Link>
        </div>
        {user && (
          <div className="mr-8">
            <div className="gap-1 px-3 flex">
              <span className="font-normal">Welcome,</span>{" "}
              <span className="font-semibold">{user.firstName}</span>
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
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <Link to="/profile" className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </Link>
                </li>
                <li>
                  <Link to="/settings">Settings</Link>
                </li>
                <li>
                  <a onClick={handleLogout}>Logout</a>
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
