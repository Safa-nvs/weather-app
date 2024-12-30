import  { useEffect, useState } from 'react'
import Tabledata from './Tabledata'
import { Row } from 'react-bootstrap'
import { getAllDetailsAPI } from '../services/allAPI'
import Table from 'react-bootstrap/Table';

function View(addVideoResponse) {

    const[students,setStudents]=useState([])
    console.log(students);
    const[deleteStudentResponse,setDeleteStudentResponse]=useState('')

    const updateStudentList = (updatedStudent) => {
      const updatedList = students.map(student =>
          student.id === updatedStudent.id ? updatedStudent : student
      );
      setStudents(updatedList); 
  };
    
    


    useEffect(() => {
      getAllDetails()
      
},[addVideoResponse,deleteStudentResponse,updateStudentList])
    


    const getAllDetails=async()=>{
      try{
        const result=await getAllDetailsAPI()
        console.log(result);
        if(result.status>=200 && result.status<300)
        {
          setStudents(result.data)
        }
        else {
            setStudents([])
    }
}
      catch(err)
      {
        console.log(err);
        setStudents([])
        
      }
       
    }
  return (
    <>
    <div className='table-responsive mt-5'>
    {
       students?.length>0?(
         <Table striped bordered hover className='mt-5 table table-bordered' >
              <thead>
                <tr>
                  <th>Enrollmnt.No</th>
                  <th>Name</th>
                  <th>DOB</th>
                  <th>Gender</th>
                  <th>Course</th>
                  <th>Contact</th>
                  <th>Email id</th>
                  
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
              <Tabledata studentDetails={students} setDeleteStudentResponse={setDeleteStudentResponse} updateStudentList={updateStudentList}/>  

              </tbody>
              </Table>


       ):(
        <div className=' ms-5 d-flex align-items-center justify-content-center flex-column'>
           <h3 className='text-danger '>Nothing to display!</h3>
          <img style={{height:'500px',weight:'600px'}} src='/nothing-image.png'></img>
         
        </div>
       )

    }   
    </div>       
                                  
    
    </>
  )
}

export default View