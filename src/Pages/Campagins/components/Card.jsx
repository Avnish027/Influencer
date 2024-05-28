import React from 'react'
import campaigns from '../components/card.module.css'
import nykaa from '../../../Assets/campaigns/nykaa.png'
import icon1 from '../../../Assets/campaigns/Group.png'


function Card() {
  return (
    <>
        
      <div className={campaigns.card_wrapper}>
        <div className={campaigns.card_img}>
          <img className={campaigns.img_one} src={nykaa} alt="" />
          <div className={campaigns.img_txt}><p>Worth Rs. 1 lakh</p></div>
        </div>
        <div className={campaigns.card_txt}>
          <div className={campaigns.inner_txt}>
            <h4 className={campaigns.title_card}>NYKAA</h4>
            <p className={campaigns.para}>Date- 16/06/23- 23/06/23</p>
            <div className={campaigns.icon}>
              <img className={campaigns.icon_size}src={icon1} alt="" />
              <p>Instant Payout</p>
            </div>
          </div>
        </div>
      </div>
    </>

    
  )
}

export default Card