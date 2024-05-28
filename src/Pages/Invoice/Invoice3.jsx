import React from 'react'
import invoice3 from './invoice3.module.css'

import {NavLink} from "react-router-dom"  

import user_icon from '../../Assets/invoice/Shirley web.png'
import cross_icon from '../../Assets/invoice/crosss.png'
import icon1 from '../../Assets/invoice/Group 3056.png'
import ellipse from '../../Assets/invoice/Ellipse 158.png'
import  union from '../../Assets/invoice/union.png'
import rs from '../../Assets/invoice/rs.png'


function Invoice3() {
  return (
    <>
             <div className={invoice3.billing_navbar}>
        <h1 className={invoice3.heading}>Invoice Generator</h1>
        <div className={invoice3.side_menu}>
            <img src={user_icon} alt="" />
            <div className={invoice3.verticle_line}></div>
            <img src={cross_icon} alt="" />
        </div>
      </div>

<div className={invoice3.outer_wrapper}>
      <div className={invoice3.billing_part_two}>
      <div className={invoice3.steps_outer}>
          <div className={invoice3.steps}>
              <div>
                <img src={icon1} alt="" />
                
              </div>
              <div className={invoice3.horizonatal_line}></div>
              <div className={invoice3.img_icon}>
                <img src={ellipse} alt="" />
                <img className={invoice3.img_union} src={union} alt="" />
              </div>
              <div className={invoice3.horizonatal_line}></div>
              <div className={invoice3.img_icon}>
                <img src={ellipse} alt="" />
                <img className={invoice3.img_union1} src={rs} alt="" />


                
              </div>

          </div>
          <div className={invoice3.personal}> <p className={invoice3.step}>STEP 3</p><p>Company Details</p></div>   
      </div>



      <div className={invoice3.billing_form}>
        <div className={invoice3.form_coulumn1}>
        <div><input type="text" placeholder="CAMPAIGN NAME*" /></div>
        <div><input type="text" placeholder="AMOUNT*" /></div>
        <div><input type="text" placeholder="NUMBER OF POSTS*" /></div>
        </div>
    

      </div>
      </div>
      <div className={invoice3.btn}>
        <div><NavLink  to="/invoice4"><button>Next</button></NavLink></div>
        
      </div>
      </div>
    </>
  )
}
export default Invoice3