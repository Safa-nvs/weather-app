import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { addVideoAPI } from '../services/allAPI';
import {  toast } from 'react-toastify';
import Header from './Header';
import './mysty.css'; 
import { Link } from 'react-router-dom';




function Add({setAddVideoResponse}) {
    const[studentDetails,setStudentDetails]=useState({nme:"",dob:"",gender:"",qualification:"",phone:"",email:""})
    const[isinvalidPhone,setIsInvalidPhone]=useState(false)
    const[isInvalidEmail,setIsInvalidEmail]=useState(false)
    const[isInvalidDob,setIsInvalidDob]=useState(false)
    console.log(studentDetails);
    

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
     

    const validatePhone=(val)=>{

         if(val.match(/^[0-9]{10}$/))
         {
            setStudentDetails({...studentDetails,phone:val})
            setIsInvalidPhone(false)

         }
         else{
            setStudentDetails({...studentDetails,phone:""})
            setIsInvalidPhone(true)


         }
        }
    const validateEmail=(val)=>{
       
        if(val.match(/^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/))
        {
            setStudentDetails({...studentDetails,email:val})
            setIsInvalidEmail(false)

        }
        else{
              setStudentDetails({...studentDetails,email:""})
              setIsInvalidEmail(true)


        }
    }
    const validateDOB=(e)=>{
      const value=e.target.value
      setStudentDetails({...studentDetails,dob:value})
      const today=new Date()
      const uDate=new Date(value)

      if (isNaN(uDate.getTime()) || uDate >= today) {
          
        setStudentDetails({...studentDetails,dob:value})
        setIsInvalidDob(true)

      }
      else{
        setStudentDetails({...studentDetails,dob:value})
        setIsInvalidDob(false)

      }


    }

    const uploadData=async()=>{
      const{nme,dob,gender,phone,qualification,email}=studentDetails

      if(nme&&dob&&gender&&qualification&&phone&&email)
        {
        
        
        
        
      
         try{
         const result= await addVideoAPI(studentDetails)
         console.log(result);
         
         if(result.status>=200 &&result.status<300)
         {
            setAddVideoResponse(result.data)//state lifting
            handleClose()
            toast.success("successfully added details")
         }
        }
        catch(err)
        {
            console.log(err);
            
        }
      }
      else{
        toast.warning("enter all fields completely")
      }
        
         
    }
   
  return (
    <>
    
    <div className=' ms-5  '>
    <div className='row w-100'>
      <div className='col-lg-6 mt-5'>
      
     <p style={{fontFamily: 'Bentham, serif;'}} className="  fs-5 mb-4 mt-5">
    <h4 className='fw-bold text-primary'> Welcome to the Student Registration Portal!</h4>

   Easily add and manage student information with this simple and user-friendly platform. 
   Just fill out the student's name, qualification, phone number, and email, and you'll be able to store and 
   access their details anytime. We ensure accurate data entry with real-time validation for phone numbers and 
   emails. If you need any help, our support team is here to assist. Start managing your student records 
   efficiently today!</p>
  
    <button onClick={handleShow}  className='btn btn-success fw-bold ms-3  mt-3'>
  <h3 style={{fontFamily:'Afacad Flux, serif'}} className='fw-bold fs-4 '>Add students</h3></button>
 <Link to={'/studentlist'}>
 <button className='btn btn-info fw-bold ms-3  mt-3'>
    <h3 style={{fontFamily:'Afacad Flux, serif'}} className='fw-bold text-light fs-4'>View Details</h3>
  </button>
 </Link>
    
      </div>
      <div className='col-lg-6 main d-flex align-items-center justify-content-center'>
        <img style={{width:'400px', height:'500px'}} src='https://www.gleim.com/wp-content/uploads/2019/07/account-career-resource-center.png'/>
      </div>
    </div>
    </div>
    <Modal  show={show} onHide={handleClose} animation={false}>
            <Modal.Header  style={{ backgroundImage: 'url("")',
      backgroundSize: 'cover',
      backgroundPosition: 'top',}} closeButton>
              <Modal.Title className='text-primary fw-bold' >Student Details</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ backgroundImage: 'url("https://i.pinimg.com/736x/39/6d/94/396d94c13f0b58e3e0a5914a37bc52c1.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'top',}}>
                <p className='text-white'>Please fill the details!!</p>
            <div className='border  border-2 border-white border-rounded p-3'>
            <FloatingLabel controlId="floatingInput" className='mb-3' label="Name">
           <Form.Control type="text" onChange={(e)=>setStudentDetails({...studentDetails,nme:e.target.value})} placeholder="Name" />
           </FloatingLabel>

           <FloatingLabel controlId="floatingInput" className='mb-3' label="Date of Birth">
           <Form.Control type="date" onChange={(e)=>validateDOB(e)} placeholder="Date of birth"           />
           </FloatingLabel>
           {
            isInvalidDob &&
            <div className='text-danger text-center fw-bold'> invalid date of birth</div>
           }
           <label className=' mb-2' htmlFor="gender">Gender</label>
          <div className='text-dark'>
         <Form.Check type="radio"  id="male"  label="Male" value="Male" checked={studentDetails.gender === "Male"}
         onChange={(e) => setStudentDetails({ ...studentDetails, gender: e.target.value })}/>
        <Form.Check type="radio" id="female" label="Female" value="Female" checked={studentDetails.gender === "Female"}
         onChange={(e) => setStudentDetails({ ...studentDetails, gender: e.target.value })}/>
        <Form.Check type="radio" id="other" label="Other" value="Other" checked={studentDetails.gender === "Other"}
        onChange={(e) => setStudentDetails({ ...studentDetails, gender: e.target.value })} />
        </div>
         
         <FloatingLabel controlId="floatingInput" className='mb-3' label="Course">
           <Form.Control type="text" onChange={(e)=>setStudentDetails({...studentDetails,qualification:e.target.value})} placeholder="qualification" />
           </FloatingLabel>

           <FloatingLabel controlId="floatingInput" className='mb-3' label="Phone number">
           <Form.Control type="text" onChange={(e)=>validatePhone(e.target.value)} placeholder="phone number" />
           </FloatingLabel>
           {
            isinvalidPhone &&
            <div className='text-danger text-center'>invalid!!please enter a 10 digit phone number</div>
           }

           <FloatingLabel controlId="floatingInput" className='mb-3' label="Email id">
           <Form.Control type="text" onChange={(e)=>validateEmail(e.target.value)}placeholder="email id" />
           </FloatingLabel>
           {
            isInvalidEmail &&
            <div className='text-danger'>invalid email id format</div>
           }

           
           </div>
          
        
            </Modal.Body>
            <Modal.Footer >
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button  variant="success"  onClick={uploadData} disabled={isInvalidDob ||isinvalidPhone||isInvalidEmail}>
               Add
              </Button>
            </Modal.Footer>
          </Modal>
    
    
    </>
  )
}

export default Add