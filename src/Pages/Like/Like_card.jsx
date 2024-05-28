import React from 'react'
import collab_img1 from '../../Assets/collab/Collab img.png'
import lke from '../../Assets/like/likke.png'
import like_css from './like_card.module.css'

function Like_card() {
  return (
    <>

    <div className={like_css.collab_wrapper}>
          <div>
            <img  className={like_css.collab_img_icon}src={collab_img1} alt="" />
          </div>
          <div className={like_css.data}>
            <span>Myntra</span>
            <div className={like_css.vertical_line}></div>
            <span>Paid</span>
            <div className={like_css.vertical_line}></div>
            <span>1K- 30M Followers</span>
          </div>
          <div >
            <hr className={like_css.hr_line} />
          </div>
          <div className={like_css.btn_view}>
            <button><img src={lke} alt="" /></button>
            <button>View Details</button>
          </div>
  </div>

</>
      
  )
}

export default Like_card