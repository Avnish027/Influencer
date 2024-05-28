import React from 'react'
import homescreen from './homescreen.module.css'
import Homepage from '../../Assets/home_assets/Homepage.png'
import Arrow from '../../Assets/home_assets/Arrow 1.png'


function Homescreen() {
  return (
    <>
        <div className={homescreen.backgroundimg}>
       <div className= {homescreen.txt}>
            <div>"Unlock Your Potential"</div>
        </div>
        <div className={homescreen.description}>
                The all-in-one influencer marketing platform - connecting your brand to the right <br />
                influencer with the right audience for maximum ROI
        </div>
        <div className={homescreen.homepage}>
            <img className={homescreen.img1} src={Homepage} alt="Image" />
        </div>
        <div className={homescreen.btn_wrapper}>
            <button className={homescreen.btn}>Start your journey<img src={Arrow} alt="" /></button>
        </div>
       </div>
    </>
  )
}

export default Homescreen