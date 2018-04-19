import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap'
import * as phasefunctions from '../Scripts/Phases.js'
import '../StyleSheets/Hand.css';
import Card from './Card.js'

class Hand extends Component {
    constructor(props) {
        super(props);
        this.state = {
            MaxHandSize: 7,
            hand: this.props.hand,
        }
    };

    componentWillReceiveProps(nextprops){
        var activeHand = phasefunctions.ActiveCards(nextprops.hand,nextprops.phase,nextprops.stackActive);
        this.state = {
            phase: nextprops.phase,
            MaxHandSize: 7,
            hand: activeHand,
        }
    }    
    componentWillUpdate() {
        var currentHand = this.state.hand;
        if (this.state.phase === 'discard') {
            if (currentHand.length > this.state.MaxHandSize && this.state.MaxHandSize > -1) {
                alert('max handsize exceeded, need to discard ' + (currentHand.length - this.state.MaxHandSize) + ' cards.');
            }
        }
        currentHand.forEach((card) => {
            card.enabled = this.state.phase === 'main1' || this.state.phase === 'main2' || card.type === 'interrupt' || card.type === 'instant';
        });
    }

    render() {
        return (
            <Col className='hand-container' xs={12} sm={12} md={12} lg={12}>
                {this.props.hand ? this.props.hand.map(card => (
                    <Card card={card} cardClicked={this.props.cardClicked} />
                )) : null}
            </Col>
        );
    }
}

export default Hand;
