import React, { useState } from 'react';
import { getAllDetailsAPI, updateStudentAPI } from '../services/allAPI'; 
import { Modal, Button, Form } from 'react-bootstrap'; 
import {  toast } from 'react-toastify';

function Edit({ studentData, setUpdatedResponse }) {
 
  const [updatedStudentDetails, setUpdatedStudentDetails] = useState(studentData);
  const [showModal, setShowModal] = useState(false);  
  const[islnvalidEmail,setIsInvalidEmail]=useState(false)
  const[isinvalidPhone,setIsInvalidPhone]=useState(false)
  const[isInvalidDob,setIsInvalidDob]=useState(false)

const{nme,dob,gender,phone,qualification,email}=updatedStudentDetails
  // Update student data 
  const handleUpdate = async () => {
    const{nme,dob,gender,phone,qualification,email}=updatedStudentDetails
    if(nme&&dob&&gender&&qualification&&phone&&email &&!isInvalidDob &&!isinvalidPhone&&!islnvalidEmail)
    {


    try {
      const result = await updateStudentAPI(studentData.id, updatedStudentDetails);
      if (result.status >= 200 && result.status < 300) {

       
        setUpdatedResponse(updatedStudentDetails); 
        setShowModal(false); 
        handleCloseModal()
        toast.success("successfully updated student details")
        getAllDetailsAPI()
      }
    } catch (error) {
      console.error("Error updating student details:", error);
    
    }
  }
  else{
    toast.warning("Enter all filds completely")
  }
  };

  // Open the modal
  const handleShowModal = () => setShowModal(true);

  // Close the modal
  const handleCloseModal = () => setShowModal(false);

//validation of input fields
// //email id

  const validateEmail=(value)=>{
    if(value.match(/^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/)){

      setUpdatedStudentDetails((prevState)=>({...prevState,email:value}))
      setIsInvalidEmail(false)

    }
    else{
      setUpdatedStudentDetails((prevState)=>({...prevState,email:value}))
      setIsInvalidEmail(true)
    }
  }
//phone number
const validatePhone=(value)=>
{
  if(value.match(/^[0-9]{10}$/))
  {
    setUpdatedStudentDetails((prevState)=>({...prevState,phone:value}))
    setIsInvalidPhone(false)
  }
  else{
    setUpdatedStudentDetails((prevState)=>({...prevState,phone:value}))
    setIsInvalidPhone(true)
  }
}
 //dob
 const validateDOB=(e)=>{
  const value=e.target.value
  setUpdatedStudentDetails((prevState)=>({...prevState,dob:value}))
  const today=new Date()
  const uDate=new Date(value)

  if (isNaN(uDate.getTime()) || uDate >= today) {
      
    setUpdatedStudentDetails((prevState)=>({...prevState,dob:value}))
    setIsInvalidDob(true)

  }
  else{
    setUpdatedStudentDetails((prevState)=>({...prevState,dob:value}))
    setIsInvalidDob(false)

  }


}
 

  return (
    <div>
   
     
      <Button variant="primary" onClick={handleShowModal}>
        Edit Student
      </Button>

      
      <Modal className='mb-5' 
     show={showModal} onHide={handleCloseModal} >
        <Modal.Header style={{ backgroundImage:'url("")',
      backgroundSize: 'cover',
      backgroundPosition: 'bottom',}}  closeButton>
          <Modal.Title className='fw-bold text-dark'>Edit Student Details</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundImage: 'url("https://img.freepik.com/premium-photo/gradient-green-light-green-background_590614-6373.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'top',}}>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="nme"
                value={updatedStudentDetails.nme}
                onChange={(e)=>setUpdatedStudentDetails({...updatedStudentDetails,nme:e.target.value})}
                placeholder="Name"
              />
            </Form.Group>

            <Form.Group controlId="formdob">
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control
                type="date"
                name="dob"
                value={updatedStudentDetails.dob}
                onChange={(e)=>validateDOB(e)}
                placeholder="date of birth"
              />
            </Form.Group>
            {
              isInvalidDob &&
              <div className='text-danger text-center'>invalid Date of birth</div>
            }
     
            <Form.Group controlId="formgender">
               <div className=''>
                       <Form.Check type="radio"  id="male"  label="Male" value="Male" checked={updatedStudentDetails.gender === "Male"}
                       onChange={(e) => setUpdatedStudentDetails({ ...updatedStudentDetails, gender: e.target.value })}/>
                      <Form.Check type="radio" id="female" label="Female" value="Female" checked={updatedStudentDetails.gender === "Female"}
                       onChange={(e) => setUpdatedStudentDetails({ ...updatedStudentDetails, gender: e.target.value })}/>
                      <Form.Check type="radio" id="other" label="Other" value="Other" checked={updatedStudentDetails.gender === "Other"}
                      onChange={(e) => setUpdatedStudentDetails({ ...updatedStudentDetails, gender: e.target.value })} />
                      </div>
            </Form.Group>

            <Form.Group controlId="formQualification">
              <Form.Label>Course</Form.Label>
              <Form.Control
                type="text"
                name="qualification"
                value={updatedStudentDetails.qualification}
                onChange={(e)=>setUpdatedStudentDetails({...updatedStudentDetails,qualification:e.target.value})}
                placeholder="Qualification"
              />
            </Form.Group>
            

            <Form.Group controlId="formPhone">
              <Form.Label>Contact</Form.Label>
              <Form.Control
                type="text"
                name="phone"
                value={updatedStudentDetails.phone}
                onChange={(e)=>validatePhone(e.target.value)}
                placeholder="Phone"
              />
            </Form.Group>
            {
              isinvalidPhone &&
              <div className='text-danger fw-bold text-center'>invalid!!please enter a 10 digit phone number</div>
            }

            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={updatedStudentDetails.email}
                onChange={(e)=>validateEmail(e.target.value)}
                placeholder="Email"
              />
               </Form.Group>
              {
                islnvalidEmail&&
                <div className='text-danger text-center'>Invalid email id format</div>
              }
           
          </Form>
        </Modal.Body>
        <Modal.Footer >
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpdate} disabled={islnvalidEmail || isinvalidPhone || isInvalidDob }>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Edit;
