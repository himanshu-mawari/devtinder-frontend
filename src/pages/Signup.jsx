import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff, AtSign } from "lucide-react";
import { useSignupMutation } from "../services/authApi";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const [signup, { error, isError }] = useSignupMutation();

  const onSubmit = async (data) => {
    try {
      await signup(data).unwrap();
      navigate("/discover");
    } catch {
      // intentionally empty — isError/error state already renders the inline message
    }
  };

  return (
    <>
      <header>
        <div className=" absolute  flex font-heading font-black text-2xl md:text-3xl ">
          <span>Dev</span>
          <span className="bg-logo bg-clip-text text-transparent">Tinder</span>
        </div>
      </header>

      <section
        aria-labelledby="login-heading"
        className="my-auto w-full flex flex-col justify-center items-center mx-auto py-2 md:py-4"
      >
        <hgroup className="text-center mb-3 md:mb-4">
          <h1
            id="login-heading"
            className="font-heading tracking-tight text-2xl md:text-3xl font-bold text-text"
          >
            Create your profile
          </h1>
          <p className="text-xs md:text-sm md:tracking-tight mt-0.5 text-muted leading-relaxed">
            Find developers who think like you. Chat, collaborate, build
          </p>
        </hgroup>

        <div className="flex flex-col w-full rounded-2xl md:rounded-3xl p-5 md:p-6 bg-card border border-border max-w-md md:max-w-lg shadow-sm">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-3"
          >
            <div className="space-y-3 md:space-y-3.5">
              <div className="space-y-1">
                <label
                  htmlFor="username"
                  className="block text-xs md:text-sm font-medium text-muted-foreground"
                >
                  Username
                </label>
                <div className="relative flex items-center">
                  <AtSign className="absolute left-3.5 h-4 w-4 md:h-5 md:w-5 text-muted-foreground opacity-60 pointer-events-none" />
                  <input
                    type="text"
                    id="username"
                    {...register("username", {
                      required: "Username is required",
                    })}
                    placeholder="rahul_dev"
                    className="w-full rounded-xl border border-border bg-background py-2 md:py-2.5 pl-10 md:pl-11 pr-4 text-xs md:text-sm placeholder:text-muted-foreground placeholder:opacity-60 outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                {errors.username && (
                  <p className="text-[11px] text-red-500 mt-0.5">
                    {errors.username.message}
                  </p>
                )}
              </div>

              <div className="flex gap-3">
                <div className="space-y-1 flex-1">
                  <label
                    htmlFor="firstName"
                    className="block text-xs md:text-sm font-medium text-muted-foreground"
                  >
                    First name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    {...register("firstName", {
                      required: "First name is required",
                    })}
                    placeholder="rahul"
                    className="w-full rounded-xl border border-border bg-background py-2 md:py-2.5 px-3.5 text-xs md:text-sm placeholder:text-muted-foreground placeholder:opacity-60 outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                  {errors.firstName && (
                    <p className="text-[11px] text-red-500 mt-0.5">
                      {errors.firstName.message}
                    </p>
                  )}
                </div>
                <div className="space-y-1 flex-1">
                  <label
                    htmlFor="lastName"
                    className="block text-xs md:text-sm font-medium text-muted-foreground"
                  >
                    Last name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    {...register("lastName", {
                      required: "Last name is required",
                    })}
                    placeholder="sharma"
                    className="w-full rounded-xl border border-border bg-background py-2 md:py-2.5 px-3.5 text-xs md:text-sm placeholder:text-muted-foreground placeholder:opacity-60 outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                  {errors.lastName && (
                    <p className="text-[11px] text-red-500 mt-0.5">
                      {errors.lastName.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="space-y-1">
                <label
                  htmlFor="email"
                  className="block text-xs md:text-sm font-medium text-muted-foreground"
                >
                  Email
                </label>
                <div className="relative flex items-center">
                  <Mail className="absolute left-3.5 h-4 w-4 md:h-5 md:w-5 text-muted-foreground opacity-60 pointer-events-none" />
                  <input
                    type="email"
                    {...register("email", {
                      required: "Email is required",
                    })}
                    id="email"
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-border bg-background py-2 md:py-2.5 pl-10 md:pl-11 pr-4 text-xs md:text-sm placeholder:text-muted-foreground placeholder:opacity-60 outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                {errors.email && (
                  <p className="text-[11px] text-red-500 mt-0.5">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div className="space-y-1">
                <label
                  htmlFor="password"
                  className="block text-xs md:text-sm font-medium text-muted-foreground"
                >
                  Password
                </label>
                <div className="relative flex items-center">
                  <Lock className="absolute left-3.5 h-4 w-4 md:h-5 md:w-5 text-muted-foreground opacity-60 pointer-events-none" />
                  <input
                    type={showPassword ? "text" : "password"}
                    {...register("password", {
                      required: "Password is required",
                    })}
                    id="password"
                    placeholder="password"
                    autoComplete="new-password"
                    className="w-full rounded-xl border border-border bg-background py-2 md:py-2.5 pl-10 md:pl-11 pr-10 text-xs md:text-sm placeholder:text-muted-foreground placeholder:opacity-60 outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                  {showPassword ? (
                    <Eye
                      className="absolute right-3.5 h-4 w-4 md:h-5 md:w-5 text-muted-foreground opacity-80 cursor-pointer"
                      onClick={() => setShowPassword(!showPassword)}
                    />
                  ) : (
                    <EyeOff
                      className="absolute right-3.5 h-4 w-4 md:h-5 md:w-5 text-muted-foreground opacity-60 cursor-pointer"
                      onClick={() => setShowPassword(!showPassword)}
                    />
                  )}
                </div>
                {errors.password && (
                  <p className="text-[11px] text-red-500 mt-0.5">
                    {errors.password.message}
                  </p>
                )}
              </div>
              {isError && (
                <p className="text-xs text-red-500">{error?.data?.message}</p>
              )}

              <div className="flex justify-center pt-2">
                <button
                  type="submit"
                  className="w-full h-10 md:h-11 inline-flex items-center justify-center rounded-xl bg-primary px-4 text-xs md:text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50"
                >
                  Create account
                </button>
              </div>
            </div>
          </form>
        </div>

        <p className="text-sm md:text-base text-muted-foreground mt-3 md:mt-4">
          Already have an account{" "}
          <Link
            className="text-primary hover:underline cursor-pointer"
            to="/login"
          >
            Log in
          </Link>
        </p>
      </section>
    </>
  );
};

export default Signup;
