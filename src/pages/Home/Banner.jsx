import React from 'react';
import { motion } from "motion/react"
import { easeOut } from 'motion';

const Banner = () => {
	return (
		<div>
			<div className="hero bg-base-200 min-h-96 p-24 rounded-lg">
				<div className="hero-content flex-col lg:flex-row-reverse">
					<div className='flex-1'>
					<motion.img
					animate={{y: [50, 100, 50]}}
					transition={{duration: 10, repeat: Infinity}}
					src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
					className="max-w-sm shadow-2xl w-44 h-44 rounded-t-[40px] rounded-br-[40px] border-l-4 border-b-4 border-rose-900" />
					<motion.img
					animate={{x: [100, 150, 100]}}
					transition={{duration: 10, repeat: Infinity}}
					src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
					className="max-w-sm shadow-2xl w-44 h-44 rounded-t-[40px] rounded-br-[40px] border-l-4 border-b-4 border-rose-900" />
					</div>
					<div className='flex-1'>
					<motion.h1 animate={{x: 50}} transition={{duration: 2, delay: 1, ease: easeOut, repeat:Infinity }} className="text-5xl font-bold">Latest <motion.span animate={{color: ['#581845', '#FF5733']}} transition={{duration: 1.5, repeat: Infinity}}>Jobs</motion.span> For You!</motion.h1>
					<p className="py-6">
						Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
						quasi. In deleniti eaque aut repudiandae et a id nisi.
					</p>
					<button className="btn btn-primary">Get Started</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;