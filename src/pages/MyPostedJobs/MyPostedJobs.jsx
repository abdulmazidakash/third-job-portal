import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { Link, useNavigate } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';

const MyPostedJobs = () => {

	const [jobs, setJobs] = useState([]);
	const {user} = useAuth();
	const navigate = useNavigate();

	useEffect(()=> {
		fetch(`http://localhost:3000/jobs?email=${user?.email}`)
			.then(res => res.json())
			.then(data =>{
				setJobs(data);
				navigate('/myPostedJobs')
			})
	}, [user?.email])
	return (
		<div>
			<div>
			<h1 className="text-4xl font-bold text-center my-8">
								 Welcome to{' '}
								 <span className="text-cyan-500">
									 <Typewriter
										 words={['My Posted Jobs!']}
										 loop={Infinity}
										 cursor
										 cursorStyle="|"
										 typeSpeed={70}
										 deleteSpeed={50}
										 delaySpeed={1000}
									 />
								 </span>
							 </h1>
			<button className='btn btn-outline btn-success'>My posted jobs: {jobs.length}</button>
			<div className="overflow-x-auto my-6 border-2 border-gray-200 rounded-lg">
				<table className="table">
					{/* head */}
					<thead className='bg-gradient-to-br from-sky-700 to-teal-700 text-white'>
					<tr>
						<th></th>
						<th>Job Title</th>
						<th>Deadline</th>
						<th>Application Count</th>
						<th>View Application</th>
					</tr>
					</thead>
					<tbody>
					{/* row 1 */}
					{
						jobs.map((job, index) => 
							<tr key={index}>
						<th>{index + 1}</th>
						<td>{job.title}</td>
						<td>{job.applicationDeadline}</td>
						<td>{job.applicationCount}</td>
						<td>
							<Link to={`/viewApplications/${job._id}`}>
								<button className='btn btn-link'>View Applications</button>
							</Link>
						</td>
					</tr>
						)
					}


					</tbody>
				</table>
				</div>
		</div>
		</div>
	);
};

export default MyPostedJobs;