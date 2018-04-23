import React, { Component } from 'react';
import Playfield from './Playfield.js';
//import PlayfieldLayout from './PlayfieldLayout.js';

class App extends Component {  
  constructor(props) {
    super(props);
    props.retrieveDeck(1);

      this.state = {
        nick: '',
        message: '',
        messages: [],
        hubConnection: null,
      };
}

componentDidMount = () => {
  const nick = window.prompt('Your name:', 'John');
  const signalR = require("@aspnet/signalr");

  const hubConnection = new new signalR.HubConnection('/chat');;

  this.setState({ hubConnection, nick }, () => {
    this.state.hubConnection
      .start()
      .then(() => console.log('Connection started!'))
      .catch(err => console.log('Error while establishing connection :('));

    this.state.hubConnection.on('sendToAll', (nick, receivedMessage) => {
      const text = `${nick}: ${receivedMessage}`;
      const messages = this.state.messages.concat([text]);
      this.setState({ messages });
    });
  });
}

  render() {
    return (
      <div  className="container-fluid edgeless">
        {/* {this.props.deck && <Playfield deck={this.props.deck} />}*/}
        {this.props.deck && <Playfield deck={this.props.deck} />} 
        {/* <PlayfieldLayout className="container-fluid edgeless"/> */}
      </div>
    );
  }
}
export default App;
