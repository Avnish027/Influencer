import React from 'react'
import signin2 from './signin2.module.css'
import {NavLink} from "react-router-dom"



import insta from '../../Assets/signup/Instaicon.png'
import twitter from '../../Assets/signup/Twitterion.png'
import youtube from '../../Assets/signup/Youtubeicon.png'
import loginimg from '../../Assets/signup/Loginimg.png'


function Sigin2() {
  return (
    <>
    <div className={signin2.wraper}>
      <div className={signin2.partone}>
          {/* <div className={Logincss.logo}>
              <img src={LOGO} alt="" />
          </div> */}
          <div>
              <div className={signin2.welcome}>
                  Welcome to Influencer Impact
              </div>
              <div>
                                      <div className={signin2.formtxt}>
                                      Enter 4 digit OTP number sent on your mobile
                                      </div>
                                      <div className={signin2.inputtxt}>
                                          <input type="text" />
                                          <input type="text" />
                                          <input type="text" />
                                          <input type="text" />

                                      </div>
                    
                                      

              </div>
              <div className={signin2.btn}><NavLink to="/home_login"><button>Verify</button></NavLink></div>

              </div>
      </div>
      <div className={signin2.parttwo}>
          <img src={loginimg} alt="" />
      </div>
      </div>
  </>
    
  )
}

export default Sigin2