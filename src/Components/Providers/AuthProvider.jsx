import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../../Firebase/Firebase.config';

export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {

    const [user, setUser] = useState();
    const [userProfile, setUserProfile] = useState(false)
    const [loading, setLoading] = useState(true);
  
    const creatUser = (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
    };
  
    const OUT = () => {
      setLoading(true);
      return signOut(auth);
    };
  
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        
        
       setUser(currentUser)
       setLoading(false)  
        console.log("Ovserving", currentUser);
      });
      return () => {
        unsubscribe();
      };
    }, []);
  
    const Google = () => {
      const provider = new GoogleAuthProvider();
      setLoading(true);
      return signInWithPopup(auth, provider);
    };

    const GitHub = ()=>{
        const provider = new GithubAuthProvider()
        setLoading(true)
        return signInWithPopup(auth,provider)
    }
  
    const update = (name, photo) => {
      setLoading(true);
      return updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photo,
      });
    };
  
    const In = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
    };
  
    const AuthInfo = { loading, user,userProfile, setUserProfile, GitHub, In, update, Google, OUT, creatUser };
    //  console.log(user, userProfile)
    return (
      <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;