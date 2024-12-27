import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import auth from '../firebase/firebase.config';

const AuthProvider = ({children}) => {

	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	const createUser = (email, password) =>{
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
	}

	useEffect(()=>{

		const unSubscribe = onAuthStateChanged(auth, currentUser =>{
			console.log('state captured current user--->', currentUser);
			setUser(currentUser);
			setLoading(false);
		})

		return () =>{
			unSubscribe();
		}
	}, [])

	const authInfo = {
		user,
		loading,
		createUser,
	}
	return <AuthContext.Provider value={authInfo}>
		{children}
	</AuthContext.Provider>
};

export default AuthProvider;