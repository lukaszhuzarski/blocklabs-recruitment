import React from 'react';
import '../styles/Section.css';
import Box from './Box';
import Box2 from './Box2'


function Section() {
  return (
    <div className="section">
        <div className="heading">
            <h1>Bridge</h1>
            <p>You available tokens in the following networks</p>
        </div>
        <div className="boxes">
        <Box/>
        <Box2/>
        <Box/>
        <Box2/>
        </div>
    </div>
  )
}

export default Section;