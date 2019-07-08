import React from 'react';
import './Nav.css';
import { Link, NavLink } from 'react-router-dom';
import logo from '../images/logo.png';
import cart from '../images/backpack.png';

function Nav() {
    return (
        <nav className='main-nav'>
            <div>
               <Link to='/'><img className='logo' src={logo} alt='Logo'/></Link> 
            </div>
            <ul className='menu'>
                <li>
                    <NavLink exact to={`/`} className='menu__item' activeClassName='menu__item--active'>Home</NavLink>
                </li>
                <li>
                    <NavLink to={`/contact`} className='menu__item' activeClassName='menu__item--active'>Contact</NavLink>
                </li>
                <li>
                    <NavLink to={`/blog`} className='menu__item' activeClassName='menu__item--active'>Blog</NavLink>
                </li>
                <li>
                    <NavLink to={`/cart`} className='menu__item' activeClassName='menu__item--active'><img className='logo' src={cart} alt='Cart' /></NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;