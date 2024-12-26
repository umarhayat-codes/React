import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Setting from './Setting'
import Navbar from '../../components/Header/Navbar'
import Copyright from '../../components/Footer/Copyright'

export default function Dashboard() {
  return (
    <>
    <Navbar/>
     <Routes>
        <Route path='setting' element={<Setting/>} />
    </Routes> 
    <Copyright/>
    </>
  )
}
