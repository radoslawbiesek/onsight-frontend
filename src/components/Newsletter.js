import React from 'react';
import './Newsletter.css';

class Newsletter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleChange(e) {
        this.setState({ email: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        alert('send');
    }

    render() {
        return (
            <div className='newsletter'>
                <form className='newsletter' onSubmit={this.handleSubmit}>
                    <label className='newsletter__label' for="email">
                        Get discount 35% off
                    </label>
                    <input 
                        className='newsletter__input' 
                        type="email" 
                        id="email" 
                        placeholder='Enter your email...' 
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                    <button className='newsletter__button'>
                        Send
                    </button> 
                </form>  
            </div>
        );
    }
}

export default Newsletter;