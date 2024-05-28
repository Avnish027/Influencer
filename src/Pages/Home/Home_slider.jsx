import React from 'react'
import homeslider from './homeslider.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import frameimg from '../../Assets/home_assets/FrameImg.png'
import star from '../../Assets/home_assets/star.fill.png'


function Home_slider() {
  return (
    <> 
        <div>
        <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      {/* <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      ... */}
        {data.map((id)=>{
            return <SwiperSlide>
                <>
                <div className={homeslider.wrapper}>
          <div className={homeslider.img_frame}>
             <div className={homeslider.outer}>
             </div>
             <div className={homeslider.inner}>
               <img  className={homeslider.img_src}src={id.picture} alt="" />
             </div>
         </div>
         <div className={homeslider.text_content}>
           <div className={homeslider.review}>
             <p>
             {id.review}
             </p>
           </div>
           <div className={homeslider.name}>
             <p>{id.name}</p>
             <img src={star} alt="" />
           </div>
 
         </div>
       
       </div>
                </>
            </SwiperSlide>
        })}

    </Swiper>
        </div>
    </>
  )
}

const data=[
    {
      name:'Rohan Tiwari',
      review: 'I can confidently say that the Influencer Impact Course has been a game-changer for my career. It provided me with invaluable knowledge, practical strategies, and the confidence to elevate my influence to new heights.',
      rating:'',
      picture: frameimg,
  
    },
    {
      name:'Rohan Tiwari',
      review: 'I can confidently say that the Influencer Impact Course has been a game-changer for my career. It provided me with invaluable knowledge, practical strategies, and the confidence to elevate my influence to new heights.',
      rating:'',
      picture: frameimg,
      
    },{
      name:'Rohan Tiwari',
      review: 'I can confidently say that the Influencer Impact Course has been a game-changer for my career. It provided me with invaluable knowledge, practical strategies, and the confidence to elevate my influence to new heights.',
      rating:'',
      picture: frameimg,
      
    },
  ]



export default Home_slider