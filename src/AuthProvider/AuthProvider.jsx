import React, { createContext, useContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../Firebase/Firebase.config';
export const AuthContext=createContext()
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)
    const auth=getAuth(app)
    const gProvider=new GoogleAuthProvider()


    const googleSignin=()=>{
        setLoading(true)
        return signInWithPopup(auth,gProvider)
    }
    const logOut=()=>{
        return signOut(auth)
    }

    const createEmail=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword (auth,email,password)
    }
    const signInEmail=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    // const emailVarification=()=>{
    //     return sendEmailVerification(auth,user)
    // }
    useEffect(()=>{
        const unsubscription=onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>{
            return unsubscription();
        }
    },[])
    
    const authInfo={
        user,
        googleSignin,
        logOut,
        createEmail,
        signInEmail,
        loading,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;