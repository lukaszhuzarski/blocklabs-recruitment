import React from 'react';
import '../styles/Box.css';
import ethereum from '../assets/etherum.png'

function Box() {
  return (
    <div className="box">
        <img src={ethereum}></img>
        <h3>Etherum</h3>
        <p>The Most Stable And Widespread</p>
        <button></button>
    </div>
  )
}

export default Box