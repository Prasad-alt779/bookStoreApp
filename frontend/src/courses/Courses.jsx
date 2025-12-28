import React from 'react'
import Navbar from "../components/Navabar"
import Course from "../components/Course"
import Fotter from "../components/Footer"


const Courses = () => {
  return (
    <>
    <Navbar/>
    <div className='min-h-screen'>
          <Course/>
    </div>
    
    <Fotter/>
    </>
  )
}

export default Courses
