import React from 'react';
import { NavLink } from 'react-router-dom';

function Footer() {
    return (
        <footer>
            <p>© 2017 Maison. All rights reserved</p>
            <ul className='menu'>
                <li>
                    <NavLink exact to={`/faq`}>FAQ</NavLink>
                </li>
                <li>
                    <NavLink to={`/contact`}>Contact</NavLink>
                </li>
                <li>
                    <NavLink to={`/blog`}>Blog</NavLink>
                </li>
            </ul>
        </footer>
    )
}

export default Footer;