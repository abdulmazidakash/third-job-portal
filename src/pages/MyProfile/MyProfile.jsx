import React from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const MyProfile = () => {
  // Dynamic background colors
  const {user, signOutUser} = useAuth();
  const colors = ["bg-[#10486A]", "bg-[#17484D]"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  const handleSignOUt = ()=>{
    signOutUser()
      .then(()=>{
        toast.success(`signOUt successful ${user?.displayName}`)
      })
      .catch(()=>{
        toast.error(`not successful signOUt ${user?.displayName}`)
      })
  }


  return (
    <div
      className={`flex flex-col items-center p-6 md:p-12 lg:p-16 ${randomColor} text-white rounded-lg`}
    >
      {/* Profile Picture */}
      <div className="avatar mb-4">
        <div className="w-24 md:w-32 lg:w-40 rounded-full ring ring-offset-2 ring-offset-base-100">
          <img
            src={user?.photoURL || "https://via.placeholder.com/150"}
            alt="Profile"
            className="w-full"
          />
        </div>
      </div>

      {/* Name and Email */}
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 text-center">
        {user?.displayName || "Guest User"}
      </h1>
      <p className="text-sm md:text-lg lg:text-xl mb-4 text-center">
        {user?.email || "No Email Provided"}
      </p>

      {/* Typing Effect */}
      <p className="text-sm md:text-lg lg:text-xl font-medium text-center">
        <Typewriter
          words={["Frontend Developer", "Web Enthusiast", "React Learner"]}
          loop
          cursor
          cursorStyle="|"
          typeSpeed={80}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </p>

      {/* Social Icons */}
      <div className="flex mt-4 gap-4">
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl hover:text-gray-300"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl hover:text-gray-300"
        >
          <FaGithub />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl hover:text-gray-300"
        >
          <FaTwitter />
        </a>
      </div>

      {/* Logout Button */}
      <div className="flex gap-4">
	  <Link
		to='/updateProfile'
        className="btn btn-info mt-6 px-6 py-2 text-sm md:text-base lg:text-lg"
      >
        Edit Profile
      </Link>
      <button
        onClick={handleSignOUt}
        className="btn btn-info mt-6 px-6 py-2 text-sm md:text-base lg:text-lg"
      >
        Logout
      </button>
	  </div>
    </div>
  );
};

export default MyProfile;
