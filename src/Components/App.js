import React, { Component } from 'react';
import Playfield from './Playfield.js';
import PlayfieldLayout from './PlayfieldLayout.js';

class App extends Component {  
  constructor(props) {
    super(props);
    props.retrieveDeck(1);
};

  render() {
    return (
      <div  className="container-fluid edgeless">
        {/* {this.props.deck && <Playfield deck={this.props.deck} />}*/}
        {/* {this.props.deck && <Playfield deck={this.props.deck} />}  */}
        <PlayfieldLayout className="container-fluid edgeless"/>
      </div>
    );
  }
}
export default App;
