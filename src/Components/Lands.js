import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap'
import '../StyleSheets/Lands.css';
import Card from './Card.js'

class Lands extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    };

    cardClicked(card) {
        this.props.addMana(card);
    }

    render() {
        return (
            <Col className='lands-container'>
                {this.props.lands ? this.props.lands.map(card => (
                    <Card card={card} cardClicked={this.cardClicked.bind(this, card)} />
                )) : null}
            </Col>
        );
    }
}

export default Lands;