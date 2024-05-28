import React from 'react'
import invoice4 from './invoice4.module.css'
import {NavLink} from "react-router-dom"  

import invoice3 from './invoice3.module.css'
import user_icon from '../../Assets/invoice/Shirley web.png'
import cross_icon from '../../Assets/invoice/crosss.png'
import green from '../../Assets/invoice/green.png'
import red from '../../Assets/invoice/red.png'
import pen from '../../Assets/invoice/pen.png'
import rss from '../../Assets/invoice/rss.png'



function Invoice4() {
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




    <div className={invoice4.wrapper}>
    <div className={invoice4.column1}>
        <div className={invoice4.bill_no}>
            <div className={invoice4.no}><p className={invoice4.no1}>Invoice Number</p><p>001/23-24</p></div>
            <div  className={invoice4.no}><p className={invoice4.no1}>Date</p><p>28 Jun 2023</p></div>
        </div>
        <div>
          <div className={invoice4.card}>
            <div><img src={green} alt="" /></div>
            <div>
              <div className={invoice4.bill_no1}>BILL TO <img src={pen} alt="" /></div>
              <div><p className={invoice4.card_txt}>Boat Nirwana</p></div>
              <div><p className={invoice4.card_txt}>Address with pincode</p></div>

            </div>
          </div>
          <div className={invoice4.card}>
            <div><img src={red} alt="" /></div>
            <div>
              <div className={invoice4.bill_no1}>BILL TO <img src={pen} alt="" /></div>
              <div><p className={invoice4.card_txt}>Boat Nirwana</p></div>
              <div><p className={invoice4.card_txt}>Address with pincode</p></div>

            </div>
          </div>
        

        </div>

        <div>
          <div className={invoice4.payment_card}>
            <div className={invoice4.payment} ><p className={invoice4.no1}>Payment Details</p></div>
            <div className={invoice4.horizontal_line}></div>
            <div className={invoice4.details}>
              <div className={invoice4.details_row}>
                <div><p className={invoice4.bill_no1}>Beneficiary Name</p><p className={invoice4.no1}>Shirley Sethia</p></div>
                <div><p className={invoice4.bill_no1}>Bank Name</p><p className={invoice4.no1}>SBI BANK</p></div>
              </div>
              <div className={invoice4.details_row}>
                <div><p className={invoice4.bill_no1}>Account Number</p><p className={invoice4.no1}>xxxxxxxxxxxxxx</p></div>
                <div><p className={invoice4.bill_no1}>IFSC CODE</p><p className={invoice4.no1}>xxxxx</p></div>
              </div>
            </div>
          </div>
        </div>
        
    </div>
    <div className={invoice4.column2}>
        <div className={invoice4.particular_details}>
          <div className={invoice4.data}><p className={invoice4.no1}>Particular Details</p></div>
          <div className={invoice4.hr_line}></div>
          <div className={invoice4.sec2_wrapper}>
            <div className={invoice4.sec_2}>
              <div className={invoice4.sub_sec}><p>CAMPAIGN NAME <span className={invoice4.no1}>x 2</span></p><p><img src={rss} alt="" />2,500</p></div>
              <div className={invoice4.hrr}></div>
              <div className={invoice4.sub_sec}><p>SUB TOTAL</p><p><img src={rss} alt="" />2,500</p></div>

            </div>
          </div>


        </div>
        <div>
        <div className={invoice4.btnb}><NavLink  to="/invoice5"><button className={invoice4.btna}>ADD SIGNATURE</button></NavLink></div>

        </div>
    </div>
    </div>
    </>
  )
}

export default Invoice4