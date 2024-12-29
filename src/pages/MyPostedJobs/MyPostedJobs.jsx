import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { Link, useNavigate } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';
import { FaBriefcase, FaCalendarAlt, FaEye } from 'react-icons/fa';

const MyPostedJobs = () => {
    const [jobs, setJobs] = useState([]);
    const { user } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:3000/jobs?email=${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
                setJobs(data);
                navigate('/myPostedJobs');
            });
    }, [user?.email]);

    return (
        <div className="min-h-screen p-8 bg-gradient-to-r from-green-100 via-blue-100 to-purple-100 rounded-lg">
            {/* Header */}
            <div className="text-center mb-8">
                <h1 className="text-4xl font-bold">
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
                <button className="btn btn-outline btn-success my-4">
                    My posted jobs: {jobs.length}
                </button>
            </div>

            {/* Responsive Table */}
            <div className="overflow-x-auto my-6 border-2 border-gray-200 rounded-lg shadow-lg">
                <table className="table w-full">
                    {/* Table Head */}
                    <thead className="bg-gradient-to-br from-sky-700 to-teal-700 text-white">
                        <tr>
                            <th>#</th>
                            <th>
                                <FaBriefcase className="inline mr-2" /> Job Title
                            </th>
                            <th>
                                <FaCalendarAlt className="inline mr-2" /> Deadline
                            </th>
                            <th>Application Count</th>
                            <th>
                                <FaEye className="inline mr-2" /> View Application
                            </th>
                        </tr>
                    </thead>
                    {/* Table Body */}
                    <tbody>
                        {jobs.map((job, index) => (
                            <tr
                                key={index}
                                className="hover:bg-gradient-to-r from-green-50 to-blue-50"
                            >
                                <td className="font-semibold">{index + 1}</td>
                                <td className="text-gray-700">{job.title}</td>
                                <td className="text-gray-600">{job.applicationDeadline}</td>
                                <td className="text-gray-600">{job.applicationCount}</td>
                                <td>
                                    <Link to={`/viewApplications/${job._id}`}>
                                        <button className="btn btn-link text-teal-600 hover:underline">
                                            View Applications
                                        </button>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyPostedJobs;
