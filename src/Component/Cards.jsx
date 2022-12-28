import React from 'react'
import './Cards.css'

function Cards(props) {
    var item = props.data
  return (
    <>
    <div className="container">
        <img src={item.img} />
        <h3>{item.name}</h3>
        <button>{item.button}</button>
    </div>
    </>
  )
}

export default Cards