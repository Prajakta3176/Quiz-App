import React, { useEffect, useState } from 'react'
import logo from "../assets/logo.png";
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { auth,db } from './Firebase';
import {setDoc, doc, getDoc } from 'firebase/firestore';
export default function Home() {
  const [userDetails,setUserDetails] = useState(null);

  const fetchUserData = ()=>{
    auth.onAuthStateChanged(async(user)=>{
      // console.log(user);
      const docRef = doc(db,'Users',user.uid);
      const docSnap =  await getDoc(docRef);
      if(docSnap.exists()){
        setUserDetails(docSnap.data());
        console.log(docSnap.data());
      }
      else{
        console.log("user is not logged in");
      }
    })
  }
  useEffect(()=>{
    fetchUserData()
  },[])

  return (
    <div className='homePage'>
      <div className="homeContent">
      <div className="homeLogo"> 
            <img src={logo} alt="" />
        </div>
        <div>
        {
          userDetails ? (
              <h2 className='welcomeText'>Welcome {userDetails.firstName}</h2>
          ) : ""
        }
        </div>
        

        <Link className='startQuizButton' to={'/quiz'}>Start Now</Link>
      </div>
        
    </div>
  )
}
