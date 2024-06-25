import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "./firebase.config";
import PropTypes from 'prop-types';

export const AuthContext = createContext(null);

        const auth = getAuth(app);
        const googleprovide = new GoogleAuthProvider();

const Authprovider = ({children}) => {
    
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
       
    }
    const logInUser =(email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword( auth, email, password)
    }
    const loginWithGoogle = () =>{
        setLoading(true)
        return signInWithPopup( auth, googleprovide);
    }

    const logOut = () =>{
        setLoading(true)
        return signOut(auth);
    }

    useEffect(() =>{
        const userUnsubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log('user is in the auth state changed', currentUser);
            setUser(currentUser);
            setLoading(false);
        })
        return () =>{
            userUnsubscribe();
        };
    }, [])

    
     

    const authinfo = {user, loading, createUser, logInUser, loginWithGoogle, logOut,  }
    return (
        <div>
            <AuthContext.Provider value={authinfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

Authprovider.propTypes = {
    children: PropTypes.node
}
export default Authprovider;