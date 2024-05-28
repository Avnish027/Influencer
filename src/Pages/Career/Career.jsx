import React from 'react'
import career from '../Career/career.module.css'

import background from '../../Assets/career/rectangle.png'
import animated_img from '../../Assets/career/background_img.png'

import worklife from '../../Assets/career/balance.png'
import growth from '../../Assets/career/growth.png'
import collabrative from '../../Assets/career/collabrative.png'

import calender_icon from '../../Assets/career/calender.png'
import clock_icon from '../../Assets/career/clock.png'
import home_icon from '../../Assets/career/house.png'
import Footer from '../../components/Footer/Footer'



function Career() {
  return (
    <>
        <div className={career.outer_wrapper}>
        <div className={career.section1}>
          <div className={career.content}>
              <div className={career.txt}><h1>Join Our Dynamic Team and Ignite Your Career!</h1>
              <p className={career.txt_p}>At Influencer Impact, we believe in the power of talent, innovation, and collaboration. We're on a mission to revolutionize the influencer marketing landscape and empower brands to connect with influential creators for authentic and impactful brand promotion. If you're passionate about influencer marketing, cutting-edge technology, and making a difference, we invite you to explore career opportunities with us.</p>
              </div>
              <div className={career.img}><img className={career.img_src} src={animated_img} alt="" /></div>

          </div>
        </div>


        <div className={career.why_section}>
          <div className={career.heading}><h1>Why Work with Us?</h1></div>
          <div className={career.card_wrapper}>
            <div className={career.card1}>
              <div><img className={career.worklife_img}src={worklife} alt="" /></div>
              <div className={career.card_heading}><p>Work-Life Balance</p></div>
              <div><p className={career.card_para}>We understand the importance of maintaining a healthy work-life balance. We offer flexible work arrangements and prioritize employee well-being.</p></div>
            </div>

            <div className={career.card1}>
              <div><img className={career.worklife_img}src={growth} alt="" /></div>
              <div className={career.card_heading}><p>Work-Life Balance</p></div>
              <div><p className={career.card_para}>We understand the importance of maintaining a healthy work-life balance. We offer flexible work arrangements and prioritize employee well-being.</p></div>
            </div>

            <div className={career.card1}>
              <div><img className={career.worklife_img}src={collabrative} alt="" /></div>
              <div className={career.card_heading}><p>Work-Life Balance</p></div>
              <div><p className={career.card_para}>We understand the importance of maintaining a healthy work-life balance. We offer flexible work arrangements and prioritize employee well-being.</p></div>
            </div>
          </div>
        </div>


        
        <div>
          <div className={career.current_heading}><h1>Current Openings</h1><p className={career.current_para}>We welcome individuals who are passionate, driven, and eager to make a positive impact in the influencer marketing industry.</p></div>
          <div>
            <div className={career.design_heading}><h3>Design & Development</h3></div>
            <div className={career.current_card}>
              <h5 className={career.card_heading}>UI/UX Design Internship</h5>
              <div >
                <div className={career.card_row}><img className={career.card_img} src={calender_icon} alt="" /><p>0-6 months</p></div>
                <div className={career.card_row}><img className={career.card_img} src={clock_icon} alt="" /><p>Flexible Working hrs</p></div>
                <div className={career.card_row}><img className={career.card_img} src={home_icon} alt="" /><p>Work from home</p></div>

              </div>
            </div>

            <div className={career.buss_heading}><h3>Business</h3></div>
            <div className={career.buss_card_wrapper}>
              <div className={career.buss_card}>
                <h5 className={career.card_heading}>Content Writer</h5>
                <div >
                  <div className={career.card_row}><img className={career.card_img} src={calender_icon} alt="" /><p>0-6 months</p></div>
                  <div className={career.card_row}><img className={career.card_img} src={clock_icon} alt="" /><p>flexible working hrs</p></div>
                  <div className={career.card_row}><img className={career.card_img} src={home_icon} alt="" /><p>Work from home</p></div>

                </div>
              </div>


              <div  className={career.buss_card}>
                <h5 className={career.card_heading}>Sales Trainer</h5>
                <div >
                  <div className={career.card_row}><img className={career.card_img} src={calender_icon} alt="" /><p>0-6 months</p></div>
                  <div className={career.card_row}><img className={career.card_img} src={clock_icon} alt="" /><p>Flexible Working hrs</p></div>
                  <div className={career.card_row}><img className={career.card_img} src={home_icon} alt="" /><p>Work from home</p></div>

                </div>
              </div>
            </div>
          </div>
        </div>


          <div className={career.final_outer}>
            <div className={career.apply_heading}><h1>How to Apply?</h1></div>
            <div className={career.apply_card_wrapper}>
              <div className={career.apply_card}>
                <div className={career.heading1}>
                    <div className={career.apply_one}><h1 className={career.txt_inline}>1.</h1><h3 className={career.txt_inline}>Upload CV</h3></div>
                    <div className={career.apply_two}></div>

                </div>
                <div className={career.horizontal_line}></div>
                <div className={career.apply_txt}>
                To apply please send your resume and cover letter to [Email Address]
                </div>
              </div>

              <div className={career.apply_card}>
                <div className={career.heading1}>
                    <div className={career.apply_one}><h1 className={career.txt_inline}>2.</h1><h3 className={career.txt_inline}>Share</h3></div>
                    <div className={career.apply_three}></div>

                </div>
                <div className={career.horizontal_line}></div>
                <div className={career.apply_txt}>
                To apply please send your resume and cover letter to [Email Address]
                </div>
              </div>

              <div className={career.apply_card}>
                <div className={career.heading1}>
                    <div className={career.apply_one}><h1 className={career.txt_inline}>3.</h1><h3 className={career.txt_inline}>Get Offer</h3></div>
                    <div className={career.apply_four}></div>

                </div>
                <div className={career.horizontal_line}></div>
                <div className={career.apply_txt}>
                To apply please send your resume and cover letter to [Email Address]
                </div>
              </div>
            </div>
          </div>
      </div>
      <Footer/>
    </>
  )
}

export default Career