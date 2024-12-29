import React from 'react'
import { deleteDetailsAPI } from '../services/allAPI';
import Edit from './Edit';



function Tabledata({studentDetails,setDeleteStudentResponse,updateStudentList}) {
  console.log(studentDetails);


 

  const deleteDeatails=async(studentId)=>{
   try{

    const result=await deleteDetailsAPI(studentId)
  
    setDeleteStudentResponse(result.data)
    console.log(result);
    

   }
   catch(err)
   {
    console.log(err);
    
   }

 }
  
   
  return (
    <>
    
        {
        studentDetails?.map((details=>
        <tr key={details?.id}>
          <td>{details?.id}</td>
          <td>{details?.nme}</td>
          <td>{details?.dob}</td>
          <td>{details?.gender}</td>
          <td>{details?.qualification}</td>
          <td>{details?.phone}</td>
          <td>{details?.email}</td>
          <td><Edit studentData={details} setUpdatedResponse={updateStudentList} /></td>
          <td><button className='btn' onClick={()=>deleteDeatails(details?.id)} style={{border:'none'}}><i className="fa-solid fa-trash"></i></button></td>
        </tr>
        ))
}
       
     
    

    
    
    
    
    
    
    </>
  )
}

export default Tabledata