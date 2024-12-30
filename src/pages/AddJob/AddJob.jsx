import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { FaBuilding, FaEnvelope, FaMoneyBill, FaRegFileAlt } from 'react-icons/fa';
import { object } from 'framer-motion/client';

const AddJob = () => {
    const { user } = useAuth();
	const navigate = useNavigate();

	const handleAddJob = e =>{
		e.preventDefault();

		// const formData = new FormData(e.target);
		// console.log(formData);
		// const initialData = Object.fromEntries(formData.entries());
		// console.log(initialData);
		// const {min, max, currency, ...newJob} = initialData;
		// console.log(newJob);
		// newJob.salaryRange = {min, max, currency};
		// console.log(newJob);
		// newJob.requirements = newJob.requirements.split('\n');
		// console.log(newJob);
		// newJob.responsibility = newJob.responsibility.split('\n');
		// console.log(newJob);

		const formData = new FormData(e.target);
		// console.log(formData.entries());
		const initialData = Object.fromEntries(formData.entries());
		// console.log(initialData);
		const {min, max, currency, ...newJob} = initialData;
		newJob.salaryRange = {min: parseInt(min) , max: parseInt(max) , currency};
		newJob.requirements = newJob.requirements.split('\n');
		newJob.responsibility = newJob.responsibility.split('\n');
		console.log(newJob);

		fetch('http://localhost:3000/jobs', {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify(newJob)
		})
			.then(res => res.json())
			.then(data =>{
				console.log(data);
					if(data.insertedId){
						Swal.fire({
							icon: "success",
							title: "job added successful",

							});
					}
					navigate('/')
			})
	}


    return (
        <div className="p-6 bg-gradient-to-r from-green-100 to-blue-100 min-h-screen rounded-lg">
            <h1 className="md:text-2xl sm:text-2xl text-4xl font-bold text-center my-8">
                Welcome to{' '}
                <span className="text-blue-500">
                    <Typewriter
                        words={['Add Job Information!']}
                        loop={Infinity}
                        cursor
                        cursorStyle="|"
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </span>
            </h1>
            <div className="bg-white shadow-lg rounded-lg p-6 max-w-4xl mx-auto">
                <form 
				onSubmit={handleAddJob} 
				className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-gray-600 mb-2">Company</label>
                        <div className="flex items-center gap-2">
                            <FaBuilding className="text-gray-500" />
                            <input
                                type="text"
                                name="company"
                                className="w-full border px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                                placeholder="Enter Company Name"
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-gray-600 mb-2">Job Title</label>
                        <input
                            type="text"
                            name="title"
                            className="w-full border px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                            placeholder="Enter Job Title"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-600 mb-2">Location</label>
                        <input
                            type="text"
                            name="location"
                            className="w-full border px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                            placeholder="Enter Location"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-600 mb-2">Application Deadline</label>
                        <input
                            type="date"
                            name="applicationDeadline"
                            className="w-full border px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-600 mb-2">HR Name</label>
                        <input
                            type="text"
                            name="hr_name"
                            className="w-full border px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                            placeholder="Enter HR Name"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-600 mb-2">HR Email</label>
                        <div className="flex items-center gap-2">
                            <FaEnvelope className="text-gray-500" />
                            <input
                                type="text"
                                name="hr_email"
                                defaultValue={user?.email}
                                readOnly
                                className="w-full border px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-gray-600 mb-2">Company Logo</label>
                        <input
                            type="text"
                            name="company_logo"
                            className="w-full border px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                            placeholder="Enter Company Logo URL"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-600 mb-2">Job Type</label>
                        <select
                            name="jobType"
                            className="w-full border px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                        >
                            <option value="">Select Job Type</option>
                            <option value="Hybrid">Hybrid</option>
                            <option value="Remote">Remote</option>
                            <option value="On-site">On-site</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-gray-600 mb-2">Salary Range</label>
                        <div className="flex gap-2">
                            <input
                                type="number"
                                name="min"
                                className="w-1/2 border px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                                placeholder="Min"
                            />
                            <input
                                type="number"
                                name="max"
                                className="w-1/2 border px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                                placeholder="Max"
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-gray-600 mb-2">Currency</label>
                        <select
                            name="currency"
							defaultValue='Select Currency'
                            className="w-full border px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                        >
                            <option  disabled>Select Currency</option>
                            <option value="BDT">BDT</option>
                            <option value="USD">USD</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-gray-600 mb-2">Job Description</label>
                        <textarea
                            name="description"
                            rows="4"
                            className="w-full border px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                            placeholder="Enter Job Description"
                        ></textarea>
                    </div>
                    <div>
                        <label className="block text-gray-600 mb-2">Requirements</label>
                        <textarea
                            name="requirements"
                            rows="4"
                            className="w-full border px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                            placeholder="Enter Requirements (one per line)"
                        ></textarea>
                    </div>
                    <div>
                        <label className="block text-gray-600 mb-2">Responsibilities</label>
                        <textarea
                            name="responsibility"
                            rows="4"
                            className="w-full border px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                            placeholder="Enter Responsibilities (one per line)"
                        ></textarea>
                    </div>
                    <div className="col-span-1 md:col-span-2">
                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-blue-400 to-green-400 text-white font-bold py-3 rounded-lg hover:from-green-400 hover:to-blue-400 transition-all"
                        >
                            Add Job
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddJob;
