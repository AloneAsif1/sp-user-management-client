import React from 'react'
import app from '../firebase/firebase.init'
import { GoogleAuthProvider,signInWithPopup } from 'firebase/auth'

import { getAuth } from 'firebase/auth'

function Login() {
    const auth = getAuth(app)
    const handleLofin =() =>{
        signInWithPopup(auth,GoogleAuthProvider)
        .then(res=>console.log(res))
    }
  return (
    <div>Login
        <button onClick={handleLofin}>lofinn</button>
    </div>
  )
}

export default Login