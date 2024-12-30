import React from 'react';
import { BiTime } from 'react-icons/bi';
import { BsLightningCharge } from 'react-icons/bs';
import { MdLocationOn } from 'react-icons/md';
import { Link } from 'react-router-dom';

const HotJobCard = ({job}) => {

	const { _id, title, location, category,  salaryRange, description, requirements, company, company_logo} = job;

	const colors = ["#003135", "#3F362F", "#15161A", "#44318D", "#25274D", "#00887A"];
	const color1 = colors[Math.floor(Math.random() * colors.length)];
	const color2 = colors[Math.floor(Math.random() * colors.length)];

	const gradientStyle = {
		background: `linear-gradient(to right, ${color1}, ${color2})`,
	};
//   bg-gradient-to-tr from-teal-800 via-slate-800 to-slate-800
	return (
		<div>
			<div 
			style={gradientStyle}
			className="card   shadow-2xl rounded-lg p-5 border-2 border-rose-300 text-white">
				{/* কার্ডের হেডার */}
				<div className="flex justify-between items-start mb-4">
					<div className="flex items-center gap-3">
					{/* কোম্পানি লোগো */}
					<div className="bg-cyan-200 text-white rounded-lg p-2">
						{/* <BsLightningCharge size={24} /> */}
						<img src={company_logo} className='w-14' alt="" />
					</div>
					{/* কোম্পানির নাম এবং লোকেশন */}
					<div>
						<h2 className="text-lg font-semibol">{company}</h2>
						<div className="flex items-center gap-1 text-sm ">
						<MdLocationOn />
						<span>{location}</span>
						</div>
					</div>
					</div>
					{/* আইকন */}
					<div className="text-green-400">
					<BsLightningCharge size={20} />
					</div>
				</div>

				{/* পজিশন এবং সময় */}
				<h3 className="text-md font-bold  mb-2">
					{title}
				</h3>
				<div className="flex items-center gap-2  text-sm mb-3">
					<BiTime />
					<span>Fulltime</span>
					<span>•</span>
					<span>4 minutes ago</span>
				</div>

				{/* বর্ণনা */}
				<p className="text-sm  mb-4 leading-relaxed">
					{description.slice(0, 50)}...
				</p>

				{/* স্কিলস */}
				<div className="flex gap-2 mb-4 flex-wrap">
				{
						requirements.map((skill, index) => <p
						key={index}
						className=' badge badge-outline'>{skill.slice(0,6)}</p>)
					}
				</div>

				{/* বেতন এবং বাটন */}
				<div className="flex justify-between items-center">
					<div className="text-sm  font-semibold text-blue-500">Salary: ${salaryRange.max} - ${salaryRange.min}</div>
	
					<Link to={`jobs/${_id}`}>
						<button className="btn btn-sm btn-accent">Job Details</button>
					</Link>
				</div>
				</div>
		</div>
	);
};

export default HotJobCard;