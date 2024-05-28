import React from 'react'
import signin from './signin.module.css'
import Signin2 from './Signin2'

import insta from '../../Assets/signup/Instaicon.png'
import twitter from '../../Assets/signup/Twitterion.png'
import youtube from '../../Assets/signup/Youtubeicon.png'
import loginimg from '../../Assets/signup/Loginimg.png'



function Signin() {
  return (
    <>
      <div className={signin.wraper}>
        <div className={signin.partone}>
            {/* <div className={Logincss.logo}>
                <img src={LOGO} alt="" />
            </div> */}
            <div>
                <div className={signin.welcome}>
                    Welcome to Influencer Impact
                </div>
                <div>
                                        <div className={signin.formtxt}>
                                            Please enter your phone number
                                        </div>
                                        <div className={signin.inputtxt}>
                                            <input type="text" />
                                        </div>
                                        <div className={signin.horizontal_line}>
                                             <span className={signin.or_text}>or</span>
                                        </div>
                                        <div className={signin.connect}>
                                            Connect With
                                        </div>
                                        <div className={signin.icons}>
                                                <div className={signin.icon}>
                                                <img src={insta} alt="" />
                                                <img src={youtube} alt="" />
                                                <img src={twitter} alt="" />
                                                </div>
                                        </div>

                </div>
            </div>
        </div>
        <div className={signin.parttwo}>
            <img src={loginimg} alt="" />
        </div>
        </div>
        <Signin2/>
        
    </>
  )
}

export default Signin