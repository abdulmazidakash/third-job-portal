import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../shared/Login/Login";
import Register from "../shared/Register/Register";

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