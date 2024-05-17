import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'

import logo from "../Assets/logo.webp"
import { MdOutlineShoppingCart } from "react-icons/md";

function Navbar() {
    const [menu, setMenu] = useState("Shop")
  return (
    <div className='navbar'>

        <div className="nav-logo">
            <img src={logo} alt="" className='logo-img' />
            <p>SHOPPER</p>
        </div>

        <ul className='nav-menu'>
            <li onClick={()=> setMenu("Shop")} > <Link className={menu==="Shop"? "active": ""} to="/">Shop</Link> </li>
            <li onClick={()=> setMenu("Men")} > <Link className={menu==="Men"? "active": ""} to="/Men">Men</Link> </li>
            <li onClick={()=> setMenu("Women")} > <Link className={menu==="Women"? "active": ""} to="/Women">Women</Link> </li>
            <li onClick={()=> setMenu("Kids")} > <Link className={menu==="Kids"? "active": ""} to="/Kids">Kids</Link> </li>
        </ul>
        <div className="nav-login-cart">
            <Link to="/login"><button>Login</button></Link>
            <Link to="/cart"><MdOutlineShoppingCart className='icon-shop'/></Link>
            
            <div className="nav-cart-count">0</div>
        </div>

    </div>
  )
}

export default Navbar