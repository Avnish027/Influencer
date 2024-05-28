import React from 'react'
import {NavLink} from "react-router-dom"
import navbar2 from '../Navbar2/navbar2.module.css'

function Navbar2() {
  return (
    <>
        <div className={navbar2.outer_wrapper}>
            <div className={navbar2.inner_wrapper}>
                <div className={navbar2.logo_link}><NavLink to="/"><h2>LOGO</h2></NavLink></div>
                <div className={navbar2.nav_links}>
                    <div className={navbar2.items}><NavLink to="/">Home</NavLink></div>
                    <div className={navbar2.items}><NavLink to="/career">Career</NavLink></div>
                    <div className={navbar2.items}><NavLink to="/about_us">About Us</NavLink></div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Navbar2