import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import { FcGoogle } from "react-icons/fc";


const SocialLogin = () => {


	const {signInWithGoogle} = useContext(AuthContext);

	const handleGoogleLogin = () => {
		// গুগল লগইন ফাংশনালিটি এখানে যুক্ত করতে হবে
	
		signInWithGoogle()
		  .then(res =>{
			console.log(res?.user);
			toast.success("Google login successful!");
		  })
		  .catch(err =>{
			console.log(err.message);
			toast.error('please use valid email')
		  })
	
	  };
	return (
		<div>
			<button
				onClick={handleGoogleLogin}
				className="flex items-center justify-center bg-white text-black rounded p-2 w-full font-semibold hover:bg-gray-200 transition"
			>
				<FcGoogle className="mr-2 text-xl" />
				Sign in with Google
			</button>
		</div>
	);
};

export default SocialLogin;