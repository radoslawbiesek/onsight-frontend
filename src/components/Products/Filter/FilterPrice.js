import React from 'react';
import { connect } from 'react-redux';

import { setPrice, filterProducts } from '../../../store/actions/filterActions';
import { selectPage } from '../../../store/actions/pageActions';
import { sortBy } from '../../../store/actions/sortingActions';

import './Filter.css';

class FilterPrice extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            priceMin: 0,
            priceMax: Infinity,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.setPrice(
            (this.state.priceMin !== '') ? this.state.priceMin : 0,
            (this.state.priceMax !== '') ? this.state.priceMax : Infinity
        );
        this.props.filterProducts();
        this.props.selectPage(1);
        this.props.sortBy(this.props.sortingBy);
    }

    render() {
        return (
            <div className='filter--price'>
                <p className='filter__title'>{this.props.title}</p>
                <form className='filter-price__form' onSubmit={this.handleSubmit}>
                        <div>
                            <input 
                                className='filter-price__input'
                                type="number" 
                                placeholder='from' 
                                name='priceMin'
                                onChange={this.handleChange}
                            />
                            <input 
                                className='filter-price__input'
                                type="number" 
                                placeholder='to' 
                                name='priceMax'
                                onChange={this.handleChange}
                            />
                            <button className='filter-price__button'>Filter</button>
                        </div>
                    </form> 
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.itemsToDisplay,
        priceMax: state.priceMax,
        priceMin: state.priceMin,
        sortingBy: state.sortingBy
    }
}
const mapDispatchToProps = {
    selectPage,
    setPrice,
    filterProducts,
    sortBy
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterPrice);