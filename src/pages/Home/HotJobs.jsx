import React, { useEffect, useState } from 'react';
import HotJobCard from '../../components/HotJobCard';
import { Typewriter } from 'react-simple-typewriter';

const HotJobs = () => {

	const [jobs, setJobs] = useState([]);

	useEffect(()=>{
		fetch('https://three-job-portal-server.vercel.app/jobs', {withCredentials: true})
			.then(res => res.json())
			.then(data => setJobs(data))
	} , [])
	return (
		<div>
			<h2 className='text-center font-bold text-4xl mt-4 text-cyan-900'>
				<Typewriter
				words={['Jobs of the day']}
				delaySpeed={1000}
				deleteSpeed={70}
				cursor
				cursorStyle={'|'}
				loop={Infinity}
				typeSpeed={80}
				>

				</Typewriter>
			</h2>
			<div className='grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 my-8 gap-2'>
				{
					jobs.map(job => <HotJobCard key={job._id} job={job}></HotJobCard>)
				}
			</div>
		</div>
	);
};

export default HotJobs;