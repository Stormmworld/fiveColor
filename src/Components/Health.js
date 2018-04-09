import React, { Component } from 'react';
import '../StyleSheets/Health.css';

class Health extends Component {
    constructor(props) {
        super(props);
        this.state = {       
            Hitpoints: this.props.hitpoints,     
        }
    };    

    render() {
        return (
            <div className="align-center">
                {this.state.Hitpoints}
            </div>
        );
    }
}

export default Health;

