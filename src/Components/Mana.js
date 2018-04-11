import React, { Component } from 'react';
import '../StyleSheets/Mana.css';

class Mana extends Component {

    getManaImage() {
        switch (this.props.color) {
            case 'W':
                return 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zd…NS4zNjMgNy42OTUgNS4zNjMgMTIuNDl6JyBm aWxsPScjMEQwRjBGJy8+PC9nPjwvc3ZnPgo=';
            case 'U':
                return 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdC b3g9JzAgMCAxMDAgMTAwJz48ZyBmaWxsPSdub25lJz48Y2lyY2xlIGZpbGw9 JyNDMUQ3RTknIGN4PSc1MCcgY3k9JzUwJyByPSc1MCcvPjxwYXRoIGQ9J002 Ny40ODggODMuNzE5Yy00Ljc4NyA0Ljg3MS0xMC42ODQgNy4zMDctMTcuNjg4 IDcuMzA3LTcuODYxIDAtMTQuMDk4LTIuNjktMTguNzExLTguMDczLTQuMzU5 LTUuMTI3LTYuNTM3LTExLjY2Mi02LjUzNy0xOS42MDYgMC04LjU0MyAzLjcx Ny0xOC4yODYgMTEuMTUtMjkuMjI0IDYuMDY0LTguOTY5IDEzLjE5OS0xNi44 MyAyMS40MDItMjMuNTgtMS4xOTcgNS40NjktMS43OTMgOS4zNTUtMS43OTMg MTEuNjYyIDAgNS4yOTkgMS42NjQgMTAuNDY3IDQuOTk2IDE1LjUwOCA0LjEw MiA1Ljk4IDcuMjE5IDEwLjQyNiA5LjM1NyAxMy4zMjggMy4zMzIgNS4wNDMg NC45OTggOS45NTUgNC45OTggMTQuNzM3LjAwMiA3LjA5My0yLjM5MSAxMy4w NzQtNy4xNzQgMTcuOTQxem0tLjEyOS0yNy4zNjJjLTEuMjgxLTIuODYxLTIu Nzc3LTQuNzYyLTQuNDg2LTUuNzAzLjI1Ni41MTQuMzg1IDEuMjQuMzg1IDIu MTggMCAxLjc5NS0uNTEyIDQuMzU3LTEuNTM5IDcuNjg5bC0xLjY2NCA1LjEy N2MwIDIuOTkgMS40OTIgNC40ODYgNC40ODQgNC40ODYgMy4xNiAwIDQuNzQy LTIuMDk1IDQuNzQyLTYuMjgxIDAtMi4xMzQtLjY0LTQuNjMyLTEuOTIyLTcu NDk4eicgZmlsbD0nIzBEMEYwRicvPjwvZz48L3N2Zz4K';
            case 'B':
                return 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zd…OC4xNTItMi4xODYgOC4xNTItNi4zMTF6JyBm aWxsPScjMEQwRjBGJy8+PC9nPjwvc3ZnPgo= ';
            case 'R':
                return 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zd…MDAxIDQuMiAxLjQ4 NyA0LjIgNC40NTZ6JyBmaWxsPScjMEQwRjBGJy8+PC9nPjwvc3ZnPgo= ';
            case 'G':
                return 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zd…LjgyOS0zLjQxNCAxMi4yMzkt NC4yNDh6JyBmaWxsPScjMEQwRjBGJy8+PC9nPjwvc3ZnPgo= ';
            default:
                return 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zd…NDUgNS4yOTkgNS4yMTggNy4xNzUgNy42ODR6JyBmaWxsPScjMDAwJy8+PC9n Pjwvc3ZnPgo= ';
        }
    }

    render() {
        return (
            <img alt={this.props.Color} src={this.getManaImage()} />
        );
    }
}

export default Mana;