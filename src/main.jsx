import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Add from './components/Add.jsx';
import Home from './components/Home.jsx';
import Update from './Update.jsx';
import AuthProvider from './firebase/Provider.jsx';
import Login from './components/Login.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[{
      path:'/add',
      element:<Add></Add>
    },
    {
      path:'/',
      element:<Home></Home>,
      loader:() => fetch('https://sp-student-management-server.vercel.app')
    },
    {
      path:'/update/:id',
      element:<Update></Update>,
      loader:({params}) =>fetch(`https://sp-student-management-server.vercel.app/${params.id}`)
    },
    {
      path:'/login',
      element:<Login></Login>
    }
  ]
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>,
)
