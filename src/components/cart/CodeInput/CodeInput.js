import React from 'react';

import './CodeInput.css';

class CodeInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      code: '',
      added: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ code: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ added: true });
    this.props.useDiscountCode(this.state.code);
  }

  render() {
    let alert;
    if (!this.props.discount && this.state.added) {
      alert = (
        <span className='code-input__alert code-input__alert--wrong'>
          Code is not valid!
        </span>
      );
    } else if (this.props.discount) {
      alert = (
        <span className='code-input__alert code-input__alert--correct'>
          You received {this.props.discount * 100}% discount.
        </span>
      );
    }

    return (
      <div className='code-input'>
        <form className='code-input__form' onSubmit={this.handleSubmit}>
          <label className='code-input__label' htmlFor='code'>
            Add a discount code:
          </label>
          <div className='code-input__group'>
            <input
              className='code-input__input'
              type='text'
              id='code'
              value={this.state.code}
              onChange={this.handleChange}
            />
            <button className='code-input__button'>Add</button>
          </div>
          {alert}
        </form>
      </div>
    );
  }
}

export default CodeInput;
