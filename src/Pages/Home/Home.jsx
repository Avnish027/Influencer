import React from 'react'
import Homescreen from './Homescreen'
import Homecard from './Homecard'
import Search_Home from './Search_Home'
import Footer from '../../components/Footer/Footer'
import home from './home.module.css'
import background_curved from '../../Assets/home_assets/Subtract.png'


import Amazon from '../../Assets/home_assets/Amazon.png'
import Boat from '../../Assets/home_assets/Boat.png'
import Flipkart from '../../Assets/home_assets/Flipkart.png'
import Messho from '../../Assets/home_assets/Meesho.png'
import Myglamm from '../../Assets/home_assets/Myglamm.png'
import Myntra from '../../Assets/home_assets/Myntra.png'
import Nykaa from '../../Assets/home_assets/Nykaa.png'
import Sugar from '../../Assets/home_assets/Sugar.png'
import Swiggy from '../../Assets/home_assets/Swiggy.png'
import Home_slider from './Home_slider'


function Home() {
  return (
      <>
        <div className={home.outer_wrapper}>
              <div>
                <Homescreen/>
              </div>

              <div className={home.home_inner_wrapper}>
                <div className={home.cards}>
                        <div className={home.row1}> <Homecard imgsrc={Amazon} />
                        <Homecard imgsrc={Boat} />
                        <Homecard imgsrc={Flipkart} />
                        </div>
                        <div className={home.row2}><Homecard imgsrc={Messho} />
                        <Homecard imgsrc={Myglamm} />
                        <Homecard imgsrc={Myntra} />
                        </div>
                        <div className={home.row3}><Homecard imgsrc={Nykaa} />
                        <Homecard imgsrc={Sugar} />
                        <Homecard imgsrc={Swiggy} />
                        </div>
                </div>
                <div className={home.cardtxt}>
                We Work with the Brands that Influence
                </div>
              </div> 

              <div>
                <Search_Home/>
              </div>   
              <Home_slider/> 
              <div>
        </div>
          <Footer/>
        </div>  
      </>
  )
}

export default Home