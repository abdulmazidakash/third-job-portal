import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    onAuthStateChanged,
    sendEmailVerification,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
} from 'firebase/auth';
import auth from '../firebase/firebase.config';
import axios from 'axios';


const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Google login
    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)

    };

    // Sign up with email and password
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);

    };

    // Sign in with email and password
    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
	}
    // Sign out user
    const signOutUser =() => {
        setLoading(true);
        return signOut(auth)

    };

    // Create account and update profile
    const updateUserProfile = () => {
		setLoading(true)
		return updateProfile(user, { displayName, photoURL });
	}

    //email verification
    // const emailVerificationUser = () =>{
    //     setLoading(true);
    //     return sendEmailVerification(auth.currentUser);
    // }

    //forget password reset
    const forgetPasswordUser = (email) =>{
        setLoading(true);
        return sendPasswordResetEmail(auth, email);
    }

    // Monitor current user
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            console.log('state captured current user--->', currentUser?.email);

            //jwt token generate code
            if(currentUser?.email){
                const user = { email: currentUser.email};

                axios.post('https://three-job-portal-server.vercel.app/jwt', user,{withCredentials: true})
                    .then(res => console.log('login true', res.data))
                    setLoading(false);
            }
            else{
                axios.post('https://three-job-portal-server.vercel.app/logout', {}, {
                    withCredentials: true
                })
                .then(res => console.log('logout true', res.data))
                setLoading(false);
            }
        });

        return () => {
            unSubscribe();
        };
    }, []);

    const authInfo = {
        user,
        loading,
		setUser,
        createUser,
        signInUser,
        signOutUser,
        signInWithGoogle,
        updateUserProfile,
        // emailVerificationUser,
        forgetPasswordUser,
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
