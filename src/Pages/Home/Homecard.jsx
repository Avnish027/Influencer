import React from 'react'
import homecard from './homecard.module.css'

function Homecard(props) {
  return (
<>
    <div className={homecard.card}>
        <img className={homecard.img1} src={props.imgsrc} alt="" />
    </div>
</>
  )
}

export default Homecard