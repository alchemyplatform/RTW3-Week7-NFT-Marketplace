import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
//import { UserAuth } from "../context/AuthContext";

const Signup = () => {
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");
  //   const [error, setError] = useState("");
  //   const { createUser } = UserAuth();
  //   const navigate = useNavigate();

  return (
    <>
      <Navbar></Navbar>
      <div className="max-w-[700px] mx-auto my-16 p-4 items-center">
        <div>
          <h1 className="text-2xl font-bold py-2">
            Sign up for a free account
          </h1>
          <p className="py-2">
            Already have an account yet?{" "}
            <Link to="/signin" className="underline">
              Sign in.
            </Link>
          </p>
        </div>
        <form>
          <div className="flex flex-col py-2">
            <label className="py-2 font-medium">Email Address</label>
            <input className="border p-3" type="email" />
          </div>
          <div className="flex flex-col py-2">
            <label className="py-2 font-medium">Password</label>
            <input className="border p-3" type="password" />
          </div>
          <button className="bg-blue-500 rounded-lg p-5 my-2 font-blod animate-pulse">
            Sign Up
          </button>
          <button className="bg-yellow-500 rounded-lg p-5 my-2 font-blod animate-pulse">
            Sign Up Via Metamask
          </button>
        </form>
      </div>
    </>
  );
};

export default Signup;
