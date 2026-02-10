const UserCard = ({ feedData }) => {
  const { firstName, bio, age, profilePicture, skills } = feedData;
  console.log(skills);

  return (
    <div className="flex justify-center mt-6">
      <div className="relative w-96 h-[34rem] rounded-xl overflow-hidden shadow-lg">
        <img
          src={profilePicture}
          alt="profile"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

        <div className="absolute bottom-0 p-5 text-white w-full space-y-3">
          <div className="text-3xl font-bold leading-tight">
            {firstName}{" "}
            {age && (
              <span className="text-xl font-semibold opacity-90">{age}</span>
            )}
          </div>
          <div className="flex items-start gap-2 text-sm opacity-90">
            <span>📝</span>
            <p className="line-clamp-2">{bio}</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {skills?.slice(0, 3).map((skill, i) => (
              <span
                key={i}
                className="px-3 py-1 text-xs font-medium bg-white/15 backdrop-blur-sm rounded-full border border-white/25"
              >
                {skill}
              </span>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-3 pt-2">
            <button className="h-11 rounded-xl btn bg-blue-400 hover:bg-blue-500 active:bg-blue-600 border-none text-white text-lg shadow-md">
              Ignore
            </button>
            <button className="h-11 rounded-xl btn bg-pink-500 hover:bg-pink-600 active:bg-pink-700 border-none text-white text-lg shadow-md">
              Interested
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
