import React from "react";
import toast from "react-hot-toast";
import { FaUser, FaLock } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const handleGoogleLogin = () => {
    // গুগল লগইন ফাংশনালিটি এখানে যুক্ত করতে হবে
    toast.success("Google login successful!");
  };

  return (
    <div
      className="p-6 flex items-center justify-center bg-gradient-to-tr from-teal-800 via-slate-800 to-slate-800 rounded-lg backdrop-blur-0"
    >
      <div className="bg-white/10 backdrop-blur-sm p-10 rounded-lg shadow-lg text-white w-96">
        <h2 className="text-3xl font-bold text-center mb-6">Login Form</h2>
        <form>
          <div className="mb-4">
            <label className="block mb-2">Enter your email</label>
            <div className="flex items-center bg-white/20 p-2 rounded">
              <FaUser className="mr-2" />
              <input
                type="email"
                placeholder="Your email"
                className="bg-transparent outline-none w-full text-white"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block mb-2">Enter your password</label>
            <div className="flex items-center bg-white/20 p-2 rounded">
              <FaLock className="mr-2" />
              <input
                type="password"
                placeholder="Your password"
                className="bg-transparent outline-none w-full text-white"
              />
            </div>
          </div>
          <div className="flex items-center justify-between mb-4">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Remember me
            </label>
            <a href="#" className="text-sm text-blue-300">
              Forgot password?
            </a>
          </div>
          <button className="btn btn-success w-full mb-4">Log In</button>
        </form>

        <button
          onClick={handleGoogleLogin}
          className="flex items-center justify-center bg-white text-black rounded p-2 w-full font-semibold hover:bg-gray-200 transition"
        >
          <FcGoogle className="mr-2 text-xl" />
          Sign in with Google
        </button>

        <p className="text-center mt-4">
          Don’t have an account?{" "}
          <a href="#" className="text-blue-300">
            Register
          </a>
        </p>
        <div className="mt-6">
          <marquee className="text-sm">Welcome to our Login Page!</marquee>
        </div>
        <div className="mt-4 text-center">
          <span className="text-xl font-semibold">
            <span className="typewriter">
              Type your credentials to log in.
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
