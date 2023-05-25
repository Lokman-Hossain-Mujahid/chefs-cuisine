import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth"
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {

    const auth = getAuth(app)

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [success, setSuccess] = useState(null)

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }


    const updateUserData = (name, photo) => {
        return updateProfile(user, {
            displayName: name,
            photoURL: photo
        })
    }


    const googleProvider = new GoogleAuthProvider()

    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const githubProvider = new GithubAuthProvider()

    const githubSignIn = () => {
        return signInWithPopup(auth, githubProvider)
    }

    const logOut = () => {
        return auth.signOut()
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            setUser(loggedUser);
            setLoading(false);
        });
        return () => {
            return unsubscribe();
        }
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        googleSignIn,
        githubSignIn,
        logOut,
        updateUserData,
        setUser,
        success,
        setSuccess
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;