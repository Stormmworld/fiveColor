import React, { Component } from 'react';
import Playfield from './Playfield.js';

class App extends Component {  
  constructor(props) {
    super(props);
    props.retrieveDeck(1);
};

  render() {
    return (
      <div>
        {/* {this.props.deck && <Playfield deck={this.props.deck} />}*/}
        {this.props.deck && <Playfield deck={this.props.deck} />} 
      </div>
    );
  }
}
export default App;
