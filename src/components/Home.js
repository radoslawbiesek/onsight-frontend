import React from 'react';
import Hero from './Hero';
import Filters from './Filters';
import Products from './Products';
import Categories from './Categories';

import { Container, Row, Col } from 'reactstrap';

class Home extends React.Component {

    handleClick = (id) => {
        this.props.addToCart(id);
    }

    render() {
        return (
            <Container>
                <Row>
                    <Hero />
                </Row>
                <Row>
                    <Col md='3'>
                        <Categories />
                    </Col>
                    <Col md='9'>
                        <Products />
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Home;