import React from "react";
import { FcGoogle } from "react-icons/fc";
export const Signup = () => {
  
  const handelSubmit = (event) => {
    event.preventDefault();
    const { email, fname, Lname, password, Cpassword } = event.target;
  };
  return (
    <>
      <p className="text-center font-bold text-[30px]">SIGNUP</p>
      <form className="w-[50%] mx-auto" onSubmit={handelSubmit}>
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
          <label htmlFor="fname">First-name:</label>
          <input
            type="text"
            name="fname"
            id="fname"
            placeholder="FirstName"
            className="border border-black w-full"
          />
        </div>
        <div className="">
          <label htmlFor="Lname">Last-Name:</label>
          <input
            type="text"
            name="Lname"
            id="Lname"
            placeholder="LastName"
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
        <div className="">
          <label htmlFor="Cpassword">Comform Password:</label>
          <input
            type="password"
            name="Cpassword"
            id="Cpassword"
            placeholder="Comform Password"
            className="border border-black w-full"
          />
        </div>
        <div>
          <input type="checkbox" required /> I accept term and policy
        </div>
        <button className="border border-black mx-auto">SIGNUP</button>
        <br />
        <button className="border border-black">
          {" "}
          <FcGoogle className="inline-block text-[20px]" />
          <span className="p-4">Continue With Google</span>
        </button>
      </form>
    </>
  );
};
