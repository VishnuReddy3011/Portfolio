import React, { useState,useEffect } from 'react'
import { Link,useLocation } from 'react-router-dom'
import "../styles/Navbar.css"
import ReorderIcon from "@mui/icons-material/Reorder"
import HighlightOffIcon from "@mui/icons-material/HighlightOff"

function Navbar() {
    const [expandNavbar,setExpandNavbar] = useState(false);
    const location = useLocation();
    const toggle = () => setExpandNavbar((prev) => !(prev));

    useEffect(()=>{
        setExpandNavbar(false);    // While switching pages
    },[location])

  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
        <div className="toggleButton">
            {expandNavbar ?
                <button onClick ={toggle}><HighlightOffIcon/></button> :
                <button onClick ={toggle}><ReorderIcon/></button> 
            }
        </div>
        <div className="links">
            <Link to="/"> Home </Link>
            <Link to="/Projects">Projects </Link>
            <Link to="/Education"> Education </Link>
        </div>
    </div>
  )
}
export default Navbar
