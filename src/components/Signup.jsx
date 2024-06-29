import React, { useState } from 'react';
import { useNavigate } from "react-router-dom"
import "../components/auth.css"
import BackgroundImage from "../components/images/register.webp";
import img1 from "../components/images/add.png";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Signup = () => {
  const navigate = useNavigate();
  const[input, setInput] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e)=>{
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(input));
    navigate("/");
    toast("Register Successfully");
    
  };


  return (
    <div className='signup' style={{ backgroundImage: `url(${BackgroundImage})` }}>
      
      <div className='signup-left'>
      <img src={img1} alt="" className='addimg'/>
      <h2 className='signup-heading'>Register</h2>
      <form>

        <div className='form-label'>
        <input type="text" name='fname' value={input.fname} onChange={(e)=>setInput({...input,[e.target.name]: e.target.value })} placeholder='First Name' required />
        
        </div>

        <div className='form-label'>
        <input type="text" name='lname' value={input.lname} onChange={(e)=>setInput({...input,[e.target.name]: e.target.value})} placeholder='Last Name' required />
        
        </div>

        <div className='form-label'>
        <input type="email" name='email' value={input.email} onChange={(e)=>setInput({...input,[e.target.name]: e.target.value})} placeholder='Email Id' required />
        
        </div>

        <div className='form-label'>
        <input type="password" name='password' value={input.password} onChange={(e)=>setInput({...input,[e.target.name]: e.target.value})} placeholder='Password'required />
        </div>

        <button className='signupbtn' onClick={handleSubmit} >Register</button>
        <p className='signup-end'>Already Registred! <a href='/' className='anchorlink'>Login now</a> </p>

      </form>
      <ToastContainer />
      </div>
      
    </div>
  )
}

export default Signup