import React from 'react'
import collab from './collab.module.css'
import Footer from '../../components/Footer/Footer'
import CollabPageCard from './CollabPageCard'


import collab_icon1 from '../../Assets/collab/Icon_sidebar1.png'
import collab_icon2 from '../../Assets/collab/Icon_sidebar2.png'
import collab_icon3 from '../../Assets/collab/Icon_sidebar3.png'
import collab_icon4 from '../../Assets/collab/Icon_sidebar4.png'


function Collab() {
  return (
    <>
      <div className={collab.collab_wrapper}>
      <div className={collab.sidebar_wrapper}>
        <div className={collab.sidebar_menu}>
          <div><img src={collab_icon1} alt="" /></div>
          <div><p>Categories</p></div>
        </div>
        <div className={collab.sidebar_menu}>
          <div><img src={collab_icon2} alt="" /></div>
          <div><p>Food & culinary</p></div>
        </div>       
         <div className={collab.sidebar_menu}>
          <div><img src={collab_icon3} alt="" /></div>
          <div><p>Fashion & Style</p></div>
        </div>        
        <div className={collab.sidebar_menu}>
          <div><img src={collab_icon4} alt="" /></div>
          <div><p>Beauty & Makeup</p></div>
        </div>
        <div className={collab.sidebar_menu}>
          <div><img src={collab_icon4} alt="" /></div>
          <div><p>Beauty & Makeup</p></div>
        </div><div className={collab.sidebar_menu}>
          <div><img src={collab_icon4} alt="" /></div>
          <div><p>Beauty & Makeup</p></div>
        </div><div className={collab.sidebar_menu}>
          <div><img src={collab_icon4} alt="" /></div>
          <div><p>Beauty & Makeup</p></div>
        </div>
      </div>

      <div>
          <CollabPageCard/>
          <CollabPageCard/>
          <CollabPageCard/>

      </div>
      </div>
      <Footer/>
    </>
  )
}

export default Collab