import React from "react";
import { FaLinkedin, FaGithub, FaFileAlt } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import Marquee from "react-fast-marquee";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const JobApply = () => {

	const {id} = useParams();
	const {user} = useAuth();
  const navigate = useNavigate();

	const handleJobApply = e =>{
		e.preventDefault();

		const form = e.target;
		const linkedIn = form.linkedIn.value;
		const github = form.github.value;
		const resume = form.resume.value;

		// console.table({linkedIn, github, resume});
		const jobApplication = {
			job_id: id,
			applicant_email: user?.email,
			linkedIn,
			github,
			resume,
		}

		fetch('http://localhost:3000/job-applications', {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify(jobApplication)
		})
			.then(res => res.json())
			.then(data => {
				// console.log(data);
				if(data.insertedId){
					Swal.fire({
						icon: "success",
						title: "job apply successful",

					  });
				}
			})
      navigate('/myApplication')
	}

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-8 container bg-gradient-to-tr from-rose-300 via-orange-400 to-slate-400 border-2 border-slate-950">
      {/* টাইপরাইটার শিরোনাম */}
      <h1 className="text-3xl font-bold text-rose-600 text-center mb-4">
        <Typewriter
          words={["Apply for Your Dream Job", "Showcase Your Skills"]}
          loop={false}
          cursor
          cursorStyle="|"
          typeSpeed={100}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </h1>

      {/* মারকি */}
      <Marquee speed={60} gradient={false} className="text-rose-500 text-sm mb-6 font-semibold">
        Show your professional skills • Add your LinkedIn, GitHub, and Resume •
        Apply Now • Dream Big, Work Hard!
      </Marquee>

      {/* আবেদন ফর্ম */}
      <form onSubmit={handleJobApply}  className="space-y-4">
        {/* LinkedIn URL */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">LinkedIn URL</span>
          </label>
          <div className="flex items-center gap-3">
            <FaLinkedin size={20} className="text-blue-600" />
            <input
              type="url"
			  name="linkedIn"
              placeholder="https://linkedin.com/in/your-profile"
              className="input input-bordered w-full"
              required
            />
          </div>
        </div>

        {/* GitHub URL */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">GitHub URL</span>
          </label>
          <div className="flex items-center gap-3">
            <FaGithub size={20} className="text-gray-800" />
            <input
              type="url"
			  name="github"
              placeholder="https://github.com/your-profile"
              className="input input-bordered w-full"
              required
            />
          </div>
        </div>

        {/* Resume URL */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Resume URL</span>
          </label>
          <div className="flex items-center gap-3">
            <FaFileAlt size={20} className="text-green-600" />
            <input
              type="url"
			  name="resume"
              placeholder="https://drive.google.com/file/your-resume"
              className="input input-bordered w-full"
              required
            />
          </div>
        </div>

        {/* অ্যাপ্লাই বাটন */}
        <div className="text-center mt-6">
          <button type="submit" className="btn btn-info px-6 py-2">
            Apply Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default JobApply;
