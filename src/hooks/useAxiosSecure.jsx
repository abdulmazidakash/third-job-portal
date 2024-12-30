import axios from 'axios';
import React, { useEffect } from 'react';
import useAuth from './useAuth';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const axiosInstance = axios.create({
	baseURL: 'https://three-job-portal-server.vercel.app',
	withCredentials: true,
})

const useAxiosSecure = () => {

	const {signOutUser} = useAuth();
	const navigate = useNavigate();

	//interceptor use
	useEffect(()=> {
		axiosInstance.interceptors.response.use(response => {
			return response;
		},
		error =>{
			console.log('error caught in interceptors --->', error);

			if(error.status === 401 || error.status === 403){
				console.log('need to logout the user--->');

				signOutUser()
					.then(() =>{
						console.log('logged out user');
						toast.success(`signOUt successful ${user?.displayName}`)
						navigate('/login')
					})
					.catch(error => console.log(error))
			}
			return Promise.reject(error)
		}
	)
	}, [])
	return axiosInstance;
};

export default useAxiosSecure;