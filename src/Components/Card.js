import React, { Component } from 'react';
import '../StyleSheets/Card.css';

const Card = function (props) {
        return (
            <img alt='' rotate={(props.tapped ? "90" : "0")} className="card-size" src={props.card.image} onClick={() => props.cardClicked(props.card)} />
        );
}

export default Card;

