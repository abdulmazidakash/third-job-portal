import React from "react";
import { BiTime } from "react-icons/bi";
import { MdLocationOn } from "react-icons/md";
import { Link, useLoaderData } from "react-router-dom";

const JobDetails = () => {
  const {
    _id,
    title,
    location,
    category,
    salaryRange,
    description,
    requirements,
    company,
    company_logo,
  } = useLoaderData();

  return (
    <div className="max-w-5xl mx-auto p-5">
      {/* হেডার সেকশন */}
      <div className="w-full h-80 bg-gray-200 rounded-lg overflow-hidden shadow-lg border-1 p-2">
        {/* <img
          src="https://via.placeholder.com/1200x300"
          alt="Office Environment"
          className="w-full h-full object-cover"
        /> */}
		<img
              src='https://png.pngtree.com/thumb_back/fw800/background/20240914/pngtree-abstract-flower-in-color-dark-background-mystical-with-deep-palette-image_16201308.jpg'
              alt="Company Logo"
              className="w-full h-full object-cover rounded-lg"
            />
       
      </div>
		{/* title and button section  */}
		<div className="w-full h-full text-black flex items-center justify-between p-5 mt-4">
          <h1 className=" text-2xl font-bold">
            {title}
          </h1>
          <Link
            to={`/jobApply/${_id}`}
            className="btn bg-[#13405E] text-white px-6 py-2 rounded-md"
          >
            Apply Now
          </Link>
        </div>
      {/* বডি সেকশন */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* বামপাশের কার্ড */}
        <div className="col-span-2 bg-white shadow-lg rounded-lg p-6 border">
          {/* কোম্পানি ইনফো */}
          <div className="flex items-center gap-4 mb-4">
            <img
              src={company_logo}
              alt="Company Logo"
              className="w-16 h-16"
            />
            <div>
              <h2 className="text-xl font-semibold text-gray-800">{company}</h2>
              <div className="flex items-center text-gray-500 text-sm">
                <MdLocationOn size={16} />
                <span className="ml-1">{location}</span>
              </div>
            </div>
          </div>

          {/* চাকরির বিবরণ */}
          <h3 className="text-lg font-bold text-gray-800 mb-2">
            {title}
          </h3>
          <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>

          {/* প্রয়োজনীয় স্কিল */}
          <h3 className="text-lg font-bold text-gray-800 mb-2">Skills Required</h3>
          <div className="flex gap-2 flex-wrap mb-4">
            {requirements?.map((skill, index) => (
              <span
                key={index}
                className="badge badge-outline border border-gray-300 text-gray-700 py-1 px-3 rounded-md"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* বেতন */}
          <div className="text-lg font-semibold text-blue-600">
            Salary: ${salaryRange?.min} - ${salaryRange?.max}
          </div>
        </div>

        {/* ডানপাশের ইনফো */}
        <div className="bg-white shadow-lg rounded-lg p-6 border">
          <h3 className="text-lg font-bold text-gray-800 mb-4">
            Company Information
          </h3>
          <div className="text-sm text-gray-600 space-y-2">
            <p>
              <strong>Industry:</strong> {category}
            </p>
            <p>
              <strong>Location:</strong> {location}
            </p>
            <p>
              <strong>Job Type:</strong> Full-Time
            </p>
            <p>
              <strong>Posted:</strong> 4 minutes ago
            </p>
            <p>
              <strong>Deadline:</strong> 10/08/2022
            </p>
          </div>
          <div className="mt-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4">
              Contact Information
            </h3>
            <p className="text-sm text-gray-600">
              205 N. Michigan Avenue, Suite 810 <br />
              Chicago, IL 60601, USA
            </p>
            <p className="text-sm text-gray-600">Phone: (123) 456-7890</p>
            <p className="text-sm text-gray-600">Email: info@company.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
