import React, {useState}from 'react'
import {NavLink} from "react-router-dom"
import nav from './navbar.module.css'
import arrow from '../../Assets/navbar_assets/Arrow.png'
import like from '../../Assets/navbar_assets/Like.png'
import logo from '../../Assets/navbar_assets/LOGO Navbar.png'
import men from '../../Assets/navbar_assets/Men.png'
import msg from '../../Assets/navbar_assets/Msg.png'
import search from '../../Assets/navbar_assets/Search.png'
import hamburger from '../../Assets/nvabar/burger-bar.png'


function Navbar() {
  const [isStateTrue, setIsStateTrue] = useState(false);

  return (
    <>
        <div className={nav.outer_wrapper}>
            <div className={nav.logo_wrapper}><NavLink to="/" ><img className={nav.logo} src={logo} alt="" /> </NavLink></div>

            <div className={nav.menu} onClick={()=>{
                setIsStateTrue(!(isStateTrue))
  
                }}>
            <div><img className={nav.hamburger_icon}src={hamburger} alt="" /></div>
  
          </div>


            <div className={`${nav.menu_wrapper} ${isStateTrue?nav.linksaa:''}`}>
                
                <div><NavLink  to="/courses">Courses</NavLink><img src={arrow} alt="" /></div>
                <div><NavLink to="/collabs">Collab</NavLink><img src={arrow} alt="" /></div>
                <div><NavLink to="/campagins">Campagins</NavLink><img src={arrow} alt="" /></div>
                
            
            
                <div><NavLink to="/like"><img src={like} alt="" /></NavLink></div>
                <div><NavLink to="/message"><img src={msg} alt="" /></NavLink></div>
                <div><NavLink to="/search"><img src={search} alt="" /></NavLink></div>
                
            
                <div><NavLink to="/signin"><button><img src={men} alt="" />Sign In</button></NavLink></div>

                
                
            </div>

        </div>
    </>
  )
}

export default Navbar