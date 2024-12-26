import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Register from './Register'
import Login from './Login'
import ForgetPassword from './ForgetPassword'
export default function Euth() {
  return (
    <>
     <Header/>
     <Routes>
        <Route path='register' element={<Register/>} />
        <Route path='login' element={<Login/>} />
        <Route path='forget-password' element={<ForgetPassword/>} />
        <Route path='*' element={<h1 className='text-center'>No Page Found. 404 Error</h1>} />
     </Routes>

     <Footer/> 
    </>
  )
}
