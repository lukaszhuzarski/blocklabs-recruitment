import * as React from 'react';
import { Link } from 'react-router-dom';

import {IBox} from "../../pages/bridge";
import './styles.scss';


const Box: React.FC<IBox> = ({ name, content, color, icon, id }) => {
  return (
    <Link to={`/${name}`} className='box'>
      <div className='box__left'>
        <div style={{ background: color }} className='logo'>
          <img src={icon} alt={name} />
        </div>
        <div className='content'>
          <h3>{name}</h3>
          <p>{content}</p>
        </div>
      </div>
      <div className='box__right'>
        <div className='icon'>
          <img src='icons/arrow.svg' alt='arrow right' />
        </div>
      </div>
    </Link>
  );
};

export default Box;
