import React from 'react'
import search from './search_home.module.css'
import search_icon from '../../Assets/home_assets/Search1.png'

function Search_Home() {
  return (
    <>
        <div className={search.explore}>
          Explore Influencer Impact
          <div className={search.search_icon_wrapper}>
            <img src={search_icon} alt="" />
            <p>SEARCH</p>
          </div>
        </div>
    </>
  )
}

export default Search_Home