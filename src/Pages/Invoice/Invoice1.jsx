import React from 'react'
import invoice1 from './invoice1.module.css'
import {NavLink} from "react-router-dom"  
import user_icon from '../../Assets/invoice/Shirley web.png'
import cross_icon from '../../Assets/invoice/crosss.png'
import icon1 from '../../Assets/invoice/Group 3056.png'
import ellipse from '../../Assets/invoice/Ellipse 158.png'
import  union from '../../Assets/invoice/union.png'
import rs from '../../Assets/invoice/rs.png'


function Invoice1() {
  return (
    <>
    <div className={invoice1.billing_navbar}>
        <h1 className={invoice1.heading}>Invoice Generator</h1>
        <div className={invoice1.side_menu}>
            <img src={user_icon} alt="" />
            <div className={invoice1.verticle_line}></div>
            <img src={cross_icon} alt="" />
        </div>
      </div>

<div className={invoice1.outer_wrapper}>
      <div className={invoice1.billing_part_two}>
      <div className={invoice1.steps_outer}>
          <div className={invoice1.steps}>
              <div>
                <img src={icon1} alt="" />
                
              </div>
              <div className={invoice1.horizonatal_line}></div>
              <div className={invoice1.img_icon}>
                <img src={ellipse} alt="" />
                <img className={invoice1.img_union} src={union} alt="" />
              </div>
              <div className={invoice1.horizonatal_line}></div>
              <div className={invoice1.img_icon}>
                <img src={ellipse} alt="" />
                <img className={invoice1.img_union1} src={rs} alt="" />

                
              </div>

          </div>
          <div className={invoice1.personal}> <p className={invoice1.step}>STEP 1</p><p>Personal Details</p></div>
      </div>



      <div className={invoice1.billing_form}>
        <div className={invoice1.form_coulumn1}>
        <div><input type="text" placeholder="FULL NAME*" /></div>
        <div><input type="text" placeholder="ADDRESS WITH PINCODE*" /></div>
        <div><input type="text" placeholder="TDS (%)" /></div>
        <div><input type="text" placeholder="YOUR GSTIN" />
        <p className={invoice1.gst}>Applicable when annual income is more than 20 lakhs</p></div>
        <div><input type="text" placeholder="PAN NUMBER*" />
        <p className={invoice1.gst}>Mandatory for invoice of more than 2 lakhs in value</p></div>

        </div>
        <div className={invoice1.form_coulumn2}>
        <div><input type="text" placeholder="BANK ACCOUNT NUMBER*"/></div>
        <div><input type="text" placeholder="BANK ACCOUNT BENEFICIARY NAME*" /></div>
        <div><input type="text" placeholder="IFSC CODE*" /></div>
        <div><input type="text" placeholder="BANK NAME*" /></div>

        </div>

      </div>
      </div>
      <div className={invoice1.btn}>
        <div><NavLink  to="/invoice2"><button>Next</button></NavLink></div>

      </div>
      </div>
    </>
  )
}

export default Invoice1