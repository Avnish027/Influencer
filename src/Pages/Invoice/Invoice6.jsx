import React from 'react'
import invoice6 from './invoice6.module.css'
import {NavLink} from "react-router-dom" 
import invoice3 from './invoice3.module.css'
import user_icon from '../../Assets/invoice/Shirley web.png'
import cross_icon from '../../Assets/invoice/crosss.png'

import download from '../../Assets/invoice/download button.png'
import share from '../../Assets/invoice/share button.png'
import invoice_img from '../../Assets/invoice/invoice generator 1.png'


function Invoice6() {
  return (
    <>
    <div className={invoice3.billing_navbar}>
        <h1 className={invoice3.heading}></h1>
        <div className={invoice3.side_menu}>
            <img src={user_icon} alt="" />
            <div className={invoice3.verticle_line}></div>
            <img src={cross_icon} alt="" />
        </div>
      </div>





      <div className={invoice6.outer_wrapper}>
        <div className={invoice6.invoice_generated}><h1>INVOICE GENERATED!</h1></div>
        <div><img src={invoice_img} alt="" /></div>
        <div className={invoice6.amount}><h3><span className={invoice6.bbold}>Invoice created for</span> 001-23/24 <span className={invoice6.bbold}>for amount </span>Rs 2,500</h3></div>
        <div className={invoice6.button_wraper}>
          <div className={invoice6.button}>
            <div><img src={download} alt="" /></div>
            <div><p>Download Invoice</p></div>
          </div>
          <div className={invoice6.button}>
            <div><img src={share} alt="" /></div>
            <div><p>Share Invoice</p></div>
          </div>
        </div>

      </div>
      <div>
      <div><NavLink  to="/invoice7"><button>Next</button></NavLink></div>

      </div>
    </>
  )
}

export default Invoice6