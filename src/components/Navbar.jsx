// import React, { useState } from "react";
// import "./Navbar.css";
import {Link} from 'react-scroll'
import logo from '../images/logo1.png'
export default function Navbar() {
  return (
    <div>
      <nav>
        <Link to='main' className='logo' smooth={true} duration={1500}>
          <img src={logo} alt='logo'/>
        </Link>
        <input className="menu-btn" type='checkbox' id='menu-btn' />
        <label className='menu-icon' htmlFor="menu-btn">
        <span className='nav-icon'></span></label>
        <ul className='menu'>
          <li><Link to='main' className='active' smooth={true} duration={1000}>Home</Link></li>
          <li><Link to='features' smooth={true} duration={1000} >About</Link></li>
          <li><Link to='services' smooth={true} duration={1000} >Services</Link></li>
          <li><Link to='subscribe' smooth={true} duration={1000} >Newsletter</Link></li>
          <li><Link to='contact' smooth={true} duration={1000}>Contact</Link></li>
        </ul>
        <Link to='#' className='hey'><i className="fa fa-phone"></i></Link>
      </nav>
    </div>
  )
}


// const Navbar = () => {
//   const [showMediaIcons, setShowMediaIcons] = useState(false);
//   return (
//     <>
//       <nav className="main-nav">
//         {/* 1st logo part  */}
//         <div className="logo">
//           <h2>
//             <span>T</span>hapa
//             <span>T</span>echnical
//           </h2>
//         </div>

//         {/* 2nd menu part  */}
//         <div
//           className={
//             showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
//           }>
//           <ul>
//             <li>
//               <a href="">Home</a>
//             </li>
//             <li>
//               <a href="about">about</a>
//             </li>
//             <li>
//               <a href="service">services</a>
//             </li>
//             <li>
//               <a href="contact">contact</a>
//             </li>
//           </ul>
//         </div>

     

//           {/* hamburget menu start  */}
//           <div className="hamburger-menu">
//             <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
//             <i className="fas fa-bars"></i>
//             </a>
//           </div>
//       </nav>

  
//     </>
//   );
// };

// export default Navbar;
