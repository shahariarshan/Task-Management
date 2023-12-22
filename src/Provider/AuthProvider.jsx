import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";
import useAxios from "../hooks/useAxios";


export const AuthContext = createContext(null)
const auth = getAuth(app);

 // eslint-disable-next-line react/prop-types
 const AuthProvider = ({ children }) => {
const [user,setUser]=useState(null)
const [loading,setLoading] =useState(true)
const googleProvider = new GoogleAuthProvider();
const axiosPublic =useAxios()

// step1 : user create 

const createUser = (email,password)=>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth,email,password)

}

// step-2: sign in User

const signIn = (email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
}

// step-3 : logout user 
const logOut =()=>{
    setLoading(true)
    return signOut(auth)
}

// step 4: Profile Update 

const profileUpdate=(name,photo)=>{
    return updateProfile (auth.currentUser,{
        displayName : name ,photoURL:photo
    })
}

// step-5: google popUp 
const googleSignIn = ()=>{
    setLoading(true)
    return signInWithPopup(auth,googleProvider)
}

useEffect(()=>{
  const unSubscribe =  onAuthStateChanged(auth,currentUser=>{
        setUser(currentUser);
        console.log('current User', currentUser);
        setLoading(false)
       
    
        
    })
    return ()=>{
         unSubscribe()
    }
},[axiosPublic])
    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        profileUpdate,
        googleSignIn,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;