import React from 'react'
import './Navbar.css'

function Navbar(props) {
    var item = props.data
  return (
    <>
    <div className="navbar">
        <ul>
    <h1>{item.logo}</h1>
            <li>
                <a href="">{item.home}</a>
            </li>
            <li>
                <a href="">{item.blog}</a>
            </li>
            <li>
                <a href="">{item.others}</a>
            </li>
            <li>
                <a href="">{item.about}</a>
            </li>
            <li>
                <a href="">{item.contact}</a>
            </li>
        </ul>
    </div>
    </>
  )
}

export default Navbar