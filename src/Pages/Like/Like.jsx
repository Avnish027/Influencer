import React from 'react'
import collab_img1 from '../../Assets/collab/Collab img.png'
import lke from '../../Assets/like/likke.png'
import like_css from './like.module.css'
import Like_card from './Like_card'
import Footer from '../../components/Footer/Footer'

function Like() {
  return (
      <>
        <div className={like_css.outer_wrapper}>
        <Like_card/>
        <Like_card/>
        <Like_card/>
        </div>
        <Footer/>
      </>
  )
}

export default Like