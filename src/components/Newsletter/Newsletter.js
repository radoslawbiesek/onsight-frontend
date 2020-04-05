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
        if (this.validate(this.state.email)) {
            this.setState({send: true});
        }
    }

    validate = (email) => { // function from https://flaviocopes.com/how-to-validate-email-address-javascript/
        const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
        return expression.test(String(email).toLowerCase())
    }

    render() {
        return (
            <div className='newsletter'>
                <form className='newsletter__form' onSubmit={this.handleSubmit}>
                    <label className='newsletter__label' htmlFor="email">
                        {(!this.state.send) ? 'Get discount 35% off' : 'Thanks. Your code: extra35'}
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