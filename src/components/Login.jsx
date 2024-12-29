import React, { useState } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const navigate=useNavigate()

  const handleLogin=()=>{
    if(name && password)
    {
      navigate('/home')
    }
    else{
      alert("please enter username and password")
    }


  }

  return (
    <>
   
      <div
        style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', }} className="container-fluid">
        <Row className='bg-light' style={{ height: 'auto', width: '75%',boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', padding: '20px', borderRadius: '8px', }}>

          <Col lg={6} sm={12} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '10px', }}>

            <span style={{ fontSize: '22px', color: '#28a745' }}>
              Welcome to Student Management Login
            </span>
            <h5  className="text-warning fw-bold text-center mb-5">
              Sign into your account
            </h5>

            <FloatingLabel controlId="floatingInput" label="Username">
              <Form.Control
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Username"
              />
            </FloatingLabel>

            <FloatingLabel className="mt-3" controlId="pass" label="Password">
              <Form.Control
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
              />
            </FloatingLabel>

           
              <button onClick={handleLogin} className="btn ms-5 mt-4 p-2 bg-success w-50" style={{ }}>
                Login
              </button>
         
          </Col>


          <Col
            lg={6}
            sm={12}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '10px',
            }}
          >
            <img
              src="https://image.freepik.com/free-vector/login-concept-illustration_114360-739.jpg"
              alt="Login Illustration"
              style={{
                maxWidth: '100%',
                height: 'auto',
                maxHeight: '300px',
                width: 'auto',
              }}
            />
          </Col>
        </Row>
      </div>



    </>
  );
}

export default Login;
