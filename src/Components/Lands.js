import React, { Component } from 'react';
import '../StyleSheets/Lands.css';
import Card from './Card.js'

class Lands extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    };

    cardClicked(card){
        this.props.addMana(card);
    }
    
    render() {
        return (
            <div className='col-sm-8'>
                <div className='col-sm-12 maxWidth cardheight'>
                    {this.props.lands ? this.props.lands.map(card => (
                        <Card card={card} cardClicked={this.cardClicked.bind(this,card)} />
                    )) : null}
                </div>
            </div>
        );
    }
}

export default Lands;