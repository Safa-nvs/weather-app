import React from 'react'
import { Link, Links } from 'react-router-dom'

function Footer() {
  return (
    <div style={{ height: "auto" }} className=' container-fluid w-100 mt-5 bg-success mt-5 pt-4'>
      <div className='d-flex justify-content-between ps-5'>
        <div style={{ width: "400px" }}>
          <h5>Student Management</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta impedit 
            perferendis ratione animi, placeat voluptatum non reiciendis dolor similique magni beatae!
             Explicabo facere neque ex eius ab, veritatis illo nostrum.</p>
             <p>Code licensed by Luminar</p>
             <p>Currently v5.3.2</p>
        </div>
        <div className='d-flex flex-column ms-3'>
         
          <h5>Links</h5>
          <Link to={'/'} style={{textDecoration:"none",color:"white"}} >Login</Link>

           <Link to={'/Home'} style={{textDecoration:"none",color:"white"}} >Home</Link>
           <Link to={'/studentlist'} style={{textDecoration:"none",color:"white" }}>studentlist</Link>
            
        </div>
        <div className='d-flex flex-column'>
          <h5>Guids</h5>
          <Link to={""} style={{textDecoration:"none",color:"white"}}>React</Link>
          <Link to={""} style={{textDecoration:"none",color:"white"}}>React Bootstrap</Link>
          <Link to={""} style={{textDecoration:"none",color:"white"}}>React Router</Link>

        </div>
        </div>
      <p className='text-center fw-bold'>Copyright &copy; Aug batch 2024,student Management.Built with react</p>
    </div>
  )
}

export default Footer