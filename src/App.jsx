import React from 'react'
import LoginPage from './components/LoginPage'
import './App.css'
import { Outlet } from 'react-router-dom'
import { ToastContainer, toast } from "react-toastify";
export default function App() {
  return (
    <>
    <Outlet/>
    <ToastContainer/>
    </>
  )
}
