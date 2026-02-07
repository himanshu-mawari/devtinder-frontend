import { useSelector } from "react-redux";

const NavBar = () => {
  const user = useSelector((store) => store.user);

  return (
    <div>
      <div className=" navbar bg-base-200 ">
        <div className="flex-1  ml-8">
          <a className=" btn btn-ghost text-xl font-semibold">🧑🏻‍💻DevTinder</a>
        </div>
        {user && (
          <div className="flex-none gap-2 mr-8 ">
                <div className="form-control px-3">Welcome, {user.firstName}</div>
            <div className="dropdown dropdown-end ">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar "
              >
                <div className="w-14  rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={user.profilePicture}
                    
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
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
