import React from 'react'
import about_us_a from '../AboutUs/about_us_a.module.css'
import whatsapp from '../../Assets/aboutus/whatsapp.png'
import insta from '../../Assets/aboutus/insta.png'
import gmail from '../../Assets/aboutus/gmail.png'


function AboutUsA() {
  return (
    <>
        <div className={about_us_a.background}>
        {/* <img  className={about_us.img_wrapper}src={back_img} alt="" /> */}
        <div className={about_us_a.txt}>
        <h1>Influencer Impact</h1>
        <p className={about_us_a.para_wrapper}>We believe in the power of influencer marketing to drive brand growth and create meaningful connections. Providing a dedicated space where brands can find, connect, and hire the perfect influencers for their promotional campaigns.</p>
        <div className={about_us_a.btn_wrapper}><button className={about_us_a.btn}>Read More</button></div>
        <div className={about_us_a.icon_wrapper}>
          <div><img className={about_us_a.icon_img} src={whatsapp} alt="" /></div>
          <div><img className={about_us_a.icon_img} src={insta} alt="" /></div>
          <div><img className={about_us_a.icon_img} src={gmail} alt="" /></div>

          </div>
        </div>
      </div>
    </>
  )
}

export default AboutUsA