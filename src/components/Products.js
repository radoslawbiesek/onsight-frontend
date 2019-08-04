import React from 'react';
import { connect } from 'react-redux';
import Product from './Product';
import { addToCart } from '../actions/cartActions';
import './Product.css';

class Products extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            // products list
            items: this.props.items.sort((a, b) => a.name.localeCompare(b.name)),
            itemsLength: this.props.itemsLength,

            // sorting
            sortedBy: 'A-Z',

            // pagination 
            showing: 6,
            page: 1,
            pages: Math.ceil(this.props.itemsLength / 6),
            showingStart: 1,
            showingStop: 6,
        }
    }

    handleClick = (id) => {
        this.props.addToCart(id);
    }

    handleChange = (event) => {
        this.setState({sortedBy: event.target.value});
        this.sortBy(event.target.value);
    }

    updatePage(page) {
        if (page > this.state.pages) return;
        let showingStart = 1 + (page - 1) * this.state.showing;
        let showingStop = Math.min(page * this.state.showing, this.state.itemsLength);
        this.setState({
            showingStart,
            showingStop,
            page
        })
    }

    sortBy(sortedBy) {
        let items;    
        switch (sortedBy) {
            case 'Lowest Price':
                items = this.state.items.sort((a, b) => a.price - b.price);
                break;
            case 'Highest Price':
                items = this.state.items.sort((a, b) => b.price - a.price);
                break;
            case 'Z-A':
                items = this.state.items.sort((a, b) => b.name.localeCompare(a.name));
                break;
            default: //A-Z
                items = this.state.items.sort((a, b) => a.name.localeCompare(b.name));
                break;
        }
        this.setState({ items });
    }

    render() {
        
        let itemsList = this.props.items.map(item => {
            return (
                <Product
                    key = {item.id}
                    img = {item.img}
                    name = {item.name}
                    desc = {item.desc}
                    price = {item.price}
                    onClick = {()=>{this.handleClick(item.id)}}
                />
            )
        });

        let pages = [];
        for (let i = 0; i < this.state.pages; i++) {
            let pageNumber = i+1;
            pages.push(
                <li 
                    key={`page${pageNumber}`}
                    onClick={()=>this.updatePage(pageNumber)}
                    className={(this.state.page === pageNumber) ? 'products__page-link products__page-link--active' : 'products__page-link'}
                >
                    {`0${pageNumber}`}
                </li>
            )
        };

        return (
            <div>
                <div className='products__top-nav'>
                    <form className='products__sort-by'>
                        <label>
                            Sort by:
                            <select defaultValue="A-Z" onChange={this.handleChange}>
                                <option value="A-Z">A-Z</option>
                                <option value="Z-A">Z-A</option>
                                <option value="Lowest Price">Lowest Price</option>
                                <option value="Highest Price">Highest Price</option>
                            </select>
                        </label>
                    </form>
                    <p className='products__showing'>Showing {this.state.showingStart} - {this.state.showingStop} of {this.state.itemsLength} results</p>
                </div>
                <div className='products-grid'>
                    {itemsList.slice(this.state.showingStart-1,this.state.showingStop)}
                </div>
                <ul className='products__pages-list'>
                    {pages}
                    <li 
                        onClick={()=>this.updatePage(this.state.page+1)}
                        className='products__page-link'
                    >
                        &#8594;
                    </li>
                </ul>
            </div>    
        )
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.itemsFiltered,
        itemsLength: state.itemsFilteredLength
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id) => {dispatch(addToCart(id))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);