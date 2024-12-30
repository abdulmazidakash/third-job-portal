import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../shared/Navbar/Navbar';
import { Toaster } from "react-hot-toast";
import Footer from '../shared/Footer/Footer';
const MainLayout = () => {
	return (
		<>
		<Toaster position="top-center" reverseOrder={false} />
		<div className='w-full'>
			<Navbar></Navbar>
		</div>
		<div className='max-w-7xl mx-auto mt-24'>
			<Outlet></Outlet>
		</div>
		<div>
			<Footer></Footer>
		</div>
		
		</>
	);
};

export default MainLayout;