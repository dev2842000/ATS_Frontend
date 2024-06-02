import React, { useState } from "react";
import "./authPage.css";
import { useForm, SubmitHandler } from "react-hook-form";
import { Register } from "../../ServerApi/api";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Utils/AuthContext.tsx";
interface Props {
  isSignIn: boolean;
  setIsSignIn: React.Dispatch<React.SetStateAction<boolean>>;
  showPassword: boolean;
  setShowPassword: React.Dispatch<React.SetStateAction<boolean>>;
}

interface Inputs {
  lastName: string;
  firstName: string;
  email: string;
  password: string;
  phone: string;
}

const SignUpForm: React.FC<Props> = ({
  isSignIn,
  setIsSignIn,
  showPassword,
  setShowPassword,
}) => {
  const [message, setMessage] = useState<string | null>(null);
  const navigate = useNavigate();
  const { login:authLogin } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    if (Object.keys(errors).length > 0) {
      return;
    }
    
    try {
      const res = await Register(
        data.email,
        data.password,
        data.phone,
        data.firstName,
        data.lastName
      );

      setMessage(res.message);
      if (res?.token && res?.user) {
        authLogin(res.token,res.user);
        navigate("/");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div id="main-container">
      <div className="login-container">
        <div className="login-form">
          <h1 className="text-white text-5xl ">Sign Up</h1>
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
              placeholder="First Name"
              autoComplete="true"
              {...register("firstName", { required: true })}
            />
            {errors.firstName && (
              <span className="text-red-500">Please enter FirstName</span>
            )}

            <input
              placeholder="Last Name"
              autoComplete="lastName"
              {...register("lastName", { required: true })}
            />
            {errors.lastName && (
              <span className="text-red-500">Please enter Lastname</span>
            )}

            <input
              placeholder="Email "
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
                {errors.email?.message || "Please enter Email"}
              </span>
            )}

            <input
              placeholder="Phone Number"
              autoComplete="true"
              {...register("phone", { minLength: 10, maxLength:10, pattern: /^\d{10}$/ })}
            />
            {errors.phone && (
              <span className="text-red-500">Enter 10 digit number</span>
            )}

            <div id="password-div">
              <input
                placeholder="Password"
                type={!showPassword ? "password" : ""}
                autoComplete="true"
                {...register("password", { required: true, minLength: 8})}
              />
              {!showPassword ? (
                <i
                  className="ri-eye-off-line"
                  onClick={() => setShowPassword(true)}
                />
              ) : (
                <i
                  className="ri-eye-line"
                  onClick={() => setShowPassword(false)}
                />
              )}
            </div>
            {errors.password && (
              <span className="text-red-500">Please enter 8 digit</span>
            )}
            
            <input className="cursor-pointer" type="submit" />
          </form>
          {message && <p className="text-red-500">{message}</p>}{" "}
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
