import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../shared/Login/Login";
import Register from "../shared/Register/Register";
import JobDetails from "../pages/Home/JobDetails/JobDetails";
import PrivateRoute from "./PrivateRoute";
import JobApply from "../pages/JobApply/JobApply";
import MyApplication from "../pages/MyApplication/MyApplication";
import MyProfile from "../pages/MyProfile/MyProfile";
import AddJob from "../pages/AddJob/AddJob";
import UpdateProfile from "../pages/MyProfile/UpdateProfile/UpdateProfile";
import MyPostedJobs from "../pages/MyPostedJobs/MyPostedJobs";
import ViewApplications from "../pages/ViewApplications/ViewApplications";
import AllJobs from "../pages/AllJobs/AllJobs";

  const router = createBrowserRouter([
	{
	  path: "/",
	  element: <MainLayout></MainLayout>,
	  errorElement: <h2>Page not found</h2>,
	  children: [
		{
			path: '/',
			element: <Home></Home>,
		},
		{
			path: '/jobs/:id',
			element: <PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
			loader: ({params}) => fetch(`https://three-job-portal-server.vercel.app/jobs/${params.id}`)
		},
		{
			path: 'allJobs/jobs/:id',
			element: <PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
			loader: ({params}) => fetch(`https://three-job-portal-server.vercel.app/jobs/${params.id}`)
		},
		{
			path: '/myProfile',
			element: <PrivateRoute><MyProfile></MyProfile></PrivateRoute>,
		},
		{
			path: '/allJobs',
			element: <AllJobs></AllJobs>,
		},
		{
			path: '/viewApplications/:job_id',
			element: <PrivateRoute><ViewApplications></ViewApplications></PrivateRoute>,
			loader: ({params}) => fetch(`https://three-job-portal-server.vercel.app/job-applications/jobs/${params.job_id}`)
		},
		{
			path: '/myPostedJobs',
			element: <PrivateRoute><MyPostedJobs></MyPostedJobs></PrivateRoute>,
		},
		{
			path: '/updateProfile',
			element: <PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>,
		},
		{
			path: '/addJob',
			element: <PrivateRoute><AddJob></AddJob></PrivateRoute>,
		},
		{
			path: '/jobApply/:id',
			element: <PrivateRoute><JobApply></JobApply></PrivateRoute>,
		},
		{
			path: '/myApplication',
			element: <PrivateRoute><MyApplication></MyApplication></PrivateRoute>,
		},
		{
			path: '/login',
			element: <Login></Login>,
		},
		{
			path: '/register',
			element: <Register></Register>,
		}

	  ]
	},
  ]);

  export default router;