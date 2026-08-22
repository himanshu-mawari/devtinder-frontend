import React, { useState } from "react";
import { CiMail, CiLink } from "react-icons/ci";
import { LuGithub } from "react-icons/lu";
import { Compass, Users, MessageSquare, User } from "lucide-react";
import { mockUser } from "../data/userData";

const ProfileScreen = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const isLong = mockUser?.bio?.length > 100;

  return (
    <div className="relative mx-auto flex h-dvh  flex-col overflow-hidden bg-background text-text">
      <main className="flex-1 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] mb-20 lg:mb-0">
        <header className="mb-6">
          <h2 className="text-2xl md:text-3xl 2xl:text-2xl font-bold text-text">Profile</h2>
          <p className="mt-1 text-sm leading-snug text-muted">
            Manage your personal details — this is what other developers see
            when they discover you..
          </p>
        </header>

        <section className="mb-6 space-y-4">
          <div className="flex items-center gap-4">
            <img
              src={mockUser.profilePicture}
              alt={`${mockUser.firstName} ${mockUser.lastName}`}
              className="h-20 w-20 md:w-24 md:h-24 xl:w-20 xl:h-20 rounded-full object-cover ring-2 ring-border"
            />
            <div>
              <h3 className="text-lg md:text-xl 2xl:text-lg font-bold leading-tight text-text">
                {mockUser.firstName} {mockUser.lastName}
              </h3>
              <p className="text-sm md:text-base text-muted">@{mockUser.username}</p>
              {mockUser.role && (
                <span className="mt-1.5 inline-block rounded-full bg-secondary py-0.5 text-xs md:text-sm 2xl:text-xs font-medium text-secondary-foreground">
                  {mockUser.role}
                </span>
              )}
            </div>
          </div>

          {mockUser.bio && (
            <div>
              <p
                className={`text-sm md:text-base 2xl:text-sm text-muted-foreground ${
                  !isExpanded && isLong ? "line-clamp-2" : ""
                }`}
              >
                {mockUser.bio}
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

          <button
            type="button"
            className="w-full rounded-xl bg-primary px-6 py-2.5 text-sm md:text-base 2xl:text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:opacity-90 active:scale-95 sm:w-auto"
          >
            Edit profile
          </button>
        </section>

        <div className="mb-6 rounded-2xl border border-border bg-card p-5 md:p-6 2xl:p-5 shadow-sm">
          <h3 className="mb-4 text-xs md:text-sm 2xl:text-xs font-bold uppercase tracking-wider text-muted">
            Details
          </h3>
          <div className="space-y-3.5 md:space-y-4 text-sm md:text-base 2xl:text-sm md:font-medium">
            <div className="flex items-center gap-3 text-muted-foreground">
              <CiMail className="h-5 w-5 shrink-0 text-muted" />
              <a
                href={`mailto:${mockUser.email}`}
                className="hover:text-primary hover:underline"
              >
                {mockUser.email}
              </a>
            </div>

            {mockUser.githubUsername && (
              <div className="flex items-center gap-3 text-muted-foreground">
                <LuGithub className="h-5 w-5 shrink-0 text-muted" />
                <a
                  href={`https://github.com/${mockUser.githubUsername}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary hover:underline"
                >
                  {mockUser.githubUsername}
                </a>
              </div>
            )}

            {mockUser.website && (
              <div className="flex items-center gap-3 text-muted-foreground">
                <CiLink className="h-5 w-5 shrink-0 text-muted" />
                <a
                  href={mockUser.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary hover:underline"
                >
                  {mockUser.website.replace(/^https?:\/\//, "")}
                </a>
              </div>
            )}
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xs md:text-sm font-bold uppercase tracking-wider text-muted">
            Skills & Interests
          </h3>

          {mockUser.skills?.length > 0 && (
            <div className="space-y-2">
              <h4 className="text-xs font-semibold text-muted">Skills</h4>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {mockUser.skills.map((skill) => (
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

          {mockUser.interests?.length > 0 && (
            <div className="space-y-2">
              <h4 className="text-xs font-semibold text-muted">
                Interests
              </h4>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {mockUser.interests.map((interest) => (
                  <span
                    key={interest}
                    className="rounded-lg border border-border bg-card px-3 py-1.5 text-xs md:text-sm font-medium text-muted-foreground"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="h-6" />
      </main>

    
    </div>
  );
};

export default ProfileScreen;