import React from 'react';
import '../styles/Box.css';
import tezos from '../assets/tezos.png'

function Box() {
  return (
    <div className="box">
        <img src={tezos}></img>
        <h3>Tezos</h3>
        <h6>The Most Stable And Widespread</h6>
        <button></button>
    </div>
  )
}

export default Box