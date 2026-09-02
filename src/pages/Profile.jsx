import { useState } from "react";
import { CiMail, CiLink } from "react-icons/ci";
import { LuGithub } from "react-icons/lu";
import { MapPin } from "lucide-react";
import { useGetProfileQuery } from "../services/userApi";
import { Link } from "react-router-dom";
import ProfileSkeleton from "../components/ProfileSkeleton";
import useErrorHandler from "../hooks/useErrorHandler";
import { getProfileInitials } from "../utils/helpers";

const ProfileScreen = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { data, isLoading, isError, error, isFetching, refetch } =
    useGetProfileQuery();
  const {
    firstName,
    lastName,
    email,
    githubUsername,
    bio,
    profilePicture,
    skills,
    tags,
    username,
    title,
    portfolioUrl,
    location,
  } = data;
  const name = firstName + " " + lastName;
  const { message, showRetry } = useErrorHandler(error, "Profile");

  const isLong = bio?.length > 90;
  console.log(profilePicture);
  return (
    <div className="relative mx-auto flex h-dvh  flex-col overflow-hidden bg-background text-text">
      <main className="flex-1 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] mb-20 lg:mb-0">
        <header className="mb-5">
          <h2 className="text-2xl md:text-3xl 2xl:text-2xl font-bold text-text">
            Profile
          </h2>
          <p className="mt-1 text-sm leading-snug text-muted">
            Manage your personal details — this is what other developers see
            when they discover you..
          </p>
        </header>
        {isLoading ? (
          <ProfileSkeleton />
        ) : isError ? (
          <ErrorState
            message={message}
            onRetry={refetch}
            showRetry={showRetry}
            isRetrying={isFetching}
          />
        ) : (
          <section className="mb-6 space-y-4">
            <div className="flex items-center gap-4">
              {profilePicture ? (
                <img
                  src={profilePicture}
                  alt={`${firstName} ${lastName}`}
                  className="h-20 w-20 md:w-24 md:h-24 xl:w-20 xl:h-20 rounded-full object-cover object-top ring-2 ring-border"
                />
              ) : (
                <span className="bg-logo w-20 h-20 md:w-24 md:h-24 xl:w-20 xl:h-20 rounded-full flex justify-center items-center font-heading font-semibold tracking-tight text-primary-foreground text-xl lg:text-2xl  shrink-0">
                  {getProfileInitials(name.toUpperCase())}
                </span>
              )}
              <div>
                <h3 className="text-lg md:text-xl 2xl:text-lg font-bold leading-tight text-text">
                  {firstName} {lastName}
                </h3>
                <div className="flex flex-wrap items-center gap-x-2 text-sm text-muted md:text-base">
                  <p>@{username}</p>
                  {location && (
                    <>
                      <span className="text-muted/60">•</span>
                      <div className="flex items-center gap-1 text-xs md:text-sm">
                        <MapPin className="h-3.5 w-3.5" />
                        <span>{location}</span>
                      </div>
                    </>
                  )}
                </div>

                {title && (
                  <span className="mt-1.5 inline-block rounded-full bg-secondary py-0.5 text-xs md:text-sm 2xl:text-xs font-medium text-secondary-foreground">
                    {title}
                  </span>
                )}
              </div>
            </div>

            {bio && (
              <div>
                <p
                  className={`text-sm md:text-base 2xl:text-sm text-muted-foreground ${
                    !isExpanded && isLong ? "line-clamp-2" : ""
                  }`}
                >
                  {bio}
                </p>
                {isLong && (
                  <button
                    type="button"
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="mt-1 text-xs md:text-sm  font-semibold text-primary hover:underline focus:outline-none"
                  >
                    {isExpanded ? "see less" : "...see more"}
                  </button>
                )}
              </div>
            )}
            <Link className="w-full block sm:w-auto" to={"edit"}>
              <button
                type="button"
                className="w-full rounded-xl bg-primary px-6 py-2.5 text-sm md:text-base 2xl:text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:opacity-90 active:scale-95 "
              >
                Edit profile
              </button>
            </Link>

            <div className="mb-6 rounded-2xl border border-border bg-card p-5 md:p-6 2xl:p-5 shadow-sm">
              <h3 className="mb-4 text-xs md:text-sm 2xl:text-xs font-bold uppercase tracking-wider text-muted">
                Details
              </h3>
              <div className="space-y-3.5 md:space-y-4 text-sm md:text-base 2xl:text-sm md:font-medium">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <CiMail className="h-5 w-5 shrink-0 text-muted" />
                  <a
                    href={`mailto:${email}`}
                    className="hover:text-primary hover:underline"
                  >
                    {email}
                  </a>
                </div>

                {githubUsername && (
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <LuGithub className="h-5 w-5 shrink-0 text-muted" />
                    <a
                      href={`https://github.com/${githubUsername}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary hover:underline"
                    >
                      {githubUsername}
                    </a>
                  </div>
                )}

                {portfolioUrl && (
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <CiLink className="h-5 w-5 shrink-0 text-muted" />
                    <a
                      href={portfolioUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary hover:underline"
                    >
                      {portfolioUrl.replace(/^https?:\/\//, "")}
                    </a>
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xs md:text-sm font-bold uppercase tracking-wider text-muted">
                {skills?.length > 0 ? "Skills" : ""} {tags?.length > 0 ? "& Interests" : ""}
              </h3>

              {skills?.length > 0 && (
                <div className="space-y-2">
                  <h4 className="text-xs font-semibold text-muted">Skills</h4>
                  <div className="flex flex-wrap gap-2 md:gap-3">
                    {skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-lg bg-secondary px-3 py-1.5 text-xs md:text-sm font-medium text-secondary-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {tags?.length > 0 && (
                <div className="space-y-2">
                  <h4 className="text-xs font-semibold text-muted">
                    Interests
                  </h4>
                  <div className="flex flex-wrap gap-2 md:gap-3">
                    {tags.map((interest) => (
                      <span
                        key={interest}
                        className="rounded-lg bg-secondary px-3 py-1.5 text-xs md:text-sm font-medium text-secondary-foreground"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>
        )}
        <div className="h-6" />
      </main>
    </div>
  );
};

export default ProfileScreen;
