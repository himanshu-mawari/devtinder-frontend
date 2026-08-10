import React from "react";
import { developer } from "../data/developer";
import { Globe, Check, X } from "lucide-react";
import { FaGithub } from "react-icons/fa";

// TODO : Make card responsive for tablet check on  1280 × 800

const getProfileInitials = (name) => {
  return name
    .split(/\s+/)
    .map((alph) => alph[0])
    .join("");
};

const Discover = () => {
  return (
  <div className="w-full">
    <div className="flex flex-col">
      
      {/* Header section (768px+ typography locked) */}
      <header>
        <h1 className="font-heading text-2xl md:text-3xl font-semibold md:font-bold tracking-tight">
          Discover
        </h1>
        <p className="text-sm md:text-base tracking-tight text-muted mt-1.5">
          Find developers who match your interests, tech stack, and what
          you're building.
        </p>
      </header>

      {/* Main Profile Article */}
      <article className="w-full border border-border bg-card p-5 sm:p-6 md:p-8 rounded-3xl mt-5 md:mt-8 xl:mt-10   xl:px-10 xl:py-7">
        <div className="flex gap-4 md:gap-6 items-start">
          {/* Tablet & Desktop Avatar */}
          <span className="hidden bg-logo w-20 h-20 rounded-full justify-center items-center font-heading font-semibold tracking-tight text-primary-foreground text-xl sm:flex shrink-0">
            {getProfileInitials(developer.name)}
          </span>

          {/* Mobile Avatar */}
          <span className="bg-logo w-16 h-16 rounded-full flex justify-center items-center font-heading font-semibold tracking-tight text-primary-foreground text-lg sm:hidden shrink-0">
            {getProfileInitials(developer.name)}
          </span>

          {/* Identity details */}
          <div className="flex-1 min-w-0 mb-3 md:mb-4">
            <h2 className="text-lg md:text-2xl text-text font-bold text-gray-900">
              {developer.name}
            </h2>

            <p className="text-sm md:text-base font-medium text-muted-foreground">
              {developer.role}
            </p>

            <p className="text-sm md:text-base text-muted-foreground mt-0.5 flex items-center">
              {developer.location}
            </p>
          </div>
        </div>

        {/* Bio Text */}
        <p className="text-[15px] md:text-base leading-relaxed text-muted-foreground line-clamp-3 [@media(max-height:740px)]:line-clamp-2">
          {developer.bio}
        </p>

        <div className="mt-6 space-y-4 md:space-y-5 2xl:space-y-4">
          {/* STACK */}
          <div>
            <h3 className="text-[11px] md:text-xs uppercase font-semibold tracking-wide text-muted-foreground mb-2">
              Stack
            </h3>
            <div className="flex flex-wrap gap-2 md:gap-3">
              {developer.techStack.slice(0, 3).map((tech) => (
                <div
                  key={tech}
                  className="inline-flex items-center border px-2.5 py-0.5 md:px-3.5 md:py-1 text-xs md:text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground rounded-full font-normal"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>

          {/* LOOKING FOR */}
          <div className="pt-1 [@media(max-height:700px)]:hidden">
            <h3 className="text-[11px] md:text-xs uppercase font-semibold tracking-wide text-muted-foreground mb-2">
              Looking for
            </h3>
            <div className="flex items-center gap-2 md:gap-3 flex-wrap">
              {developer.tagLines.map((line) => (
                <div
                  key={line}
                  className="inline-flex items-center justify-center text-xs md:text-sm text-foreground rounded-full border border-transparent bg-secondary px-3 py-1 md:px-4 md:py-1.5 gap-2 [@media(max-height:740px)]:[&:nth-child(n+2)]:hidden"
                >
                  {line}
                </div>
              ))}
            </div>
          </div>

          {/* LINKS */}
          <div>
            <h3 className="text-[11px] md:text-xs uppercase font-semibold tracking-wide text-muted-foreground mb-2">
              Links
            </h3>
            <div className="flex items-center ml-1 gap-6 text-sm md:text-base text-text font-medium">
              <a
                href="https://github.com/arjunmehta"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 transition-colors hover:underline"
              >
                <FaGithub className="w-4 h-4 md:w-5 md:h-5 shrink-0" />
                <span>@arjunmehta</span>
              </a>

              <a
                href="https://arjun.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 transition-colors hover:underline"
              >
                <Globe className="w-4 h-4 md:w-5 md:h-5 shrink-0" />
                <span>arjun.dev</span>
              </a>
            </div>
          </div>

          {/* ACTION BUTTONS */}
          <div className="flex items-center justify-center md:justify-around gap-4 pt-4 md:pt-6 ">
            <button
              type="button"
              className="flex flex-1 md:flex-initial md:w-64 items-center justify-center gap-2 rounded-xl bg-background px-4 py-2.5 md:py-3 text-sm md:text-base font-semibold text-foreground transition-transform duration-100 ease-out cursor-pointer select-none active:scale-95 border border-input hover:bg-accent hover:text-accent-foreground xl:max-w-52"
            >
              <X className="w-4 h-4 md:w-5 md:h-5" />
              <span>Pass</span>
            </button>

            <button
              type="button"
              className="flex flex-1 md:flex-initial md:w-64 items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 md:py-3 text-sm md:text-base font-semibold text-primary-foreground hover:opacity-90 transition-transform duration-100 ease-out cursor-pointer select-none active:scale-95 shadow-sm  xl:max-w-52"
            >
              <Check className="w-4 h-4 md:w-5 md:h-5" />
              <span>Connect</span>
            </button>
          </div>
        </div>
      </article>
    </div>
  </div>
);
};

export default Discover;
