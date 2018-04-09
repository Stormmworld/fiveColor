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
            <div id="graveyard-container col-sm-1 no-padding no-margin" >
                <img className="graveYardTopCard" src={graveYardImage} alt=''></img>
                <div className="no-padding  no-margin align-center">({this.props.cards ? this.props.cards.length : '0'}) Cards</div>
            </div>
        );
    }
}

export default Graveyard;

