import React from 'react';
import { connect } from 'react-redux';
import Product from './Product';
import { addToCart } from '../actions/cartActions';
import './Product.css';

class Products extends React.Component {

    constructor(props) {
        super(props);
        console.log(this.props.items);
        this.state = {
            items: this.props.items,
            itemsLength: this.props.items.length,

            // sorting
            sortBy: 'A-Z',

            // pagination 
            showing: 6,
            page: 1,
            pages: Math.ceil(this.props.items.length / 6),
            prevPage: null,
            nextPage: null,
            showingStart: 1,
            showingStop: 6,
    
        }
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

    componentDidMount() {
        this.updatePage(1);
    }

    handleClick = (id) => {
        this.props.addToCart(id);
    }

    handleChange = (event) => {
        this.setState({sortBy: event.target.value});
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
            pages.push(
                <li 
                    key={`page${i}`}
                    onClick={()=>this.updatePage(i+1)}
                    className='products__page'
                >
                    0{i+1}
                </li>
            )
        };

        return (
            <div>
                <div className='products__top-nav'>
                    <form className='products__sort-by'>
                        <label>
                            Sort by:
                            <select onChange={this.handleChange}>
                                <option selected value="A-Z">A-Z</option>
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
                <ul className='products__pages'>
                    {pages}
                    <li 
                        onClick={()=>this.updatePage(this.state.page+1)}
                        className='products__page'
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
        items: state.items
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id) => {dispatch(addToCart(id))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);