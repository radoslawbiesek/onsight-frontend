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

            // pagination 
            showing: 6,
            page: 1,
            prevPage: null,
            nextPage: null,
            showingStart: 1,
            showingStop: 6,
    
        }
    }

    updatePage(page) {
        let showingStart = 1 + (page - 1) * this.state.showing;
        let showingStop = Math.min(page * this.state.showing, this.state.itemsLength);
        this.setState({
            showingStart,
            showingStop
        })
    }

    componentDidMount() {
        this.updatePage(1);
    }

    handleClick = (id) => {
        this.props.addToCart(id);
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
        for (let i = 0; i < (Math.ceil(this.state.itemsLength / this.state.showing)); i++) {
            pages.push(
                <li 
                    onClick={()=>this.updatePage(i+1)}
                    className='products__page'
                >
                    0{i+1}
                </li>
            )
        };

        return (
            <div>
                <p className='products__showing'>Showing {this.state.showingStart} - {this.state.showingStop} of {this.state.itemsLength} results</p>
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