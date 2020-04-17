import React, { useState } from 'react';

import { useCart } from '../../../hooks';

import './Nav.css';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../images/logo.png';
import cart from '../../../images/backpack.png';
import HamburgerButton from './HamburgerButton/HamburgerButton';

const Nav = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  
  const { totalAmount } = useCart();

  const handleHamburgerClick = () => {
    setIsMenuActive(!isMenuActive);
  };

  return (
    <nav className='main-nav'>
      <HamburgerButton
        onClick={() => handleHamburgerClick()}
        active={isMenuActive}
      />
      <div className='logo'>
        <Link to='/'>
          <img className='logo__img' src={logo} alt='Logo' />
          <span className='logo__title'>ONSIGHT</span>
        </Link>
      </div>
      <div className='menu__cart'>
        <NavLink
          to={`/cart`}
          className='menu__link'
          activeClassName='menu__item--active'
        >
          <img className='menu__backpack' src={cart} alt='Cart' />
          <span className='items-in-cart'>{totalAmount}</span>
        </NavLink>
      </div>
      <ul className={isMenuActive ? 'menu menu--active' : 'menu'}>
        <li className='menu__item'>
          <NavLink
            exact
            to={`/`}
            className='menu__link'
            activeClassName='menu__link--active'
          >
            Home
          </NavLink>
        </li>
        <li className='menu__item'>
          <NavLink className='menu__link' activeClassName='menu__link--active'>
            Contact
          </NavLink>
        </li>
        <li className='menu__item'>
          <NavLink className='menu__link' activeClassName='menu__link--active'>
            Blog
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
