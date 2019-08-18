import React from 'react';
import { connect } from 'react-redux';
import './Nav.css';
import { Link, NavLink } from 'react-router-dom';
import logo from '../images/logo.png';
import cart from '../images/backpack.png';

function Nav(props) {
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
                    <NavLink className='menu__item' activeClassName='menu__item--active'>Contact</NavLink>
                </li>
                <li>
                    <NavLink className='menu__item' activeClassName='menu__item--active'>Blog</NavLink>
                </li>
                <li>
                    <NavLink to={`/cart`} className='menu__item' activeClassName='menu__item--active'>
                        <img className='menu__backpack' src={cart} alt='Cart' />
                        <span className='items-in-cart'>{props.amount}</span>
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

const mapStateToProps = (state) => {
    return {
        amount: state.totalAmount,
    }
}

export default connect(mapStateToProps)(Nav);