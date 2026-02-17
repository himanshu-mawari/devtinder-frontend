import UserCard from "../components/UserCard";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedSlice";

const Feed = () => {
  const dispatch = useDispatch();
  const feed = useSelector((store) => store?.feed);

  const fetchUserFeed = async () => {
    const res = await axios.get(BASE_URL + "user/feed", {
      withCredentials: true,
    });
    dispatch(addFeed(res?.data?.data));
  };

  useEffect(() => {
    fetchUserFeed();
  }, []);

  if (!feed) return;

  if (feed.length === 0) return <div>No new user found.</div>;

  return <div>{feed && <UserCard userData={feed[0]} />}</div>;
};

export default Feed;
