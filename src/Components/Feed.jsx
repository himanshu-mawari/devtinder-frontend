import UserCard from "../components/UserCard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedSlice";
import CardSkeleton from "./CardSkeleton";
import {getFeed} from "../services/feedService"

const Feed = () => {
  const dispatch = useDispatch();
  const feed = useSelector((store) => store?.feed);

  const fetchUserFeed = async () => {
    const res = await getFeed();
    dispatch(addFeed(res?.data?.data));
  };

  useEffect(() => {
    fetchUserFeed();
  }, []);

  if (!feed) return <CardSkeleton />

  if (feed.length === 0) return <div>No new user found.</div>;

  return <div>{feed && <UserCard userData={feed[0]} />}</div>;
};

export default Feed;
