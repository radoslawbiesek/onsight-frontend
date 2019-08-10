import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';

function Footer() {
    return (
        <footer className='footer'>
            <p className='footer__text'>
                <a className='footer__link' rel="noopener noreferrer" href='https://github.com/radoslawbiesek' target='_blank'>© 2019 OnSight. All rights reserved.</a>
            </p>
            <ul className='footer__menu'>
                <li className='footer__item'>
                    <NavLink className='footer__link' exact to={`/`}>Shop</NavLink>
                </li>
                <li className='footer__item'>
                    <NavLink className='footer__link' exact to={`/faq`}>FAQ</NavLink>
                </li>
                <li className='footer__item'>
                    <NavLink className='footer__link' to={`/contact`}>Contact</NavLink>
                </li>
                <li className='footer__item'>
                    <NavLink className='footer__link' to={`/blog`}>Blog</NavLink>
                </li>
            </ul>
        </footer>
    )
}

export default Footer;