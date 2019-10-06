import React from 'react';
import './HamburgerButton.css';

const HamburgerButton = (props) => {
    return (
        <button 
            className={props.active ? 'hamburger hamburger--active' : 'hamburger'}
            onClick={props.onClick}
        >
            <span className='hamburger__box'>
                <span className='hamburger__inner'></span>
            </span>
        </button>
    )
}

export default HamburgerButton;