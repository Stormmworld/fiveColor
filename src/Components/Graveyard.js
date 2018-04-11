import React, { Component } from 'react';
import '../StyleSheets/Graveyard.css';

class Graveyard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Cards: this.props.cards
        }
    };

    render() {
        var graveYardImage = 'https://media.istockphoto.com/vectors/blank-tombstone-vector-id472277479';
        if (this.props.cards && this.props.cards.length > 0)
            graveYardImage = this.props.cards[this.props.cards.length - 1].image;

        return (
            <img className="graveYardTopCard" src={graveYardImage} alt=''></img>
        );
    }
}

export default Graveyard;

