import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Nav = () => {
    const [ nav, setNav ] = useState(false);
    const handleNav = () => {
        setNav(!nav)
    }
    console.log(document.title)
    return (
        <div className='navbar'>
            <div className="nav-wrapper">
                <div className="brand">
                    <p className="logo">FBT</p>
                    <p className="menu" onClick={handleNav}>menu</p>
                </div>
                <div className="navigation">
                    <ul>
                        <div className={nav ? "mobile" : "navlinks"}>
                            <li className='nav-link'>
                                <Link to="/">Home</Link>
                            </li>
                            <li className='nav-link'>
                                <Link to="/about-me">About</Link>
                            </li>
                            <li className='nav-link'>
                                <Link to="/my-projects">Projects</Link>
                            </li>
                            <li className='nav-link'>
                                <Link to="/">Hire Me</Link>
                            </li>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Nav;
