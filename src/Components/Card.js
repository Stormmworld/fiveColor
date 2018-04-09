import React, { Component } from 'react';
import '../StyleSheets/Card.css';

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tapped: false,
            card: this.props.card,
        }
    };

    render() {
        return (
                <img alt='' className={this.state.tapped ? "CardTapped" : "Card"} src={this.state.card.image} onClick={()=>this.props.cardClicked(this.state.card)} />
        );
    }
}

export default Card;

