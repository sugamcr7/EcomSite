import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../components/auth.css"
import BackgroundImage from "../components/images/register.webp";
import img1 from "../components/images/add.png";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {

  const navigate = useNavigate();
  const[input, setInput] = useState({
    
    email: "",
    password: "",
  });

  const handleLogin = (e)=>{
    e.preventDefault();
    const loggeduser = JSON.parse(localStorage.getItem("user"));
    if(
      input.email === loggeduser.email &&
      input.password === loggeduser.password
    ){
      localStorage.setItem("loggedin", true);
      
      navigate("/home");
    }else{
      alert("Wrong Credential");
    }
  };
  const notify = () => toast("login Successfully");



  return (
    <div className='login' style={{ backgroundImage: `url(${BackgroundImage})` }}>
      
      <div className='login-left'>
      <img src={img1} alt="" className='addimg'/>
      <h2 className='signup-heading'>Login</h2>

<form onSubmit={handleLogin}>

  <div className='form-label'>
  <input type="email" name='email' value={input.email} onChange={(e)=>setInput({...input,[e.target.name]: e.target.value})} placeholder='Email Id' />
  
  </div>

  <div className='form-label'>
  <input type="password" name='password' value={input.password} onChange={(e)=>setInput({...input,[e.target.name]: e.target.value})} placeholder='Password' />
  
  </div>

  <button className='loginbtn' onClick={notify}  >login</button>
  <p className='signup-end'>Not Registred Yet? <a href='/signup' className='anchorlink'>Create An Account!</a> </p>


</form>
<ToastContainer />
      </div>
      
    </div>
  )
}

export default Login