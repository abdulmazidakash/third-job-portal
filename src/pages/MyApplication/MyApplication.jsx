import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { Typewriter } from 'react-simple-typewriter';
import Marquee from 'react-fast-marquee';
import { MdDelete } from 'react-icons/md';
import { FaCheckCircle } from 'react-icons/fa';
import axios from 'axios';

const MyApplication = () => {
    const { user } = useAuth();
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        if (user?.email) {
            axios
                .get(`http://localhost:3000/job-application?email=${user.email}`, { withCredentials: true })
                .then((res) => setJobs(res.data))
                .catch((err) => console.error("Error fetching jobs:", err));
        }
    }, [user?.email]);

    return (
        <div className="min-h-screen bg-gradient-to-r from-green-50 via-blue-50 to-purple-50 p-6 rounded-lg">
            <h1 className="text-3xl md:text-4xl font-bold text-center my-6">
                Welcome to{' '}
                <span className="text-teal-600">
                    <Typewriter
                        words={['My Job Application!']}
                        loop={Infinity}
                        cursor
                        cursorStyle="|"
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </span>
            </h1>

            <Marquee speed={50} gradient={false} className="text-teal-700 my-4 text-lg font-medium">
                Find your dream job • Apply with confidence • Explore unlimited opportunities!
            </Marquee>

            <div className="overflow-x-auto border-2 border-gray-300 rounded-lg shadow-lg my-8">
                <table className="table w-full">
                    <thead className="bg-gradient-to-br from-blue-600 to-teal-600 text-white">
                        <tr>
                            <th>#</th>
                            <th>Job Details</th>
                            <th>Company</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {jobs.length === 0 ? (
                            <tr>
                                <td colSpan="4" className="text-center py-4 text-gray-500">
                                    No applications found.
                                </td>
                            </tr>
                        ) : (
                            jobs.map((job, index) => (
                                <tr key={job._id} className="hover:bg-gray-100">
                                    <td className="text-purple-600 font-bold">{index + 1}</td>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img
                                                        src={job.company_logo}
                                                        alt={`${job.company} Logo`}
                                                        className="object-cover"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-semibold">{job.title}</div>
                                                <div className="text-sm text-gray-500">{job.location}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="font-medium">{job.company}</td>
                                    <td>
                                        <div className="flex gap-3">
                                            <button className="btn btn-success btn-xs flex items-center gap-1 hover:bg-green-700">
                                                <FaCheckCircle size={14} /> Approve
                                            </button>
                                            <button className="btn btn-error btn-xs flex items-center gap-1 hover:bg-red-700">
                                                <MdDelete size={14} /> Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyApplication;
