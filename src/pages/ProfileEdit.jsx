import { useState, useEffect } from "react";
import { Check, Camera, X, Search, Plus } from "lucide-react";
import { useGetProfileQuery } from "../services/userApi";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useUpdateProfileMutation } from "../services/userApi";
import { useNavigate } from "react-router-dom";
import { getProfileInitials } from "../utils/helpers";

const ProfileEdit = () => {
  const { data: user, isLoading } = useGetProfileQuery();
  const [skills, setSkills] = useState([]);
  const [skillInput, setSkillInput] = useState();
  const [interests, setInterests] = useState([]);
  const [interestInput, setInterestInput] = useState();
  const [preview, setPreview] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();
  const [updateprofile] = useUpdateProfileMutation();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      reset({
        firstName: user?.firstName,
        bio: user?.bio,
        username: user?.username,
        lastName: user?.lastName,
        githubUsername: user?.githubUsername,
        portfolioUrl: user?.portfolioUrl,
        location: user?.location,
        title: user?.title,
      });

      // eslint-disable-next-line react-hooks/exhaustive-deps
      setSkills(user?.skills);
      setInterests(user?.tags);
    }
  }, [user]);

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();

      formData.append("firstName", data?.firstName);
      formData.append("lastName", data?.lastName);
      formData.append("bio", data?.bio);
      formData.append("location", data?.location);
      formData.append("githubUsername", data?.githubUsername);
      formData.append("portfolioUrl", data?.portfolioUrl);
      formData.append("skills", skills);
      formData.append("tags", interests);
      formData.append("title", data?.title);
      if (data?.profilePicture) {
        formData.append("profilePicture", data?.profilePicture);
      }

      await updateprofile(formData).unwrap();
      navigate("/profile");
    } catch (err) {
      toast.error(err?.data?.message || err?.message || "Profile edit failed");
    }
  };

  if (isLoading || !user) {
    return <p>loading...</p>;
  }

  const addSkill = () => {
    const trimmed = skillInput.trim();
    if (!trimmed) return;

    if (skills.includes(skillInput)) {
      toast.error("Skill aleady added");
    }

    if (skills.length >= 10) {
      toast.error("Max 10 skill allowed");
    }

    setSkills([...skills, trimmed]);
    setSkillInput("");
  };
  const removeSkill = (skill) => {
    setSkills((prev) => prev.filter((p) => p !== skill));
  };
  const addInterest = () => {
    const trimmed = interestInput.trim();
    if (!trimmed) return;

    if (skills.includes(skillInput)) {
      toast.error("Interest aleady added");
    }

    setInterests([...interests, trimmed]);
    setInterestInput("");
  };
  const removeInterest = (interest) => {
    setInterests((prev) => prev.filter((p) => p !== interest));
  };

  const handleProfileImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setPreview(url);
    setValue("profilePicture", file);
  };
  return (
    <div className="relative flex h-dvh flex-col overflow-hidden bg-background text-text">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-1 flex-col overflow-hidden"
      >
        <header className="sticky top-0 z-20 bg-background   backdrop-blur-md">
          <div className="grid grid-cols-3 items-center text-base font-bold text-text md:text-xl xl:text-base">
            <div className="flex justify-start">
              <button
                type="button"
                className="font-medium text-muted transition-colors hover:text-text"
                onClick={() => navigate(-1)}
              >
                Cancel
              </button>
            </div>

            <h2 className="font-heading text-center font-bold">Edit</h2>

            <div className="flex justify-end">
              <button
                type="submit"
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
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-card p-1 shadow-logo-glow transition-transform  md:h-24 md:w-24 xl:h-20 xl:w-20">
                    {preview ? (
                      <img
                        src={preview}
                        className="w-full h-full rounded-full object-cover object-top"
                      />
                    ) : user?.profilePicture ? (
                      <img
                        src={user?.profilePicture}
                        className="w-full h-full rounded-full object-cover object-top"
                      />
                    ) : (
                      <span className="font-heading flex h-full w-full items-center justify-center rounded-full bg-logo text-xl font-bold text-primary-foreground md:text-2xl xl:text-xl">
                        {getProfileInitials(
                          (
                            user?.firstName +
                            " " +
                            user?.lastName
                          ).toUpperCase(),
                        )}
                      </span>
                    )}
                  </div>

                  <label
                    htmlFor="avatar-picture"
                    className="absolute -bottom-1 right-0 flex h-8 w-8 items-center justify-center rounded-full bg-card text-primary shadow-sm ring-2 ring-card transition-transform cursor-pointer"
                  >
                    <Camera className="h-4 w-4" />
                  </label>
                </div>
              </div>
              <input
                type="file"
                className="hidden"
                id="avatar-picture"
                onChange={(e) => handleProfileImage(e)}
              />

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
                      placeholder="Enter first name"
                      {...register("firstName", {
                        required: "First name is required",
                        minLength: {
                          value: 3,
                          message: "First name must be at least 3 characters",
                        },
                        maxLength: {
                          value: 30,
                          message: "First name can't exceed 30 characters",
                        },
                      })}
                      className="w-full rounded-xl border border-border bg-input px-3.5 py-2.5 text-sm text-text placeholder:text-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                    {errors.firstName && (
                      <p className="text-[12px] text-red-500">
                        {errors.firstName.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-muted md:text-sm xl:text-xs">
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter last name"
                      {...register("lastName", {
                        required: "Last name is required",
                        minLength: {
                          value: 3,
                          message: "Last name must be at least 3 characters",
                        },
                        maxLength: {
                          value: 30,
                          message: "Last name can't exceed 30 characters",
                        },
                      })}
                      className="w-full rounded-xl border border-border bg-input px-3.5 py-2.5 text-sm text-text placeholder:text-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                    {errors.lastName && (
                      <p className="text-[12px] text-red-500">
                        {errors.lastName.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-muted md:text-sm xl:text-xs">
                    Username
                  </label>
                  <div className="relative flex flex-col gap-1">
                    <div className="flex items-center ">
                      <span className="absolute left-3.5 text-sm text-muted">
                        @
                      </span>
                      <input
                        type="text"
                        placeholder="Choose a username"
                        {...register("username", {
                          required: "Username is required",
                          minLength: {
                            value: 3,
                            message: "Username must be at least 3 characters",
                          },
                          maxLength: {
                            value: 30,
                            message: "Username can't exceed 30 characters",
                          },
                        })}
                        className="w-full rounded-xl border border-border bg-input py-2.5 pl-8 pr-3.5 text-sm text-text placeholder:text-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring"
                      />
                    </div>
                    {errors.username && (
                      <p className="text-[12px] text-red-500">
                        {errors.username.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-muted md:text-sm xl:text-xs">
                    Title
                  </label>

                  <div className="relative flex flex-col gap-1">
                    <div className="flex items-center">
                      <input
                        type="text"
                        placeholder="e.g. Software developer"
                        {...register("title", {
                          maxLength: {
                            value: 100,
                            message: "Title can't exceed 100 characters",
                          },
                        })}
                        className="w-full rounded-xl border border-border bg-input py-2.5 px-3.5 text-sm text-text placeholder:text-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring"
                      />
                    </div>
                    {errors.title && (
                      <p className="text-[12px] text-red-500">
                        {errors.title.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-muted md:text-sm xl:text-xs">
                    Location
                  </label>
                  <div className="relative flex flex-col gap-1">
                    <div className="flex items-center">
                      <input
                        type="text"
                        placeholder="e.g. New Delhi, india"
                        {...register("location", {
                          maxLength: {
                            value: 100,
                            message: "Location can't exceed 100 characters",
                          },
                          pattern: {
                            value: /^[a-zA-Z\s,.-]+$/,
                            message: "Enter a valid location",
                          },
                        })}
                        className="w-full rounded-xl border border-border bg-input py-2.5 px-3.5 text-sm text-text placeholder:text-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring"
                      />
                    </div>
                    {errors.location && (
                      <p className="text-[12px] text-red-500">
                        {errors.location.message}
                      </p>
                    )}
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
                    {...register("bio", {
                      maxLength: {
                        value: 240,
                        message: "Bio can't exceed 240 characters",
                      },
                    })}
                    className="w-full resize-none rounded-xl border border-border bg-input p-3.5 text-sm text-text placeholder:text-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                  {errors.bio && (
                    <p className="text-[12px] text-red-500">
                      {errors.bio.message}
                    </p>
                  )}
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
                    GitHub Username
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. himanshu-mawari"
                    {...register("githubUsername", {
                      maxLength: {
                        value: 39,
                        message: "GitHub username can't exceed 39 characters",
                      },
                      pattern: {
                        value:
                          /^[a-zA-Z\d](?:[a-zA-Z\d]|-(?=[a-zA-Z\d])){0,38}$/,
                        message: "Enter a valid GitHub username",
                      },
                    })}
                    className="w-full rounded-xl border border-border bg-input px-3.5 py-2.5 text-sm text-text placeholder:text-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                  {errors.githubUsername && (
                    <p className="text-[12px] text-red-500">
                      {errors.githubUsername.message}
                    </p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-muted md:text-sm xl:text-xs">
                    Website
                  </label>
                  <input
                    type="url"
                    placeholder="https://yourwebsite.com"
                    {...register("portfolioUrl", {
                      pattern: {
                        value: /^https?:\/\/[^\s$.?#].[^\s]*$/,
                        message:
                          "Enter a valid URL (must start with http:// or https://)",
                      },
                    })}
                    className="w-full rounded-xl border border-border bg-input px-3.5 py-2.5 text-sm text-text placeholder:text-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                  {errors.portfolioUrl && (
                    <p className="text-[12px] text-red-500">
                      {errors.portfolioUrl.message}
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="w-full rounded-2xl border border-border bg-card p-4 shadow-sm md:p-5">
              <h3 className="font-heading mb-4 text-sm font-bold text-text md:text-base xl:text-sm">
                Skills & interests
              </h3>

              <div className="space-y-4 md:space-y-5">
                <div className="space-y-3 md:space-y-3.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-muted md:text-sm xl:text-xs">
                    Skills
                  </label>

                  <div className="flex flex-wrap gap-2">
                    {skills !== "" &&
                      skills.map((skill) => (
                        <span
                          key={skill}
                          className="inline-flex justify-center gap-0.5 rounded-xl bg-pill  px-2 py-1.5 text-xs font-semibold text-primary md:text-sm"
                        >
                          {skill}
                          <button type="button" className="rounded-full p-0.5">
                            <X
                              className="h-3 w-3"
                              onClick={() => removeSkill(skill)}
                            />
                          </button>
                        </span>
                      ))}
                  </div>

                  <div className="relative flex items-center">
                    <Search className="absolute left-3.5 h-4 w-4 text-muted" />
                    <input
                      type="text"
                      placeholder="Add a skill (e.g. Tailwind, Node.js)"
                      onChange={(e) => setSkillInput(e.target.value)}
                      value={skillInput}
                      className="w-full rounded-xl border border-border bg-input py-2.5 pl-9 pr-10 text-sm text-text placeholder:text-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                    <button
                      type="button"
                      className="absolute right-2 flex h-7 w-7 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-sm transition-transform active:scale-95"
                    >
                      <Plus className="h-4 w-4" onClick={addSkill} />
                    </button>
                  </div>
                </div>

                <div className="space-y-2 pt-1 md:space-y-2.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-muted md:text-sm xl:text-xs">
                    Interests
                  </label>

                  <div className="flex flex-wrap gap-2">
                    {interests !== "" &&
                      interests.map((interest) => (
                        <span
                          key={interest}
                          className="inline-flex items-center gap-0.5 rounded-xl bg-pill  px-2 py-1.5 text-xs font-semibold text-primary md:text-sm"
                        >
                          {interest}
                          <button
                            type="button"
                            className="rounded-full p-0.5 hover:opacity-20"
                          >
                            <X
                              className="h-3 w-3"
                              onClick={() => removeInterest(interest)}
                            />
                          </button>
                        </span>
                      ))}
                  </div>

                  <div className="relative flex items-center">
                    <Search className="absolute left-3.5 h-4 w-4 text-muted" />
                    <input
                      type="text"
                      placeholder="Add an interest (e.g. Open Source, AI)"
                      value={interestInput}
                      onChange={(e) => setInterestInput(e.target.value)}
                      className="w-full rounded-xl border border-border bg-input py-2.5 pl-9 pr-10 text-sm text-text placeholder:text-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                    <button
                      type="button"
                      className="absolute right-2 flex h-7 w-7 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-sm transition-transform active:scale-95"
                      onClick={addInterest}
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </form>
    </div>
  );
};

export default ProfileEdit;
