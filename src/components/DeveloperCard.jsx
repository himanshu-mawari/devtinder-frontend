import { Globe, Check, X } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { getProfileInitials, getGithubUrl } from "../utils/helpers";
import { Link } from "react-router-dom";
import { useSendRequestMutation } from "../services/connectionApi";
import { toast } from "sonner";

const DeveloperCard = ({ user }) => {
  const {
    _id,
    username,
    firstName,
    lastName,
    profilePicture,
    title,
    location,
    skills,
    tags,
    bio,
    githubUsername,
    portfolioUrl,
  } = user;
  const name = firstName + " " + lastName;
  const [sendRequest] = useSendRequestMutation();

  const handleSendRequest = async (status, id) => {
    try {
      const data = { status, id };

      await sendRequest(data);
    } catch (err) {
       toast.error(err?.data?.message || "Couldn't send request. Please try again.")
    }
  };

  return (
    <article className="  w-full border border-border bg-card p-5 sm:p-6 md:p-8 rounded-3xl mt-5   xl:px-10 xl:py-7 2xl:mt-10">
      <div className="flex gap-4 md:gap-6 items-start mb-4">
        {profilePicture ? (
          <img
            src={profilePicture}
            placeholder="Profile picture"
            className="w-20 h-20 rounded-full object-cover object-top hidden sm:block  "
          />
        ) : (
          <span className="hidden bg-logo w-20 h-20 rounded-full justify-center items-center font-heading font-semibold tracking-tight text-primary-foreground text-xl sm:flex shrink-0">
            {getProfileInitials(name.toUpperCase())}
          </span>
        )}

        {profilePicture ? (
          <img
            src={profilePicture}
            placeholder="Profile picture"
            className="w-16 h-16 rounded-full object-cover object-top sm:hidden"
          />
        ) : (
          <span className="bg-logo w-16 h-16 rounded-full flex justify-center items-center font-heading font-semibold tracking-tight text-primary-foreground text-lg sm:hidden shrink-0">
            {getProfileInitials(name)}
          </span>
        )}
        <div className="flex-1 min-w-0 mb-3 md:mb-4">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900">
            {name}
          </h2>

          <div className="flex items-center flex-wrap gap-x-1.5 text-sm md:text-base text-muted-foreground mt-0.5">
            {username && <span>@{username}</span>}

            {username && location && <span>·</span>}

            {location && <span>{location}</span>}
          </div>

          {title && (
            <p className="text-sm md:text-base font-medium text-muted-foreground mt-1">
              {title}
            </p>
          )}
        </div>
      </div>

      <p className="text-[15px] md:text-base leading-relaxed text-muted-foreground line-clamp-3 ">
        {bio}
      </p>

      <div className="mt-6 space-y-4 md:space-y-5 2xl:space-y-4">
        {skills.length ? (
          <div>
            <h3 className="text-[11px] md:text-xs uppercase font-semibold tracking-wide text-muted-foreground mb-2">
              Stack
            </h3>
            <div className="flex flex-wrap gap-2 md:gap-3">
              {skills.slice(0, 3).map((tech) => (
                <div
                  key={tech}
                  className="inline-flex items-center border px-2.5 py-0.5 md:px-3.5 md:py-1 text-xs md:text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground rounded-full font-normal"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        ) : (
          ""
        )}

        {tags?.length  > 0 && (
          <div className="pt-1 ">
            <h3 className="text-[11px] md:text-xs uppercase font-semibold tracking-wide text-muted-foreground mb-2">
              Interests
            </h3>
            <div className="flex items-center gap-2 md:gap-3 flex-wrap">
              {tags.map((line) => (
                <div
                  key={line}
                  className="inline-flex items-center justify-center text-xs md:text-sm text-foreground rounded-full border border-transparent bg-secondary px-3 py-1 md:px-4 md:py-1.5 gap-2"
                >
                  {line}
                </div>
              ))}
            </div>
          </div>
        )}

        <div>
          {githubUsername || portfolioUrl ? (
            <>
              <h3 className="text-[11px] md:text-xs uppercase font-semibold tracking-wide text-muted-foreground mb-2">
                Links
              </h3>
              <div className="flex items-center ml-1 gap-6 text-sm md:text-base text-text font-medium">
                {githubUsername && (
                  <Link
                    className="flex items-center gap-1.5 transition-colors hover:underline"
                    to={getGithubUrl(githubUsername)}
                    target="_blank"
                  >
                    <FaGithub className="w-4 h-4 md:w-5 md:h-5 shrink-0" />
                    <span>@{githubUsername}</span>
                  </Link>
                )}
                {portfolioUrl && (
                  <Link
                    to="https://arjun.dev"
                    className="flex items-center gap-1.5 transition-colors hover:underline"
                    target="_blank"
                  >
                    <Globe className="w-4 h-4 md:w-5 md:h-5 shrink-0" />
                    <span>{portfolioUrl}</span>
                  </Link>
                )}
              </div>
            </>
          ) : (
            ""
          )}
        </div>

        <div className="flex items-center justify-center md:justify-around gap-4 pt-4 md:pt-6 ">
          <button
            type="button"
            className="flex flex-1 md:flex-initial md:w-64 items-center justify-center gap-2 rounded-xl bg-background px-4 py-2.5 md:py-3 text-sm md:text-base font-semibold text-foreground transition-transform duration-100 ease-out cursor-pointer select-none active:scale-95 border border-input hover:bg-accent hover:text-accent-foreground xl:max-w-52 "
            onClick={() => handleSendRequest("ignored", _id)}
          >
            <X className="w-4 h-4 md:w-5 md:h-5" />
            <span>Pass</span>
          </button>

          <button
            type="button"
            className="flex flex-1 md:flex-initial md:w-64 items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 md:py-3 text-sm md:text-base font-semibold text-primary-foreground hover:opacity-90 transition-transform duration-100 ease-out cursor-pointer select-none active:scale-95 shadow-sm  xl:max-w-52 "
            onClick={() => handleSendRequest("interested", _id)}
          >
            <Check className="w-4 h-4 md:w-5 md:h-5" />
            <span>Connect</span>
          </button>
        </div>
      </div>
    </article>
  );
};

export default DeveloperCard;
