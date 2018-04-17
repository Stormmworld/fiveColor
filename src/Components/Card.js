import React, { Component } from 'react';
import '../StyleSheets/Card.css';

const Card = function (props) {
        return (
            <img alt='' className={(props.card.tapped ? "CardTapped" : "Card") +  " card-size"} src={props.card.image} onClick={() => props.cardClicked(props.card)} />
        );
}

export default Card;

