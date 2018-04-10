import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap'
import '../StyleSheets/Hand.css';
import Card from './Card.js'

class Hand extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phase: this.props.phase,
            MaxHandSize: 7,
            hand: this.props.hand,
        }
    };

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
            <Grid>
                <Row className='hand-container'>
                {this.props.hand ? this.props.hand.map(card => (
                    <Card card={card} cardClicked={this.props.cardClicked}/>
                )) : null}
                </Row>
            </Grid>
        );
    }
}

export default Hand;
