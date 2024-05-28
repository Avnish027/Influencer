import React from 'react'
import slider1 from './slider1.module.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


import slider_img1 from '../../Assets/login_home/Slider 1/Slider1img.png'
import slider_img2 from '../../Assets/login_home/Slider 1/Slider2img.png'

import slider2_img1 from '../../Assets/login_home/Slider 2/Flipkart card.png'
import slider2_img2 from '../../Assets/login_home/Slider 2/Myntra card.png'
// import slider2_img3 from '../../Assets/login_home/Slider 2/Slider1img'
// import slider2_img4 from '../../Assets/login_home/Slider 2/Slider1img'

import slider3_img1 from '../../Assets/login_home/Slider 3/Slider3img.png'
import slider3_img2 from '../../Assets/login_home/Slider 3/Slider32img.png'


function Slider1() {
  return (
    <> 
    
    <div>
        <div>
            <p className={slider1.title}>New Campaigns</p>
        </div>
        <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={2}
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
        {data1.map((id)=>{
            return <SwiperSlide>
                <>
                <div className={slider1.sli_1_wrapper} >
              <img className={slider1.sli_1_img} src={id.picture} alt="" />
            </div>
                </>
            </SwiperSlide>
        })}

    </Swiper>
        </div>


        <div className={slider1.slider2_wrapper}>
          <div className={slider1.slider2_txt}>
            <p>Exclusive Partnerships</p>
          </div>
          <div>
        <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={2}
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
        {data2.map((id)=>{
            return <SwiperSlide>
                <>
                <div className={slider1.card}>
                <div className={slider1.cardimg}><img src={id.picture} alt="" /></div>
                <div className={slider1.txt}>
                    <p>{id.price}
                    </p>
                  </div>

            </div>
          
                </>
            </SwiperSlide>
        })}

    </Swiper>
        </div>
  
        </div>


        <div className={slider1.sli1}>
        <div>
        <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={2}
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
        {data3.map((id)=>{
            return <SwiperSlide>
                <>
                <div className={slider1.sli_1_wrapper} >
              <img className={slider1.sli_1_img} src={id.picture} alt="" />
            </div>
                </>
            </SwiperSlide>
        })}

    </Swiper>
        </div>
  
        </div>

        

        
</>
  )
}

export default Slider1

const data1=[
    {
      picture: slider_img1,
    },
    {
      picture: slider_img2,
    },{
      picture: slider_img1,
    },{
      picture: slider_img2,
    },{
      picture: slider_img1,
    }
  ]


  const data2=[
    {
      price:'Worth Rs. 50,000',
      picture: slider2_img1,
    },
    {
      price:'Worth Rs. 30,000',
      picture: slider2_img2,
      
    },{
      price:'Worth Rs. 40,000',
      picture: slider2_img1,
      
    },
    {
      price:'Worth Rs. 60,000',
      picture: slider2_img2,
      
    }
  ]

  
  const data3=[
    {
      
      picture: slider3_img1,
    },
    {
      
      picture: slider3_img2,
      
    },
    {
      
      picture: slider3_img1,
      
    },  {
      
      picture: slider3_img2,
    }
  ]