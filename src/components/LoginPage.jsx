
import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { auth } from './Firebase';
import {signInWithEmailAndPassword} from 'firebase/auth'

export default function LoginPage() {
  const [email , setEmail] = useState("");
  const [password ,setPassword] = useState("");

// const handleLogin = async (e)=>{
//   e.preventDefault();
//   try{
//    await signInWithEmailAndPassword(auth,email,password);
//     window.location.href = '/home'
//   toast.success('Logged in successfully!',{
//     position:'top-center'
//   })

//   }catch(error){
//     console.log(error.message);
//     toast.success(error.message,{
//     position:'bottom-center'
//   })

//   }
// }

const handleLogin = async (e) => {
  e.preventDefault();
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    console.log("Logged in user:", user); // Debugging: Check if login is successful
    toast.success('Logged in successfully!', { position: 'top-center' });

    window.location.href = '/home';  // Redirect after login

  } catch (error) {
    console.error("Login error:", error.message);
    toast.error(error.message, { position: 'bottom-center' });
  }
};


  return (
    <div className="loginMainDiv">
        <div className='loginBox'>
        <h1>LOGIN</h1>
        <form onSubmit={handleLogin} action="">
        <label  htmlFor="email">Email</label>
        <input required id='email' type="email" placeholder='Type your email' value={email}  onChange={(e)=>{setEmail(e.target.value)}}/>
    
        <label htmlFor="password">Password</label>
        <input required id='password' type="password" placeholder='Type your password' value={password} onChange={(e)=>{setPassword(e.target.value)}} />

        <p className='forgetMessage'>Forgotten password ?</p>

        <button className='toHomeLink'>LOGIN</button>

        <Link to={'/signUp'} className='signUpMessage'>or Sign Up</Link>
        </form>
        
    </div>
    </div>
  )
}
