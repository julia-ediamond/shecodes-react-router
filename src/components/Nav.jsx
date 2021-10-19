import React from 'react';
import { Router, Route, Link } from 'react-router-dom';

 const Nav = () => {
     return (
         <div id="root">
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </nav>
         </div>
     )
 }

 export default Nav;