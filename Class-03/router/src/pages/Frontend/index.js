import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Users from './Users'
export default function Frontend() {
  return (
    <>
      <Header/>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='user' element={<Users/>} />
            <Route path='*' element={<h1 className='text-center'>No Page Found. 404 Error</h1>} />
        </Routes>

      <Footer/>
    </>
  )
}
