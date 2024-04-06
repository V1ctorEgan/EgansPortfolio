import React, {useState} from 'react';
// import  {FaBar, FaTimes} from 'react-icons/fa'
import Logo from '../assets/logs.png'
import Hamburger from '../assets/hamburger icon-p.png'
import Cancel from '../assets/cancel.png'
import Linkedin from '../assets/linkedin.png'
import {Link} from 'react-scroll'
import {
    FaGithub,
    FaLinkedin,
    FaFacebook,
    FaLinkedinIn,
  } from 'react-icons/fa';
  import { HiOutlineMail } from 'react-icons/hi';
  import { BsFillPersonLinesFill } from 'react-icons/bs';

const NavBar = () =>{
    const [nav, setNav] = useState(false)
    const handleClick = ()=> setNav(!nav)
    
    return(
         
        <div className='fixed nav-bar w-full h-[800px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 underline'>
            <div>
                <img src={Logo} alt="my Logo " style={{width: '50px'}} />
            </div>

            {/* menu */}
            <div  >
                <ul className='desktop-view'>
                    <li>
                        <Link to='home' smooth={true} duration={500}>
                        Home
                        </Link>
                    </li>
                    <li>
                        <Link to='about' smooth={true} duration={500}>
                            About
                        </Link>
                     </li>
                    <li>
                        <Link to='skills' smooth={true} duration={500}>
                            Skills
                        </Link>
                    </li>
                    <li> 
                         <Link to='work' smooth={true} duration={500}>
                         Work
                        </Link>
                    </li>
                    <li> 
                        <Link to='contact' smooth={true} duration={500}>
                          Contact
                        </Link>
                    </li>
                </ul>
            </div>

            {/* Hamburger */}
            <div onClick={handleClick} className='hidden z-10'>
                <img src={!nav? Hamburger : Cancel} alt=" Hamburger icon" style={{width: '30px'}}/>
            </div>

            {/* Mobile menu */}
             
            <ul className={ !nav ? 'hidden-unsure': ' mobile-menu absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center' }>
                <li className='py-6 text-4xl'>
                                            <Link onClick={handleClick} to='home' smooth={true} duration={500}>
                        Home
                        </Link>
                </li>
                <li className='py-6 text-4xl'><Link onClick={handleClick} to='about' smooth={true} duration={500}>
                            About
                        </Link></li>
                <li className='py-6 text-4xl'> <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
                            Skills
                        </Link></li>
                <li className='py-6 text-4xl'><Link onClick={handleClick} to='work' smooth={true} duration={500}>
                         Work
                        </Link></li>
                <li className='py-6 text-4xl'><Link  onClick={handleClick}to='contact' smooth={true} duration={500}>
                          Contact
                        </Link></li>
            </ul>
           

            {/* Social Icons */} 
            <div className='z-10 lg-screen hidden-unsure fixed flex flex-col top-[35%] social-icons'>
                <ul>
                    <li className='list flex justify-between items-center hover:ml-[-10px] duration-300 bg-blue-600'>
                        <a href="https://www.linkedin.com/in/victor-egan-6b5164244" className='flex justify-between items-center w-full  text-gray-300' >Linkedin <FaLinkedin size={30}/> </a>
                    </li>
                    <li className='list flex justify-between items-center hover:ml-[-10px] duration-300 github'>
                        <a href="https://github.com/V1ctorEgan" className='flex justify-between items-center w-full  text-gray-300' >GitHub <FaGithub size={30}/> </a>
                    </li>  
                    <li className='list flex justify-between items-center hover:ml-[-10px] duration-300 email'>
                        <a href="https://victorifeanyi2004@gmail.com" className='flex justify-between items-center w-full  text-gray-300' >Email <HiOutlineMail size={30}/> </a>
                    </li>
                    <li className='list flex justify-between items-center hover:ml-[-10px] resume duration-300 bg-[#565f69]'>
                        <a href="/" className='flex justify-between items-center w-full   text-gray-300' >Resume <BsFillPersonLinesFill size={30}/> </a>
                    </li>
                </ul>
            </div>

        </div>
        // https://www.facebook.com/p/Egan-Victor-100090669844087/?wtsid=rdr_0BEMJiEcYqmGrGNx0

 
        
    )
}

export default NavBar;