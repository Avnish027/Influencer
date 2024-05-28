import React from 'react'
import collab_img1 from '../../Assets/collab/Collab img.png'
import collab from './collab_page_card.module.css'


function CollabPageCard() {
  return (
    <>
    <div className={collab.collab_wrapper1}>
            <div className={collab.collab_img}>
              <img src={collab_img1} alt="" />
            </div>
            <div className={collab.data}>
              <span>Myntra</span>
              <div className={collab.vertical_line}></div>
              <span>Paid</span>
              <div className={collab.vertical_line}></div>
              <span>1K- 30M Followers</span>
            </div>
            <div >
              <hr className={collab.hr_line} />
            </div>
            <div className={collab.btn_view}>
              <button>View Details</button>
            </div>
    </div>
    </>
  )
}

export default CollabPageCard