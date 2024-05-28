import React from 'react'
import about_us_a from '../AboutUs/about_us_a.module.css'
import about_us from '../AboutUs/about_us.module.css'

// import campaigns from '../AboutUs/campaigns.module.css'
import nykaa from '../../Assets/campaigns/nykaa.png'
import icon1 from '../../Assets/campaigns/Group.png'


// import search from '../AboutUs/search.module.css'
import rectangle from '../../Assets/search/Rectangle.png'
import search_icon from '../../Assets/search/Group.png'
import boat from '../../Assets/search/boat.png'
import fire from '../../Assets/search/fire.png'

import rocket from '../../Assets/aboutus/rocket.png'
import collaborate from '../../Assets/aboutus/collaborate.png'
import ricoz from '../../Assets/aboutus/ricoz.png'
import team_img from '../../Assets/aboutus/icon_man.png'
import call from '../../Assets/aboutus/call.png'
import google_play from '../../Assets/aboutus/google_play.png'
import app_store from '../../Assets/aboutus/app_store.png'



function AboutUs() {
  return (
    <>
      <div className={about_us_a.background}>
        {/* <img  className={about_us.img_wrapper}src={back_img} alt="" /> */}
        <div className={about_us_a.txt}>
        <h1>Influencer Impact</h1>
        <p className={about_us_a.para_wrapper}>We believe in the power of influencer marketing to drive brand growth and create meaningful connections. Providing a dedicated space where brands can find, connect, and hire the perfect influencers for their promotional campaigns.</p>
        </div>
        </div>



        <div className={about_us.back_clr}>
          <div className={about_us.outer_wrapper}>
              <div className={about_us.txt_area}>
                  <h1>Our Mission</h1>
                  <p className={about_us.para1}>Our mission is to revolutionize the way brands harness the potential of influencer marketing. We aim to empower brands to make informed hiring decisions by providing a seamless and efficient platform that simplifies the process of discovering, connecting, and collaborating with influencers. Through our innovative features and user-friendly interface, we strive to create impactful brand-influencer partnerships that drive measurable results and foster authentic connections with the target audience.</p>
              </div>
              <div className={about_us.img_area}>
                  <img className={about_us.img1} src={rocket} alt="" />
              </div>
          </div>


          <div className={about_us.outer_wrapper}>
          <div className={about_us.img_area}>
                  <img className={about_us.img1} src={collaborate} alt="" />
              </div>
              <div className={about_us.txt_area}>
                  <h1>For Brands</h1>
                  <p className={about_us.para1}>Collaborate with us today and experience the transformative power of influencer marketing to elevate your brand to new heights. Let's make an impact together!</p>
                  <button className={about_us.btn_brands}><img src={call} alt="" /> Contact Us</button>

                  <h1 className={about_us.for_heading}>For Influencers</h1>
                  <p className={about_us.para1}>Collaborate with us today and experience the transformative power of influencer marketing to elevate your brand to new heights. Let's make an impact together!</p>
                  <button className={about_us.btn_brands1}><img src={app_store} alt="" /></button>
                  <button className={about_us.btn_brands1}><img src={google_play} alt="" /></button>
              </div>
              
          </div>
        </div>

        <div className={about_us.brand_wrapper}>
          <div className={about_us.txt_part}>
            <h1 className={about_us.txt_heading}>Founding Brand</h1>
            <p>The Influencer Impact brand is built over powerful technology and analytics to seamlessly provide a creator all the tools and resources required to help them scale up their content effectively</p>
          </div>
          <div className={about_us.img_part}>
            <img  className={about_us.ricoz} src={ricoz} alt="" />
          </div>
        </div>


        <div>
          <div><h1 className={about_us.heading}>Meet Our Team</h1></div>
          <div>
            <div className={about_us.team_wrapper}>
              <div className={about_us.team_image}><img className={about_us.img_source} src={team_img} alt="" /></div>
              <div className={about_us.team_txt}><p>Name</p>
                    <p className={about_us.team_txt_details}>Our visionary leader who sets the strategic direction of Influencer Impact and drives innovation in influencer marketing.</p>
              </div>
            </div>

            <div className={about_us.team_wrapper}>
              <div className={about_us.team_image}><img className={about_us.img_source} src={team_img} alt="" /></div>
              <div className={about_us.team_txt}><p>Name</p>
                    <p className={about_us.team_txt_details}>Our visionary leader who sets the strategic direction of Influencer Impact and drives innovation in influencer marketing.</p>
              </div>
            </div>

            <div className={about_us.team_wrapper}>
              <div className={about_us.team_image}><img className={about_us.img_source} src={team_img} alt="" /></div>
              <div className={about_us.team_txt}><p>Name</p>
                    <p className={about_us.team_txt_details}>Our visionary leader who sets the strategic direction of Influencer Impact and drives innovation in influencer marketing.</p>
              </div>
            </div>

            <div className={about_us.team_wrapper}>
              <div className={about_us.team_image}><img className={about_us.img_source} src={team_img} alt="" /></div>
              <div className={about_us.team_txt}><p>Name</p>
                    <p className={about_us.team_txt_details}>Our visionary leader who sets the strategic direction of Influencer Impact and drives innovation in influencer marketing.</p>
              </div>
            </div>
          </div>

          <div className={about_us.btn_wrapper} ><button className={about_us.last_btn}>View More</button></div>
        </div>


    </>








    // <>
    //   <div className={campaigns.card_wrapper}>
    //     <div className={campaigns.card_img}>
    //       <img className={campaigns.img_one} src={nykaa} alt="" />
    //       <div className={campaigns.img_txt}><p>Worth Rs. 1 lakh</p></div>
    //     </div>
    //     <div className={campaigns.card_txt}>
    //       <div className={campaigns.inner_txt}>
    //         <h4>NYKAA</h4>
    //         <p>Date- 16/06/23- 23/06/23</p>
    //         <div className={campaigns.icon}>
    //           <img className={campaigns.icon_size}src={icon1} alt="" />
    //           <p>Instant Payout</p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </>






    // <>
    //   <div className={search.one}>
    //     <div><img className={search.one_img} src={rectangle} alt="" /></div>
    //     <div className={search.search_area}>
    //       <div className={search.search_icon_img}></div>
    //       <input className={search.input_area} type="text" placeholder='Search for your favourite brand' />
    //     </div>
    //   </div> 

      
    //   <div className={search.card_outer}>
    //   <div className={search.title}><img className={search.title_icon} src={fire} alt="" /><h2>Popular Brands</h2></div>
    //     <div className={search.card_wrapper}>
    //       <div className={search.card}><img className={search.img_icon} src={boat} alt="" /></div>
    //       <div className={search.card}><img className={search.img_icon} src={boat} alt="" /></div>
    //       <div className={search.card}><img className={search.img_icon} src={boat} alt="" /></div>
    //       <div className={search.card}><img className={search.img_icon} src={boat} alt="" /></div>

    //     </div>
    //   </div>   
    // </>
  )
}

export default AboutUs