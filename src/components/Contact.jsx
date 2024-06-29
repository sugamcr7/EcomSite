import React, { useState } from 'react'
import "../components/contact.css";
import img7 from "../components/images/facebook.png";
import img8 from "../components/images/twitter.png";
import img9 from "../components/images/linkedin.png";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const[input,setInput]=useState([])

  const[data, setData]= useState({

    name:"",
    email:"",
    address:"",
    phone:"",
    description:"",

  })

  function changehandle(e){
   setData({...data,[e.target.name]:e.target.value})
  }
  let {name,email,address,phone,description}=data;
  function handleSubmit(){
    setInput([...input,{name,email,address,phone,description}])
    
    console.log(data);
    setData({name:"", email:"", address:"", phone:"", description:""})
    toast("Submit Successfully");
  }
  function handleConsole(){
    console.log(input);
  }


  return (
   
    <div className='app'>
      <h2 className='contact-heading'>Get In Touch</h2>
      <div className='contact-details'>
      <div className='form'>
        

      <input type="text" name='name' value={data.name} onChange={changehandle} placeholder='Name' /><br />
      <input type="email" name='email' value={data.email} onChange={changehandle} placeholder='Email' /><br />
      
      <input type="text" name='address' value={data.address} onChange={changehandle} placeholder='Address'/><br />
      <input type="text" name='phone' value={data.phone} onChange={changehandle} placeholder='Phone no.'/><br />
      <input className='text-area' type="text" name='description' value={data.description} onChange={changehandle} placeholder='Description'/><br />
        

      <button className='btn' onClick={handleSubmit}>Submit</button> <br /><br />
      </div> 
      <div className='contact-info'>
      <h4>Contact Us</h4>
        <p><i class="fa fa-envelope-o" aria-hidden="true"/>info@sportclub.in</p>
        <p><i class="fa fa-phone" aria-hidden="true"/>+91-7044197767</p>
        <p><i class="fa fa-map-marker" aria-hidden="true"/>138/A, H.M Road. Kolkata - 131</p><br /><br />
        <div className='icon'>
        <img src={img7} alt="" className='icon-img3' />
        <img src={img8} alt="" className='icon-img3' />
        <img src={img9} alt="" className='icon-img3' />
          
        </div>
      </div>
      
      </div><br /><br />

      
      <table  width="100%" cellPadding={30}>
        <tbody>
          <tr>
            <td><b>Name</b></td>
            <td><b>Email ID</b></td>
            <td><b>Address</b></td>
            <td><b>Phone no.</b></td>
            <td><b>Description</b></td>
            
          </tr>
          {
            input.map(
              (info,ind)=>{
                return(
                  <tr>
                    <td>{info.name}</td>
                    <td>{info.email}</td>
                    <td>{info.address}</td>
                    <td>{info.phone}</td>
                    <td>{info.description}</td>
                    
                  </tr>
                )
              }
            )

          }
        </tbody>
      </table>
      <ToastContainer />
    </div>
      
   
  )
}


export default Contact