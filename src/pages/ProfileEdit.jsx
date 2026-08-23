import React from "react";
import { Check, Camera, X, Search, Plus } from "lucide-react";
const ProfileEdit = () => {
  return (
    <div className="relative flex h-dvh flex-col overflow-hidden bg-background text-text">
      <header className="sticky top-0 z-20 border-b border-border/40 bg-background/80  backdrop-blur-md">
        <div className="grid grid-cols-3 items-center text-base font-bold text-text md:text-xl xl:text-base">
          <div className="flex justify-start">
            <button
              type="button"
              className="font-medium text-muted transition-colors hover:text-text"
            >
              Cancel
            </button>
          </div>

          <h2 className="font-heading text-center font-bold">Edit</h2>

          <div className="flex justify-end">
            <button
              type="button"
              className="flex items-center justify-center gap-1 rounded-xl bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground shadow-sm transition-all hover:opacity-90 active:scale-95 md:text-base xl:text-sm"
            >
              <Check size={18} /> Save
            </button>
          </div>
        </div>
      </header>

      <main className="mb-24 flex-1 overflow-y-auto  [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:mb-0">
        <section className="my-5 space-y-4">
          <div>
            <div className="flex w-full justify-center">
              <div className="relative w-fit">
                <button
                  type="button"
                  className="flex h-20 w-20 items-center justify-center rounded-full bg-card p-1 shadow-logo-glow transition-transform active:scale-95 md:h-24 md:w-24 xl:h-20 xl:w-20"
                >
                  <span className="font-heading flex h-full w-full items-center justify-center rounded-full bg-logo text-xl font-bold text-primary-foreground md:text-2xl xl:text-xl">
                    HM
                  </span>
                </button>

                <button
                  type="button"
                  className="absolute -bottom-1 right-0 flex h-8 w-8 items-center justify-center rounded-full bg-card text-primary shadow-sm ring-2 ring-card transition-transform active:scale-90"
                >
                  <Camera className="h-4 w-4" />
                </button>
              </div>
            </div>
            <p className="mt-2 text-center text-xs font-medium text-muted md:text-sm">
              Tap to update your photo
            </p>
          </div>

          <div className="w-full rounded-2xl border border-border bg-card p-4 shadow-sm md:p-5">
            <h3 className="font-heading mb-3 text-sm font-bold text-text md:text-base xl:text-sm">
              Personal information
            </h3>

            <div className="space-y-3.5 md:space-y-4">
              <div className="grid grid-cols-2 gap-3 xl:gap-5">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-muted md:text-sm xl:text-xs">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="Himanshu"
                    className="w-full rounded-xl border border-border bg-input px-3.5 py-2.5 text-sm text-text placeholder:text-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-muted md:text-sm xl:text-xs">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Mawari"
                    className="w-full rounded-xl border border-border bg-input px-3.5 py-2.5 text-sm text-text placeholder:text-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-muted md:text-sm xl:text-xs">
                  Username
                </label>
                <div className="relative flex items-center">
                  <span className="absolute left-3.5 text-sm text-muted">
                    @
                  </span>
                  <input
                    type="text"
                    placeholder="himanshu"
                    className="w-full rounded-xl border border-border bg-input py-2.5 pl-8 pr-3.5 text-sm text-text placeholder:text-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold uppercase tracking-wider text-muted md:text-sm xl:text-xs">
                    Bio
                  </label>
                  <span className="text-[11px] text-muted">70/240</span>
                </div>
                <textarea
                  rows={3}
                  placeholder="Tell other developers about yourself..."
                  className="w-full resize-none rounded-xl border border-border bg-input p-3.5 text-sm text-text placeholder:text-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
            </div>
          </div>

          <div className="w-full rounded-2xl border border-border bg-card p-4 shadow-sm md:p-5">
            <h3 className="font-heading mb-3 text-sm font-bold text-text md:text-base xl:text-sm">
              Contact & links
            </h3>

            <div className="space-y-3.5 md:space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-muted md:text-sm xl:text-xs">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="himanshu@example.com"
                  className="w-full rounded-xl border border-border bg-input px-3.5 py-2.5 text-sm text-text placeholder:text-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-muted md:text-sm xl:text-xs">
                  GitHub Username
                </label>
                <input
                  type="text"
                  placeholder="himanshu-mawari"
                  className="w-full rounded-xl border border-border bg-input px-3.5 py-2.5 text-sm text-text placeholder:text-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-muted md:text-sm xl:text-xs">
                  Website
                </label>
                <input
                  type="url"
                  placeholder="https://himanshu.dev"
                  className="w-full rounded-xl border border-border bg-input px-3.5 py-2.5 text-sm text-text placeholder:text-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
            </div>
          </div>

          <div className="w-full rounded-2xl border border-border bg-card p-4 shadow-sm md:p-5">
            <h3 className="font-heading mb-4 text-sm font-bold text-text md:text-base xl:text-sm">
              Skills & interests
            </h3>

            <div className="space-y-4 md:space-y-5">
              <div className="space-y-2 md:space-y-2.5">
                <label className="text-xs font-bold uppercase tracking-wider text-muted md:text-sm xl:text-xs">
                  Skills
                </label>

                <div className="flex flex-wrap gap-2">
                  {["TypeScript", "React", "Design Systems"].map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1.5 rounded-xl bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary md:text-sm"
                    >
                      {skill}
                      <button
                        type="button"
                        className="rounded-full p-0.5 hover:bg-primary/20"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </span>
                  ))}
                </div>

                <div className="relative flex items-center">
                  <Search className="absolute left-3.5 h-4 w-4 text-muted" />
                  <input
                    type="text"
                    placeholder="Add a skill (e.g. Tailwind, Node.js)"
                    className="w-full rounded-xl border border-border bg-input py-2.5 pl-9 pr-10 text-sm text-text placeholder:text-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                  <button
                    type="button"
                    className="absolute right-2 flex h-7 w-7 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-sm transition-transform active:scale-95"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="space-y-2 pt-1 md:space-y-2.5">
                <label className="text-xs font-bold uppercase tracking-wider text-muted md:text-sm xl:text-xs">
                  Interests
                </label>

                <div className="flex flex-wrap gap-2">
                  {["UI Design", "Open Source", "Accessibility"].map(
                    (interest) => (
                      <span
                        key={interest}
                        className="inline-flex items-center gap-1.5 rounded-xl bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary md:text-sm"
                      >
                        {interest}
                        <button
                          type="button"
                          className="rounded-full p-0.5 hover:bg-primary/20"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </span>
                    ),
                  )}
                </div>

                <div className="relative flex items-center">
                  <Search className="absolute left-3.5 h-4 w-4 text-muted" />
                  <input
                    type="text"
                    placeholder="Add an interest (e.g. Open Source, AI)"
                    className="w-full rounded-xl border border-border bg-input py-2.5 pl-9 pr-10 text-sm text-text placeholder:text-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                  <button
                    type="button"
                    className="absolute right-2 flex h-7 w-7 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-sm transition-transform active:scale-95"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProfileEdit;
