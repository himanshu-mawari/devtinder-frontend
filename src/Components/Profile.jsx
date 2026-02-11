import EditProfile from "./EditProfile";
import { useSelector } from "react-redux";

const Profile = () => {
  const userData = useSelector(store => store?.user);
 
  return (
    <div>

    {userData && <EditProfile profileData={userData}/>}
    </div>
  )
}

export default Profile