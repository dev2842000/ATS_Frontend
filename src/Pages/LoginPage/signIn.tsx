import React from "react";
import "./authPage.css";
import { useForm, SubmitHandler } from "react-hook-form";
import { Login } from "../../Api/api";

interface Props {
  isSignIn: boolean;
  setIsSignIn: void;
  showPassword:boolean;
  setShowPassword:void;
}

interface Inputs {
  email: string;
  password: string;
}

const SignInForm: React.FC<Props> = ({ isSignIn, setIsSignIn, showPassword,setShowPassword }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const response = await Login(data.email, data.password);
      console.log("Login Response----->", response);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div id="main-container">
        <div className="login-container">
          <div className="login-form">
            <h1 className="text-white text-5xl pb-16">Sign In</h1>
            <div id="toggle">
              <button onClick={() => setIsSignIn(true)}>
                <h1 className={isSignIn ? "text-green-600 text-2xl" : "text-white text-2xl"}>
                  SIGN IN
                </h1>
              </button>
              <button onClick={() => setIsSignIn(false)}>
                <h1 className={isSignIn ? "text-white text-2xl" : "text-green-600 text-2xl"}>
                  SIGN UP
                </h1>
              </button>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                placeholder="Email or Phone Number"
                autoComplete="true"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-red-500">This field is required</span>
              )}

              <input
                placeholder="Password"
                type="password"
                autoComplete="true"
                {...register("password", { required: true })}
              />
              {showPassword ?
                <i className="text-white cursor-pointer" onClick={() => setShowPassword(false)}>show</i>:
                <i className="text-white cursor-pointer" onClick={() => setShowPassword(true)}>no show</i>
              }
              {errors.password && (
                <span className="text-red-500">This field is required</span>
              )}

              <input type="submit" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignInForm;
