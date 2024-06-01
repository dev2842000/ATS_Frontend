import React, { useState } from "react";
import "./authPage.css";
import { useForm, SubmitHandler } from "react-hook-form";
import { Login } from "../../ServerApi/api.tsx";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Utils/AuthContext.tsx";

interface Props {
  isSignIn: boolean;
  setIsSignIn: React.Dispatch<React.SetStateAction<boolean>>;
  showPassword: boolean;
  setShowPassword: React.Dispatch<React.SetStateAction<boolean>>;
}

interface Inputs {
  email: string;
  password: string;
}

const SignInForm: React.FC<Props> = ({
  isSignIn,
  setIsSignIn,
  showPassword,
  setShowPassword,
}) => {
  
  const [message, setMessage] = useState<string | null>(null);
  const navigate = useNavigate();
  const { login } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      if (Object.keys(errors).length > 0) {
        return;
      }

      const res = await Login(data.email, data.password);

      setMessage(res.message);
      if (res?.token) {
        login(res.token);
        navigate("/");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("An error occurred. Please try again."); // Set a generic error message
    }
  };

  return (
    <>
      <div id="main-container">
        <div className="login-container">
          <div className="login-form">
            <h1 className="text-white text-5xl pb-10">Sign In</h1>
            <div id="toggle">
              <button onClick={() => setIsSignIn(true)}>
                <h1
                  className={
                    isSignIn ? "text-green-600 text-2xl" : "text-white text-2xl"
                  }
                >
                  SIGN IN
                </h1>
              </button>
              <button onClick={() => setIsSignIn(false)}>
                <h1
                  className={
                    isSignIn ? "text-white text-2xl" : "text-green-600 text-2xl"
                  }
                >
                  SIGN UP
                </h1>
              </button>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                placeholder="Email or Phone Number"
                autoComplete="true"
                {...register("email", {
                  required: true,
                  pattern: {
                    value:
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: "invalid email address",
                  },
                })}
              />
              {errors.email && (
                <span className="text-red-500">
                  {errors.email.message || "Please enter Email"}
                </span>
              )}
              <div id="password-div">
                <input
                  placeholder="Password"
                  autoCorrect="true"
                  type={!showPassword ? "password" : ""}
                  autoComplete="true"
                  {...register("password", { required: true, minLength: 8 })}
                />
                {showPassword ? (
                  <i
                    className="ri-eye-line"
                    onClick={() => setShowPassword(false)}
                  />
                ) : (
                  <i
                    className="ri-eye-off-line"
                    onClick={() => setShowPassword(true)}
                  />
                )}
              </div>
              {errors.password && (
                <span className="text-red-500">
                  {errors.password.message || "Please enter Password"}
                </span>
              )}

              <input type="submit" />
            </form>
            {message && <p className="text-red-500">{message}</p>}{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default SignInForm;
