import Header from './components/Header'
import './App.css'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom' // Import BrowserRouterimport Login from './components/Login';
import Home from './components/Home';
import Login from './components/Login';
import Studentlist from './components/studentList';




function App() {

  return (
    <>
    <ToastContainer position="top-right" autoClose={5000} theme="colored"/>
    <Router>
    
     <Routes>
      <Route element={<Login/>} path='/'/>
      <Route element={<Home/>} path='/Home'/>
      <Route element={<Studentlist/>} path='/Studentlist'/>
      
     </Routes>
     </Router>
              
    </>
  )
}

export default App
