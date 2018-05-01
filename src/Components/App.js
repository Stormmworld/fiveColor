import React, { Component } from 'react';
import Playfield from './Playfield.js';
//import PlayfieldLayout from './PlayfieldLayout.js';
import WaitingRoom from './WaitingRoom';

class App extends Component {
  constructor(props) {
    super(props);
    props.retrieveDeck(1);
  };

  componentDidMount() {
    const signalR = require("@aspnet/signalr");
    var playerName = window.prompt('Your name:', '');
    while (playerName === '' || !playerName)
      playerName = window.prompt('Name:', '');
    const hubConnection = new signalR.HubConnection('http://localhost:57377/signalr');

    this.setState({ hubConnection: hubConnection, playerName: playerName }, () => {
      this.state.hubConnection
        .start()
        .then(() => console.log('Connected to game server!'))
        .catch(err => console.log('Error while establishing connection :('));
      this.state.hubConnection.on('sendToAll', this.receivedMessages);
    });
  }

  receivedMessages(nick, receivedMessage) {
    const text = `${nick}: ${receivedMessage}`;
    const messages = this.state.messages.concat([text]);
    this.setState({ ChatMessages: messages });
  }

  sendMessage = (message) => {
    this.state.hubConnection
      .invoke('sendToAll', this.state.playerName, message)
      .catch(err => console.error(err));

    this.setState({ message: '' });
  };

  render() {
    return (
      <div className="container-fluid edgeless" >
        <WaitingRoom sendMessage={this.sendMessage.bind(this)} ChatMessages={this.props.ChatMessages} />
        {/* {this.props.deck && <Playfield deck={this.props.deck} />}*/}
        {/* {this.props.deck && <Playfield deck={this.props.deck} />} */}
        {/* <PlayfieldLayout className="container-fluid edgeless"/> */}
      </div>
    );
  }
}
export default App;
