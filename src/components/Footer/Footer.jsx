import React from 'react'
import footer from './footer.module.css'
import insta_footer from '../../Assets/footer/insta_footer.png'
import msg_footer from '../../Assets/footer/msg_footer.png'
import whatsapp_footer from '../../Assets/footer/whatsapp_footer.png'


function Footer() {
  return (
	<>
	{/* <div className={footer.wrapper}>

	</div> */}




	<div className={footer.outer_wrapper}>
			<div className={footer.outer}>
			  <div>
				<ul className={footer.ullist}>
				  <li>Coureses</li>
				  <li>Fitness & Gym</li>
				  <li>Fashion & Style</li>
				  <li>Beauty & Makeup</li>
				  <li>Home & Decor</li>
				  <li>Technology</li>
				  <li>Lifestyle</li>

				</ul>
			  </div>
			  <div className={footer.vertical_line}></div>
			  <div>
				<ul className={footer.ullist}>
				  <li>Collabs</li>
				  <li>Instragram</li>
				  <li>Twitter</li>
				  <li>Youtube</li>
				  <li>All</li>
				  <li>Spend & Earn</li>

				</ul>
			  </div>
			  <div className={footer.vertical_line}></div>
			  
			  <div>
				<ul className={footer.ullist}>
				  <li >Campaigns</li>
				  <li>Ongoing Campaigns</li>
				  <li>Successfully Completed</li>

				</ul>
			  </div>

			</div>
			<div className={footer.horizontal_line}></div>
			<div className={footer.navelem}>
				<div className={footer.ele_footer}>
				  <ul className={footer.ul_fotter}>
					<li>About Us</li>
					<li>Career</li>
				  </ul>
				</div>
				<div className={footer.ele_footer}>
				  <ul>
					<li>Team Diary</li>
					<li>Blog</li>
					<li>Our Services</li>

				  </ul>
				</div>         
				<div className={footer.ele_footer}>
				  <ul>
					<li>Tearm and Conditions</li>
					<li>Privacy</li>
				  </ul>
				</div>          
				<div className={footer.ele_footer}>
				  <ul>
					<li>Contact Us</li>
					<li>
					  <ul className={footer.footer_icon}>
						<li><img src={whatsapp_footer} alt="" /> </li>
						<li><img src={insta_footer} alt="" /> </li>
						<li><img src={msg_footer} alt="" /> </li>
						</ul>
					</li>
				  </ul>
				</div>
				

			</div>

			<div className={footer.copyright}>
			  <p>&copy; Copyright 2023 @InfluencerImpact</p>
			</div>
	</div>


  </>
  
  )
}

export default Footer