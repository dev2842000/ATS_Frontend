import React, { useState } from "react";
import './authPage.css';
import SignInForm from "./signIn";
import SignUpForm from "./signUp";

const LoginPage: React.FC = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [showPassword, setShowPassword] = useState(false);


  if(isSignIn){
    return (
      <SignInForm isSignIn={isSignIn} setIsSignIn={setIsSignIn} showPassword={showPassword} setShowPassword={setShowPassword}/>
    )
  }else{
    return(
      <SignUpForm isSignIn={isSignIn} setIsSignIn={setIsSignIn} showPassword={showPassword} setShowPassword={setShowPassword}/>
    )
  }
};

export default LoginPage;
