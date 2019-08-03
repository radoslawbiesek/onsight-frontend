import React from 'react';
import './Newsletter.css';

class Newsletter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            send: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleChange(e) {
        this.setState({ email: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({send: true});
    }

    render() {
        return (
            <div className='newsletter'>
                <form className='newsletter__form' onSubmit={this.handleSubmit}>
                    <label className='newsletter__label' htmlFor="email">
                        {(!this.state.send) ? 'Get discount 35% off' : 'Thank you for subscribing'}
                    </label>
                    <div className='newsletter__group'>
                        <input 
                            className='newsletter__input' 
                            type="email" 
                            id="email" 
                            placeholder='Enter your email...' 
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                        <button className='newsletter__button'>Send</button>
                    </div>
                </form>  
            </div>
        );
    }
}

export default Newsletter;