import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { auth,db } from './Firebase';
import {setDoc, doc } from 'firebase/firestore';
export default function SignUpPage() {

  const [fname , setFname] = useState("");
  const [lname ,setLname] = useState("");
  const [email , setEmail] = useState("");
  const [password ,setPassword] = useState("");

const handleSignUp = async (e)=>{
  e.preventDefault();
  try{
   await createUserWithEmailAndPassword(auth,email,password);
   const user = auth.currentUser;
   console.log(user);
  if(user){
    await setDoc(doc(db,'Users',user.uid),{
      firstName: fname,
      lastName: lname,
      email: email,
      uid: user.uid,
      createdAt: new Date(),
    });
  }
  toast.success('Account created successfully!',{
    position:'top-center'
  })

  }catch(error){
    console.log(error.message);
  toast.success(error.message,{
    position:'bottom-center'
  })

  }
}



  return (
    <div className="signUpMainDiv">
        <div className='signUpBox'>
        <h1>SIGN UP</h1>

        <form onSubmit={handleSignUp} action="/home">
        <label  htmlFor="fname">FirstName</label>
        <input required id='fname' type="text" placeholder='Type your first name' value={fname}  onChange={(e)=>{setFname(e.target.value)}} />

        <label htmlFor="lname">LastName</label>
        <input required max={6} id='lname' type="text" placeholder='Type your last name' value={lname}  onChange={(e)=>{setLname(e.target.value)}}/>

        <label  htmlFor="email">Email</label>
        <input required id='email' type="email" placeholder='Type your email' value={email}  onChange={(e)=>{setEmail(e.target.value)}} />
    
        <label htmlFor="password">Set Password</label>
        <input required max={6} id='password' type="password" placeholder='Set password' value={password}  onChange={(e)=>{setPassword(e.target.value)}} />
        

        <Link to={'/home'} className='toHomeLink' >SIGN UP</Link>

        <p className='signInMessage'>Already have an account ? <Link className='signInLink' to={'/login'}>Sign In</Link></p>
        </form>

        
    </div>
    </div>
  )
}
