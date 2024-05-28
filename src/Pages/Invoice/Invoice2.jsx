import React from 'react'
import {NavLink} from "react-router-dom"  
import invoice2 from './invoice2.module.css'

import user_icon from '../../Assets/invoice/Shirley web.png'
import cross_icon from '../../Assets/invoice/crosss.png'
import icon1 from '../../Assets/invoice/Group 3056.png'
import ellipse from '../../Assets/invoice/Ellipse 158.png'
import  union from '../../Assets/invoice/union.png'
import rs from '../../Assets/invoice/rs.png'


function Invoice2() {
  return (
    <>
                <div className={invoice2.billing_navbar}>
        <h1 className={invoice2.heading}>Invoice Generator</h1>
        <div className={invoice2.side_menu}>
            <img src={user_icon} alt="" />
            <div className={invoice2.verticle_line}></div>
            <img src={cross_icon} alt="" />
        </div>
      </div>

<div className={invoice2.outer_wrapper}>
      <div className={invoice2.billing_part_two}>
      <div className={invoice2.steps_outer}>
          <div className={invoice2.steps}>
              <div>
                <img src={icon1} alt="" />
                
              </div>
              <div className={invoice2.horizonatal_line1}></div>
              <div className={invoice2.img_icon}>
                <img src={ellipse} alt="" />
                <img className={invoice2.img_union} src={union} alt="" />

              </div>
              <div className={invoice2.horizonatal_line}></div>
              <div className={invoice2.img_icon}>
                <img src={ellipse} alt="" />
                <img className={invoice2.img_union1} src={rs} alt="" />

                
              </div>

          </div>
          <div className={invoice2.personal}> <p className={invoice2.step}>STEP 2</p><p>Company Details</p></div>

      </div>



      <div className={invoice2.billing_form}>
        <div className={invoice2.form_coulumn1}>
        <div><input type="text" placeholder="COMPANY NAME*" /></div>
        <div><input type="text" placeholder="ADDRESS WITH PINCODE*" /></div>
        <div><input type="text" placeholder="CLIENT GSTIN" /></div>

        </div>
    

      </div>
      </div>
      <div className={invoice2.btn}>
        <div><NavLink  to="/invoice3"><button>Next</button></NavLink></div>
        
      </div>
      </div>
    </>
  )
}

export default Invoice2