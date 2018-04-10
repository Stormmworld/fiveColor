import React from 'react';
import '../StyleSheets/Graveyard.css';

const Graveyard = (props) => {
    let graveYardImage = 'https://media.istockphoto.com/vectors/blank-tombstone-vector-id472277479';
    if (props.cards && props.cards.length > 0)
        graveYardImage = props.cards[props.cards.length - 1].image;

    return (
        <div id="graveyard-container col-sm-1 no-padding no-margin" >
            <img className="graveYardTopCard" src={graveYardImage} alt=''></img>
            <div className="no-padding  no-margin align-center">({props.cards ? props.cards.length : '0'}) Cards</div>
        </div>
    );
}
export default Graveyard;