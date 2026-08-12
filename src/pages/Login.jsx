import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Mail, Lock, Eye, EyeOff, AtSign } from "lucide-react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

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
        className="my-auto w-full flex flex-col justify-center items-center mx-auto "
      >
        <hgroup className="text-center mb-6">
          <h1
            id="login-heading"
            className="font-heading tracking-tight text-3xl md:text-4xl font-bold text-text"
          >
            Welcome back
          </h1>
          <p className="text-sm md:text-base md:tracking-tight mt-1 text-muted leading-relaxed">Back to building with developers who get it.
          </p>
        </hgroup>

        <div className="flex flex-col w-full rounded-3xl p-6 md:p-10 bg-card border border-border max-w-lg">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
            <div className="space-y-4 md:space-y-6">
              <div className="space-y-1.5 md:space-y-2.5">
                <label
                  htmlFor="username"
                  className="block text-sm md:text-base font-medium text-muted-foreground"
                >
                  Username
                </label>
                <div className="relative flex items-center">
                  <AtSign className="absolute left-3.5 h-5 w-5  text-muted-foreground opacity-60 pointer-events-none" />
                  <input
                    type="text"
                    id="username"
                    {...register("username", {
                      required: "Username is required",
                    })}
                    placeholder="rahul_dev"
                    className="w-full rounded-xl border border-border bg-background py-3 pl-11 xl:pl-12 pr-4 text-sm  placeholder:text-muted-foreground placeholder:opacity-60 outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20 "
                  />
                </div>
                {errors.username && (
                  <p className="text-[12px] text-red-500">
                    {errors.username.message}
                  </p>
                )}
              </div>

              <div className="space-y-1.5 md:space-y-2.5">
                <label
                  htmlFor="password"
                  className="block text-sm md:text-base font-medium text-muted-foreground"
                >
                  Password
                </label>
                <div className="relative flex items-center ">
                  <Lock className="absolute left-3.5 h-5 w-5 text-muted-foreground opacity-60 pointer-events-none" />
                  <input
                    type={showPassword ? "text" : "password"}
                    {...register("password", {
                      required: "Password is required",
                    })}
                    id="password"

                    placeholder="password"
                    autoComplete="current-password"
                    className="w-full rounded-xl border border-border bg-background py-3 pl-11 xl:pl-12 pr-4 text-sm  placeholder:text-muted-foreground placeholder:opacity-60 outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                  {showPassword ? (
                    <Eye
                      className="absolute right-3.5 h-5 w-5 text-muted-foreground opacity-80  cursor-pointer"
                      onClick={() => setShowPassword(!showPassword)}
                    />
                  ) : (
                    <EyeOff
                      className="absolute right-3.5 h-5 w-5 text-muted-foreground opacity-60 cursor-pointer"
                      onClick={() => setShowPassword(!showPassword)}
                    />
                  )}
                </div>
                {errors.password && (
                  <p className="text-[12px] text-red-500">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <div className="flex justify-center py-3 ">
                <button
                  type="submit"
                  className="w-full h-12  inline-flex items-center justify-center rounded-xl bg-primary px-4 py-3 md:text-base font-semibold text-primary-foreground shadow-sm transition-all hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50"
                >
                  Log in
                </button>
              </div>
            </div>
          </form>
        </div>
        <p className="text-sm md:text-base text-muted-foreground mt-6 md:mt-8">
          Don't have an account{" "}
          <Link
            className="text-primary hover:underline cursor-pointer"
            to="/signup"
          >
            Sign up
          </Link>
        </p>
      </section>
    </>
  );
};

export default Login;
