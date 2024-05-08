import React, { useState } from "react";
import { Link } from "react-router-dom";

export const LoginNav = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const handleLogin = () => {
    setIsLogin(true);
    setIsSignup(false);
  };
  const handleSignup = () => {
    setIsSignup(true);
    setIsLogin(false);
  };
  return (
    <>
      <div className="flex justify-center items-center text-center m-[20px]">
        <Link
          to="/login"
          className={`border border-black w-40 ${
            isLogin ? "bg-[#886648] text-white" : "bg-[#dfcebc] text-black"
          }`}
          onClick={handleLogin}
        >
          LOGIN
        </Link>
        <Link
          to="/signup"
          className={`border border-black w-40 ${
            isSignup ? "bg-[#886648] text-white" : "bg-[#dfcebc] text-black"
          }`}
          onClick={handleSignup}
        >
          SIGN-UP
        </Link>
      </div>
    </>
  );
};
