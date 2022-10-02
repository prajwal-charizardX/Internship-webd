
import { Link } from 'react-router-dom'
import './Homepage.css'
import {CSSTransition} from 'react-transition-group'
// import classNames from 'classnames';

import {BsMenuButtonWide} from 'react-icons/bs';
import React,{useState} from 'react'
function Header() {
    const handleClick=()=>{
        setsidebar(true)
        console.log("pressed")
    }
    const closeClick=()=>{
        setsidebar(false)
        console.log("pressed")
    }
    const [sidebar, setsidebar] = useState(false)
  return (
    <>
    <nav>
        <div className='header' >
            <div className='inner-header'>
            <img src="https://png.pngitem.com/pimgs/s/379-3796388_construction-logos-designs-png-transparent-png.png" alt="" className='header-logo' />
            <div className='burger-name'>
            <BsMenuButtonWide size='2rem' className='try' onClick={handleClick}/>
            </div>
            <ul>
                <li><Link to="/" className='header-li'>Home</Link></li>
                <li><Link to="/" className='header-li'>About Us</Link></li>
                <li><Link to="/AboutUs" className='header-li'>Contact Us</Link></li>
                <li><Link to="/" className='header-li'>Projects</Link></li>
                
                
            </ul>
            </div>
            {sidebar?
            <CSSTransition 
            in={sidebar}
            timeout={300
            }
            classNames="slide-in-left">

            <div className='reactive-header'>
                <div className='reactive-header-tags'>
                 
                <li><Link to="/" className='header-li'>Home</Link></li>
                <li><Link to="/" className='header-li'>About Us</Link></li>
                <li><Link to="/AboutUs" className='header-li'>Contact Us</Link></li>
                <li><Link to="/" className='header-li'>Projects</Link></li>
                   
                
                </div>
            </div>
            </CSSTransition>
            :null}

           { sidebar?
            
           <div className='background-drawer' onClick={closeClick}>
            </div>
           
:null}
            

        </div>
    </nav>
    </>
  )
}

export default Header