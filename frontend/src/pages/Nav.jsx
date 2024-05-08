import React from "react";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <>
      <div className="flex justify-between py-4 px-4 bg-black text-white">
        <Link to="/">Logo</Link>
        <div className="flex justify-center gap-4">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/login">Login</Link>
        </div>
      </div>
    </>
  );
};
