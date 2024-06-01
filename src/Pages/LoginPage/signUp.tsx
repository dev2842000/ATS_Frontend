import React from "react";
import "./authPage.css";
import { useForm, SubmitHandler } from "react-hook-form";
import { Register } from "../../ServerApi/api";

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

const SignUpForm: React.FC<Props> = ({ isSignIn, setIsSignIn, showPassword,setShowPassword }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const response = await Register(data.email, data.password, data.phone, data.firstName, data.lastName);
      console.log("Login Response----->", response);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div id="main-container">
      <div className="login-container">
        <div className="login-form">
          <h1 className="text-white text-5xl pb-16">Sign Up</h1>
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
              placeholder="First Name"
              autoComplete="true"
              {...register("firstName", { required: true })}
            />
            {errors.firstName && (
              <span className="text-red-500">FirstName is required</span>
            )}

            <input
              placeholder="Last Name"
              autoComplete="lastName"
              {...register("lastName", { required: true })}
            />
            {errors.lastName && (
              <span className="text-red-500">LastName is required</span>
            )}
            
            <input
              placeholder="Enter your email"
              autoComplete="true"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-red-500">Email is required</span>
            )}

            <div>
                <input
                    placeholder="Phone Number"
                    autoComplete="true"
                    {...register("phone")}
                />
                {showPassword ? (
                  <i className="text-white cursor-pointer" onClick={() => setShowPassword(false)}>show</i>
                ) : (
                  <i className="text-white cursor-pointer" onClick={() => setShowPassword(true)}>no show</i>
                )}
            </div>
            {errors.password && (
              <span className="text-red-500">Phone Number is required</span>
            )}


            <input
              placeholder="Password"
              type="password"
              autoComplete="true"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span className="text-red-500">Password is required</span>
            )}

            <input type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
