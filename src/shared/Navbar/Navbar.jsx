import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaUserPlus, FaSignInAlt } from 'react-icons/fa';
import AuthContext from '../../context/AuthContext';
import toast from 'react-hot-toast';

const Navbar = () => {

  const {user, signOutUser} = useContext(AuthContext);
  const links = (
    <>
      <li>
        <Link to="/">
          <FaHome className="mr-2" /> Home
        </Link>
      </li>
      <li>
        <Link to="/myApplication">
          <FaInfoCircle className="mr-2" /> My Application
        </Link>
      </li>
      <li>
        <Link to="/addJob">
          <FaInfoCircle className="mr-2" /> Add Job
        </Link>
      </li>
      <li>
        <Link to="/myPostedJobs">
          <FaInfoCircle className="mr-2" /> My Posted Jobs
        </Link>
      </li>
      
    </>
  );

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
    <div className="navbar bg-gradient-to-tr from-sky-800 sticky top-0 z-50 to-slate-800 rounded-b-lg backdrop-blur-0 text-white shadow-lg mb-8 container mx-auto">
      {/* Navbar Start */}
      <div className="navbar-start">
        <div className="dropdown">
          <button
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content font-semibold mt-3 w-52 rounded-box bg-white text-black shadow"
          >
            {links}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-2xl font-bold">
          <span className="text-yellow-300">Job Portal</span>
        </Link>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-semibold">{links}</ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end space-x-3 mr-4">
       {user ? <>
        <Link onClick={handleSignOUt} to="/Login" className="btn btn-sm btn-info btn-white">
          <FaUserPlus className="mr-2" /> Logout
        </Link>
  
        <Link to="/myProfile">
        <img src={user?.photoURL} title={user?.displayName} className='w-10 rounded-full  border-2' referrerPolicy='no-referrer' alt="" />
        </Link>

       </> : 
       <> <Link to="/register" className="btn btn-sm btn-info btn-white">
          <FaUserPlus className="mr-2" /> Register
        </Link>
        <Link to="/login" className="btn btn-sm btn-white bg-yellow-500 hover:bg-yellow-600">
          <FaSignInAlt className="mr-2" /> Login
        </Link></>}
      </div>
    </div>
  );
};

export default Navbar;
