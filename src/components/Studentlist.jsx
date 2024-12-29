import React from 'react'
import Header from './Header'
import Tabledata from './Tabledata'
import View from './View'
import { Link } from 'react-router-dom'

function studentList() {
  return (
    <>
    <Header/>
   <Link to={'/home'}>
   <button style={{float:'right'}} className=' ms-5 mt-2  me-3 btn btn-dark text-warning rounded '>
    Back to <i class="fa-solid fa-house"></i></button>
   </Link>
  <View/>
    </>
  )
}

export default studentList