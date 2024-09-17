import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../images/logo.png'
import menu_icon from '../../images/menu-icon.png'
import {Link} from 'react-scroll'

const Navbar = () => {

  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
  },[]);

  // intially mobilemenu false he toh class apply ho rahi he isliye li tag is hiding
  // fir click karne phe woh true hojati he roh class aaply nahi hoti 
  // same goes on by clicking menu button(icon).
  
  const [mobilemenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobilemenu ? setMobileMenu(false) : setMobileMenu(true);
  }

  return (
    <nav className={`container ${sticky ? 'dark_nav' : ''}`}>
     <img className='logo' src={logo} alt="logo" />
     <ul className={mobilemenu ? '': 'mobile_menu' }>
        
        <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li> 
        <li><Link to='program' smooth={true} offset={-260} duration={500}>Programs</Link></li> 
        <li><Link to='about' smooth={true} offset={-150} duration={500}>About Us</Link></li> 
        <li><Link to='campus' smooth={true} offset={-260} duration={500}>Campus</Link></li> 
        <li><Link to='testimonials' smooth={true} offset={-260} duration={500}>Testimonials</Link></li> 
        <li><Link to='contact' smooth={true} offset={-260} duration={500} className='btn'>
          Contact Us</Link></li> 
     </ul> 
     <img src={menu_icon} alt="" className='menu_icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar
