import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../shared/Navbar/Navbar';
import { Toaster } from "react-hot-toast";
import Footer from '../shared/Footer/Footer';
const MainLayout = () => {
	return (
		<>
		<Toaster position="top-center" reverseOrder={false} />
		<div>
			<Navbar></Navbar>
		</div>
		<div className='max-w-7xl mx-auto'>
			<Outlet></Outlet>
		</div>
		<div>
			<Footer></Footer>
		</div>
		
		</>
	);
};

export default MainLayout;