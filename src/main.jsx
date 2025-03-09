import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginPage from './components/LoginPage.jsx'
import SignUpPage from './components/SignUpPage.jsx'
import Home from './components/Home.jsx'
import Quiz from './components/Quiz.jsx'


const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/',
        element:<LoginPage/>,
      },
      {
        path:'/login',
        element:<LoginPage/>,
      },
      {
        path: '/signUp',
        element: <SignUpPage/>,
      },
      {
        path: '/home',
        element: <Home/>,
      },
      {
        path: '/quiz',
        element: <Quiz/>,
      },


    ]
  }
])

const root = document.querySelector('#root');
createRoot(root).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)