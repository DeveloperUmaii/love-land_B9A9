import {  createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import auth from '../firebaseConfig/firebaseConfig';

//npm run dev
//All Provider
//googleLogIn Auth Provider
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();


export const AuthContext = createContext(null)

    const FirebaseProvider = ({children}) => {

        //Storage User
        const [user, setUser] = useState({ })
        console.log(user);

        //Creat User
    const creatUser = (email, password) => {
       return createUserWithEmailAndPassword(auth, email, password)
    }
        //UpDate User Profile
    const updateUserProfile = ( name, photourl) => {
        return updateProfile(auth.currentUser, {
                 displayName: name,
                 photoURL: photourl,
          });
    }   

        //SignIn User
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
                                        console.log(email,password) //1st. prothome register kore 2. er por new user register kore tarpor 3. 1st user + password dilei done
                                        console.log(user)
        })}

        //LogOut User
    const Logout = () => {
            setUser(null)
            return signOut(auth) 
        }    

        //google LogIn
        const googleLogIn = () => {
                return signInWithPopup(auth, googleProvider)

        }

        //github LogIn
        const githubLogIn = () => {
                return signInWithPopup(auth, githubProvider)

        }

        // [Observer] je tools-ta porjobekkhone rakhbe sob kicu thik thak kaj korce ki na
    useEffect ( () =>{
        onAuthStateChanged(auth, (user) => {
            setUser(user);
          });

    } ,[])

    const allvalu = {
        creatUser,
        signInUser,
        googleLogIn,
        githubLogIn,
        Logout,
        user,
        updateUserProfile,
       
    };
    return (
        <AuthContext.Provider value={allvalu}>
                {children}
        </AuthContext.Provider>
    );
};

export default FirebaseProvider;