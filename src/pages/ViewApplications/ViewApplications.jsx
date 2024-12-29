import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import { FaEnvelope, FaEdit } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';

const ViewApplications = () => {
    const applications = useLoaderData();

    const handleStatusUpdate = (e, id) => {
        console.log(e.target.value, id);

        const data = {
            status: e.target.value,
        };

        fetch(`http://localhost:3000/job-applications/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Status has been updated!',
                    });
                }
            });
    };

    return (
        <div className="min-h-screen p-8 bg-gradient-to-r from-green-100 via-blue-100 to-purple-100 rounded-lg">
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-6">
                    <span className="text-teal-500">
                        <Typewriter
                            words={['Manage Your Job Applications']}
                            loop={Infinity}
                            cursor
                            cursorStyle="|"
                            typeSpeed={80}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </span>
                </h1>
                <button className="btn btn-outline btn-success my-6">
                    My Posted Jobs: {applications.length}
                </button>
            </div>
            <div className="overflow-x-auto my-6 border-2 border-gray-200 rounded-lg shadow-lg">
                <table className="table w-full">
                    {/* Table Head */}
                    <thead className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
                        <tr>
                            <th>#</th>
                            <th>
                                <FaEnvelope className="inline mr-2" /> Applicant Email
                            </th>
                            <th>Status</th>
                            <th>
                                <FaEdit className="inline mr-2" /> Update Status
                            </th>
                        </tr>
                    </thead>
                    {/* Table Body */}
                    <tbody>
                        {applications.map((app, index) => (
                            <tr
                                key={index}
                                className="hover:bg-gradient-to-r from-green-50 to-blue-50"
                            >
                                <td className="font-semibold">{index + 1}</td>
                                <td className="text-gray-700">{app.applicant_email}</td>
                                <td className="text-gray-600">{app.status}</td>
                                <td>
                                    <select
                                        onChange={(e) => handleStatusUpdate(e, app._id)}
                                        defaultValue={app.status || 'Change Status'}
                                        className="select select-bordered select-sm w-full max-w-xs"
                                    >
                                        <option disabled>Change Status</option>
                                        <option>Under Review</option>
                                        <option>Set Interview</option>
                                        <option>Hired</option>
                                        <option>Rejected</option>
                                    </select>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ViewApplications;
