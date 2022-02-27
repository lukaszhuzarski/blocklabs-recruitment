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
        <select name='currencies' className='with-border'>
          {boxes.map((option) => (
            <option key={option.id} value={option.id}>
              {option.name}
            </option>
          ))}
        </select>
        <span className='user with-border'>
        <img className="user-icon"src='icons/cryptocurrency.png' alt='cryptocurrency' />
          0xA2b...43156</span>
      </div>
    </header>
  );
};

export default Header;
