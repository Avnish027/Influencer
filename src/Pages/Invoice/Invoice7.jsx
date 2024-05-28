import React from 'react'
import invoice7 from './invoice7.module.css'
import img44 from '../../Assets/invoice/image 44 (3).png'
import cross from '../../Assets/invoice/cross.png'
import logout from '../../Assets/invoice/logout.png'

import invoice3 from './invoice3.module.css'
import user_icon from '../../Assets/invoice/Shirley web.png'
import cross_icon from '../../Assets/invoice/crosss.png'


function Invoice7() {
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




      <div className={invoice7.outer_wrapper}>
        <div className={invoice7.invoice_generated}><h1>LOGOUT</h1></div>
        <div><img src={img44} alt="" /></div>
        <div className={invoice7.amount}><h3><span className={invoice7.sure}>Are you sure you want to</span> Logout?</h3></div>
        <div className={invoice7.button_wraper}>
          <div className={invoice7.button}>
            <div><img src={logout} alt="" /></div>
            <div><p>Yes Logout</p></div>
          </div>
          <div className={invoice7.button}>
            <div><img src={cross} alt="" /></div>
            <div><p>No</p></div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Invoice7