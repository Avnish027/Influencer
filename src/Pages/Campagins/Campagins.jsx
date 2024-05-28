import React from 'react'
import campagins_css from '../Campagins/campagins.module.css'
import button_icon from '../../Assets/campaigns/icon.png'
import Card from '../Campagins/components/Card'

function Campagins() {
  return (
    <><div className={campagins_css.outer_}>
      <div className={campagins_css.outer_wrapper}>
        <div><h1 className={campagins_css.heading}>Ongoing Campaigns</h1></div>
        <div className={campagins_css.cards_wrapper}>
          <div className={campagins_css.cmp}><Card/></div>
          <div className={campagins_css.cmp}><Card/></div>
          <div className={campagins_css.cmp}><Card/></div>
          <div className={campagins_css.cmp}><Card/></div>

          </div>
        <div className={campagins_css.button_wrapper}><button className={campagins_css.btn_style}><img className={campagins_css.btn_icon}  src={button_icon} alt="" /><p className={campagins_css.btn_txt}>Browse Campaigns</p></button></div>
      </div>
      </div>
    </>
  
  )
}

export default Campagins