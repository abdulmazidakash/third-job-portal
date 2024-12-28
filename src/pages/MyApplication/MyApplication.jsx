import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { Typewriter } from "react-simple-typewriter";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import { MdDelete } from "react-icons/md";
const MyApplication = () => {

	const {user} = useAuth();
	const [jobs, setJobs] = useState([]);
	console.log(jobs);

	useEffect(()=> {
		fetch(`http://localhost:3000/job-application?email=${user?.email}`)
			.then(res =>res.json())
			.then(data =>{
				setJobs(data);
			})
	}, [user.email])
	return (
		<div>
			<div className="container mx-auto p-6">
			{/* টাইপরাইটার শিরোনাম */}
			<h1 className="md:text-4xl lg:text-4xl text-2xl font-bold text-center my-8">
				Welcome to{" "}
				<span className="text-cyan-500">
				<Typewriter
					words={["My Job Application!"]}
					loop={Infinity}
					cursor
					cursorStyle="|"
					typeSpeed={70}
					deleteSpeed={50}
					delaySpeed={1000}
				/>
				</span>
			</h1>

			{/* মারকি */}
			<Marquee speed={60} gradient={false} className="text-cyan-600 my-6 text-lg font-semibold">
				Find your dream job • Apply with confidence • Explore unlimited
				opportunities • Let's make it happen!
			</Marquee>

			{/* টেবিল */}
			<div
				// initial={{ opacity: 0, y: 20 }}
				// animate={{ opacity: 1, y: 0 }}
				// transition={{ duration: 0.5 }}
				className="overflow-x-auto border-2 border-gray-300 rounded-lg my-8"
			>
				<table className="table w-full">
				{/* টেবিল হেড */}
				<thead className="bg-gradient-to-br from-sky-700 to-teal-700 text-white">
					<tr>
					<th>
						<label>
						<input type="checkbox" className="checkbox" />
						</label>
					</th>
					<th>Sl</th>
					<th>Name</th>
					<th>Job</th>
				
					<th>Action</th>
					</tr>
				</thead>
				{/* টেবিল বডি */}
				<tbody>
					{jobs.map((job, index) => (
					<tr key={job._id}>
						<th>
						<label>
							<input type="checkbox" className="checkbox" />
						</label>
						</th>
						<td className="text-purple-500 font-semibold">{index + 1}</td>
						<td>
						<div className="flex items-center gap-3">
							<div className="avatar">
							<div className="mask mask-squircle w-12 h-12">
								<img
								src={job.company_logo}
								alt="Company Logo"
								className="object-cover"
								/>
							</div>
							</div>
							<div>
							<div className="font-bold">{job.title}</div>
							<div className="text-sm opacity-50">{job.location}</div>
							</div>
						</div>
						</td>

						<td>
						{job.company}
						</td>

						<th>
						<button
							whileHover={{ scale: 1.1 }}
							className="btn btn-error btn-xs flex items-center gap-1"
						>
							<MdDelete size={16} /> Delete
						</button>
						</th>
					</tr>
					))}
				</tbody>
				</table>
			</div>
		</div>
 

	</div>
	);
};

export default MyApplication;