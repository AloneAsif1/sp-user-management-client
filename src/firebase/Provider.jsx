import React, { createContext } from 'react'

import { signInWithPopup,GoogleAuthProvider, getAuth } from 'firebase/auth'
import app from './firebase.init';

export const AuthContext = createContext(null);



function AuthProvider({ children }) {
    const auth =getAuth(app)
    const provider = new GoogleAuthProvider()
    const googleLogin = () => {
        console.log(auth)
        return signInWithPopup(auth, provider)
    }
    const providerInfo = {
        googleLogin
    }
    return (
        <AuthContext.Provider value={providerInfo}>{children}</AuthContext.Provider>
    )
}

export default AuthProvider;