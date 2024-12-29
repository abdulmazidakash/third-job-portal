import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const ViewApplications = () => {

	const applications = useLoaderData();

	const handleStatusUpdate = (e, id )=>{
		console.log(e.target.value, id);

		const data = {
			status: e.target.value
		}

		fetch(`http://localhost:3000/job-applications/${id}`, {
			method: 'PATCH',	
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify(data)
		})
			.then(res => res.json())
			.then(data => {
				// console.log(data);
				if(data.modifiedCount){
					Swal.fire({
						icon: "success",
						title: "status has been updated",

						});
				}
			})
	}
	return (
		<div>
			<div>
			<button className='btn btn-outline btn-success my-8'>My posted jobs: {applications.length}</button>
			<div className="overflow-x-auto my-6 border-2 border-gray-200 rounded-lg">
				<table className="table">
					{/* head */}
					<thead className='bg-gradient-to-br from-sky-700 to-teal-700 text-white'>
					<tr>
						<th></th>
						<th>Email</th>
						<th>Status</th>
						<th>Update Status</th>

					</tr>
					</thead>
					<tbody>
					{/* row 1 */}
					{
						applications.map((app, index) => 
							<tr key={index}>
						<th>{index + 1}</th>
						<td>{app.applicant_email}</td>
						<td>{app.applicationDeadline}</td>
					 <td>
						<select 
						onChange={(e)=> handleStatusUpdate(e, app._id)}
						defaultValue={app.status || 'Change Status'}
						className="select select-bordered select-xs w-full max-w-xs">
							<option disabled selected>Change Status</option>
							<option>Under Review</option>
							<option>Set Interview</option>
							<option>Hired</option>
							<option>Rejected</option>
						</select>
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

export default ViewApplications;