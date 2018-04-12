import React, { Component } from 'react';
import Playfield from './Playfield.js';

class App extends Component {
  render() {
    return (
      <div>
        {this.props.deck && <Playfield deck={this.props.deck} />}
        {/* {this.props.deck && <Playfield deck={this.props.retrieveDeck(1)} />} */}
      </div>
    );
  }
}
export default App;
