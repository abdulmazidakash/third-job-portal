import axios from 'axios';
import React, { useEffect, useState } from 'react';

const useJobs = (sort, search, minSalary, maxSalary) => {
	const [jobs, setJobs] = useState([]);
	const [loading, setLoading] = useState(true);
	// console.log(jobs);

	useEffect(()=>{

		axios.get(`https://three-job-portal-server.vercel.app/jobs?sort=${sort}&search=${search}&minSalary=${minSalary}&maxSalary=${maxSalary}`)
			.then(res => {
				setLoading(false);
				setJobs(res.data);
			})
	}, [sort, search, minSalary, maxSalary])

	return { jobs, loading } ;
};

export default useJobs;