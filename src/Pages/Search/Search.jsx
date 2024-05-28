import React from 'react'
import search from '../Search/search.module.css'
import rectangle from '../../Assets/search/Rectangle.png'
import search_icon from '../../Assets/search/Group.png'
import boat from '../../Assets/search/boat.png'
import fire from '../../Assets/search/fire.png'

function Search() {
  return (
    <>
      <div className={search.one}>
        <div><img className={search.one_img} src={rectangle} alt="" /></div>
        <div className={search.search_area}>
          <div className={search.search_icon_img}></div>
          <input className={search.input_area} type="text" placeholder='Search for your favourite brand' />
        </div>
      </div> 

      
      <div className={search.card_outer}>
      <div className={search.title}><img className={search.title_icon} src={fire} alt="" /><h3>Popular Brands</h3></div>
        <div className={search.card_wrapper}>
          <div className={search.card}><img className={search.img_icon} src={boat} alt="" /></div>
          <div className={search.card}><img className={search.img_icon} src={boat} alt="" /></div>
          <div className={search.card}><img className={search.img_icon} src={boat} alt="" /></div>
          <div className={search.card}><img className={search.img_icon} src={boat} alt="" /></div>

        </div>
      </div>   
    </>
  )
}

export default Search