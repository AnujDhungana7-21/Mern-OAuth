import React from "react";
import { Link } from "react-router-dom";

export const Login = () => {
  const submitHandler = (event) => {
    event.preventDefault();
    let email = event.target.email.value;
    let password = event.target.password.value;
    console.log(email, password);
  };
  return (
    <>
      <p className="text-center font-bold text-[30px]">LOGIN</p>
      <form onSubmit={submitHandler} className="w-[50%] mx-auto">
        <div className="">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            className="border border-black w-full"
          />
        </div>
        <div className="">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
            className="border border-black w-full"
          />
        </div>
        <button className="border border-black">SIGNIN</button>
      </form>
    </>
  );
};
