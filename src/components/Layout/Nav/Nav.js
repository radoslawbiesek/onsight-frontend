import React from 'react';
import { connect } from 'react-redux';
import './Nav.css';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../images/logo.png';
import cart from '../../../images/backpack.png';
import HamburgerButton from './HamburgerButton/HamburgerButton';

class Nav extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            menuActive: false
        }
    }

    handleHamburgerClick() {
        this.setState({
            menuActive: !this.state.menuActive
        })
    }

    render() {
        return (
            <nav className='main-nav'>
                <HamburgerButton 
                    onClick={() => this.handleHamburgerClick()}
                    active={this.state.menuActive}
                />
                <div className='logo'>
                <Link to='/'>
                    <img className='logo__img' src={logo} alt='Logo'/>
                    <span className='logo__title'>ONSIGHT</span>
                    </Link> 
                </div>
                <div className='menu__cart'>
                    <NavLink to={`/cart`} className='menu__link' activeClassName='menu__item--active'>
                        <img className='menu__backpack' src={cart} alt='Cart' />
                        <span className='items-in-cart'>{this.props.amount}</span>
                    </NavLink>
                </div>
                <ul className={this.state.menuActive ? 'menu menu--active' : 'menu'}>
                    <li className='menu__item'>
                        <NavLink exact to={`/`} className='menu__link' activeClassName='menu__link--active'>Home</NavLink>
                    </li>
                    <li className='menu__item'>
                        <NavLink className='menu__link' activeClassName='menu__link--active'>Contact</NavLink>
                    </li>
                    <li className='menu__item'>
                        <NavLink className='menu__link' activeClassName='menu__link--active'>Blog</NavLink>
                    </li>
                </ul>
            </nav>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        amount: state.totalAmount,
    }
}

export default connect(mapStateToProps)(Nav);