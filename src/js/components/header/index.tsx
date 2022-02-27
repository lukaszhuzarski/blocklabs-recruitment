import * as React from 'react';
import {NavLink} from 'react-router-dom';
import {boxes} from "../../pages/bridge";

import './styles.scss';


const Header = () => {
  return (
    <header className='header'>
      <div className='header__left'>
          <span className='logo'>B.</span>
        <nav>
          <NavLink to='/bridge'>Bridge</NavLink>
          <NavLink to='/minting'>Minting</NavLink>
        </nav>
      </div>
      <div className='header__right'>
      <div className='with-border'>
      <img src="icons/ethereum-1.svg" alt="ethereum" />
        <select name='currencies' className='with-border'>
          {boxes.map((option) => (
            <option key={option.id} value={option.id}>
              {option.name}
            </option>
          ))}
        </select>
        </div>
        <div className='user with-border'>
          <img src="icons/cryptocurrency.png" alt="asd" />
          <span> 0xA2b...43156</span>
        </div>
        </div>
    </header>
  );
};

export default Header;
