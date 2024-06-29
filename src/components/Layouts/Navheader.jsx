import React from 'react'
import "../Layouts/navbar.css"
import { Link, useNavigate } from "react-router-dom"
import img1 from "../images/header.png"

const Navheader = ({cartItems}) => {
    const navigate = useNavigate();
    const userName = JSON.parse(localStorage.getItem("user"));

    const handleLogout = () =>{
        localStorage.removeItem("loggedin");
        navigate("/")
    }

  return (

<>
<header className='sport-top-header'>

        <div>
           <ul className='sport-email'>
                <li>
                    <Link to="/"><i class="fa fa-envelope-o" aria-hidden="true"/>info@sportclub.in</Link>
                </li>
            </ul>
        </div>

        <div className='sport-top-link'>
            <ul>
                <li>
                    <Link to="/"><i class="fa fa-map-marker" aria-hidden="true"/>138/A, H.M Road. Kolkata - 131</Link>
                </li>
            </ul>

            <ul>
                <li>
                    <Link to="/about"><i class="fa fa-phone" aria-hidden="true"/>+91-7044197767</Link>
                </li>
            </ul>

        </div>

    </header>

    
    <header className='sport-header'>
        <div>
            <h2>
                <Link to="/" className='logo'><img className='img1' src={img1}  /></Link>
            </h2>
        </div>
        <div className='sport-link'>
            <ul>
                <li>
                    <Link to="/home">Home</Link>
                </li>
            </ul>


            <ul>
                <li>
                    <Link to="/about">About Us</Link>
                </li>
            </ul>

            <ul>
                <li>
                    <Link to="/shop">Shop</Link>
                </li>
            </ul>

            <ul>
                <li>
                    <Link to="/contact">Contact Us</Link>
                </li>
            </ul>

            <ul>
                <li>
                    <Link to="/cart"><i class="fa fa-shopping-bag" aria-hidden="true"/>
                    <span className="sport-cart-count">
                        {cartItems.length === 0 ? "" : cartItems.length}
                    </span>
                    </Link>
                </li>
            </ul>

            <ul>
                <li>
                    <p>{userName?.fname}</p>

                </li>
            </ul>

            <ul>
                <li>
                <button onClick={handleLogout} className="logoutbtn">Logout</button>
                </li>
            </ul>

            

        </div>

    </header>
    </>

  )
}

export default Navheader