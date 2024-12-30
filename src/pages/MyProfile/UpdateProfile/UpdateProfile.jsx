import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import AuthContext from "../../../context/AuthContext";
import auth from "../../../firebase/firebase.config";
import toast from "react-hot-toast";
import { FaUserEdit, FaImage } from "react-icons/fa";

export default function UpdateProfile() {
  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!auth.currentUser) {
      toast.error("No user is logged in.");
      return;
    }

    const formData = new FormData(e.target);
    const name = formData.get("name");
    const image = formData.get("image");

    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: image,
    })
      .then(() => {
        setUser((prevUser) => ({ ...prevUser, displayName: name, photoURL: image }));
        e.target.reset(); // Reset form after update
        toast.success(`Profile updated successfully: ${name}`);
        navigate("/myProfile");
      })
      .catch((error) => {
        console.error("Error updating profile:", error);
        toast.error("Failed to update profile. Please try again.");
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-tr from-[#184249] via-[#CC2D6E] to-[#2D283E] rounded-lg">
      <div className="card w-full max-w-sm shadow-2xl bg-base-100 rounded-lg bg-opacity-30">
        <form className="card-body" onSubmit={handleSubmit}>
          <h2 className="text-4xl font-bold text-center text-gradient bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent bg-opacity-60">
            Update Profile
          </h2>
          <div className="form-control">
            <label className="label flex items-center gap-2">
              <FaUserEdit className="text-blue-500" />
              <span className="label-text font-semibold">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder={user?.displayName || "User Name"}
              className="input input-bordered border-blue-500"
              required
            />
          </div>
          <div className="form-control">
            <label className="label flex items-center gap-2">
              <FaImage className="text-pink-500" />
              <span className="label-text font-semibold">Image Link</span>
            </label>
            <input
              type="text"
              name="image"
              placeholder={user?.photoURL || "Image URL"}
              className="input input-bordered border-pink-500"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white hover:from-purple-600 hover:to-green-400">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
