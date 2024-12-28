import React, { useContext } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";

import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import SocialLogin from "../SocialLogin";

const Register = () => {

  const {createUser} = useContext(AuthContext);

  const handleRegister = e => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;

    console.table({ name, email, password, photo });

    // পাসওয়ার্ড ভ্যালিডেশন
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;

    if (!passwordRegex.test(password)) {
      toast.error(
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and be at least 6 characters long."
      );
      return;
    }
    toast.success("Registration successful!");

    createUser(email, password)
      .then(result =>{
        console.log(result?.user);
      })
      .catch(err =>console.log(err.message))
      

  };

  return (
    <div className="flex items-center justify-center bg-gradient-to-t from-teal-800 via-cyan-800 to-slate-800 rounded-lg  p-6 container mx-auto">
      <div className="bg-white/10 backdrop-blur-sm p-10 rounded-lg shadow-lg text-white w-96">
        <h2 className="text-3xl font-bold text-center mb-6">Register</h2>
        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label className="block mb-2">Enter your name</label>
            <div className="flex items-center bg-white/20 p-2 rounded">
              <FaUser className="mr-2" />
              <input
                type="text"
                placeholder="Your name"
                name="name"
                className="bg-transparent outline-none w-full text-white"
              />
            </div>
            </div>
          <div className="mb-4">
            <label className="block mb-2">Enter your photoURL</label>
            <div className="flex items-center bg-white/20 p-2 rounded">
              <FaUser className="mr-2" />
              <input
                type="text"
                placeholder="Your photoURL"
                name="photo"
                className="bg-transparent outline-none w-full text-white"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block mb-2">Enter your email</label>
            <div className="flex items-center bg-white/20 p-2 rounded">
              <FaEnvelope className="mr-2" />
              <input
                type="email"
                name="email"
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
                name="password"
                placeholder="Your password"
                className="bg-transparent outline-none w-full text-white"
              />
            </div>
          </div>
          <button className="btn btn-success w-full mb-4">Register</button>
        </form>

        {/* social login component  */}
          <SocialLogin></SocialLogin>
          
        <p className="text-center mt-4">
          Already have an account?{" "}
          <Link to='/login'>
		  <a className="text-blue-300">
            Log In
          </a>
		  </Link>
        </p>
        <div className="mt-6">
          <marquee className="text-sm">
            Welcome to our Registration Page! Let's get started.
          </marquee>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Register;
