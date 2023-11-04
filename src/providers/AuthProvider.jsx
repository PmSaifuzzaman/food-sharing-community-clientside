import { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";
import PropTypes from 'prop-types';
import app from "../firebase/firebase.config";


export const authContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    // User creation
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Log in
    const logIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // LOg out
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }




    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log("User in the current auth state", currentUser)
            setUser(currentUser);
            setLoading(false);
        })
        return unSubscribe;
    }, []);


    const authInfo = {
        user,
        loading,
        createUser,
        logOut,
        logIn

    }

    return (
        <div>
            <authContext.Provider value={authInfo}>
                {children}
            </authContext.Provider>
        </div>
    );
};

export default AuthProvider;


AuthProvider.propTypes = {
    children: PropTypes.object,
}