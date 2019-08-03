import React from 'react';
import Filter from './Filter';
import FilterColor from './FilterColor';
import { connect } from 'react-redux';
import { addFilter } from '../actions/filterActions';

class Filters extends React.Component {

    handleClick = (filter) => {
        this.props.addFilter(filter);
    }

    render() {
        return (
            <div>
                <Filter 
                    title="Categories"
                    type="category"
                    items={this.props.items}
                    onClick={()=>this.handleClick}
                />
                <h1 className="filters__title">Filter by</h1>
                <FilterColor 
                    title="Color"
                    type="color"
                    items={this.props.items}

                />
                <Filter 
                    title="Size"
                    type="size"
                    items={this.props.items}
                    onClick={()=>this.handleClick}

                />
                <Filter 
                    title="Brands"
                    type="brand"
                    items={this.props.items}
                    onClick={()=>this.handleClick}

                />
                <div>
                    <p className='filters__title'>Popular Tags</p>
                    <p className='filters__item'>Climbing, Bouldering, Mountain, Equipment, On Sight</p>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.itemsAll
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addFilter: (type) => {dispatch(addFilter(type))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filters);