import React, { Component } from 'react';
import Playfield from './Playfield.js';

class App extends Component {
  render() {
    var initialDeck = this.props.RetrieveDeck(1);
    return (
      <div>
        {this.props.deck && <Playfield deck={initialDeck} />}
      </div>
    );
  }
}
export default App;
