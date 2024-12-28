import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import auth from '../firebase/firebase.config';

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	//google login
	const signInWithGoogle = () =>{
		setLoading(true);
		return signInWithPopup(auth, googleProvider);
	}

	//sign up email and password
	const createUser = (email, password) =>{
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
	}


	//sign in email and password
	const signInUser = (email, password) =>{
		setLoading(true);
		return signInWithEmailAndPassword(auth, email, password);
	}

	//sign out user
	const signOutUser = () =>{
		setLoading(true);
		return signOut(auth);
	}

	//state captured current user
	useEffect(()=>{

		const unSubscribe = onAuthStateChanged(auth, currentUser =>{
			console.log('state captured current user--->', currentUser);
			setUser(currentUser);
			setLoading(false);
		})

		return () =>{
			unSubscribe();
		}
	}, []);

	

	const authInfo = {
		user,
		loading,
		createUser,
		signInUser,
		signOutUser,
		signInWithGoogle,
	}
	return <AuthContext.Provider value={authInfo}>
		{children}
	</AuthContext.Provider>
};

export default AuthProvider;