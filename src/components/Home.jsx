import React, { useState } from 'react'
import Add from './Add'
import View from './View'
import Header from './Header'
import Footer from './Footer'

function Home() {
const[addVideoResponse,setAddVideoResponse]=useState("")//video add cheyth kaynjaal server il ninn kttnna response store cheth vekkaan .(state lifting)
const[updatedResponse,setUpdatedResponse]=useState("")
  return (
    <>
    <Header/>
     <Add setAddVideoResponse={setAddVideoResponse}/>
     
     <Footer/>
  
   
      </>
                   
    
   
  )
}

export default Home