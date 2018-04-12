import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap'
import '../StyleSheets/Playfield.css';
import Battlefield from './BattleField.js'
import Library from './Library.js'
import Graveyard from './Graveyard.js'
import Lands from './Lands.js'
import Hand from './Hand.js'
import Phases from './Phases.js'

class Playfield extends Component {
    constructor(props) {
        super(props);
        this.state = {
            DrawCount: 1,
            deck: this.shuffleDeck(this.props.deck),
            showtopCard: false,
            hand: [],
            lands: [],
            graveYard: [],
            phase: 'beginning',
            subphase: 'untap',
            landsPlayedThisTurn: 0,
            landsPerTurn: 1,
            manaPool: [],
        }
    };

    shuffleDeck(deck) {
        var shuffledCards = [];
        var loopCount = deck.length;
        for (var j = 0; j < 3; j++)//triple shuffle
        {
            for (var i = 0; i < loopCount; i++) {
                var index = Math.floor(Math.random() * deck.length);
                var card = deck[index];
                deck.splice(index, 1);
                shuffledCards.push(card);
            }
        }
        return shuffledCards;
    }

    CardClickedFromHand(card) {
        var currentHand = this.state.hand;
        var currentLands = this.state.lands;
        var cardIndex = currentHand.findIndex(o => o.Name === card.Name);
        if (card.Type === 'Land') {
            if (this.state.landsPlayedThisTurn < this.state.landsPerTurn) {
                alert(cardIndex);
                currentHand.splice(cardIndex, 1);
                currentLands.push(card);
            }
            else
                alert('You can only play ' + this.state.landsPerTurn + ' lands per turn.');
        }
        else {//verify enough mana has been collected of the appropriate type before proceeding

        }

        this.setState({
            hand: currentHand,
            lands: currentLands
        });
    }

    ManaGenerated(mana) {

    }

    Death() {
        alert('Game Over, you lose');
    }

    DrawCards() {
        var cardsDrawn = this.state.hand;
        var currentdeck = this.state.deck;
        for (var i = 0; i < this.state.DrawCount; i++) {
            if (currentdeck.length === 0) {
                //alert('You have no cards to draw');
                this.Death();
                break;
            }
            else {
                var cardDrawn = currentdeck[0];
                cardsDrawn.push(cardDrawn);
                currentdeck.splice(0, 1);
            }
        }
        this.setState({
            deck: currentdeck,
            hand: cardsDrawn,
        });
    }

    StepCompleted() {
        var currentPhase = this.state.phase;
        var currentSubphase = this.state.subphase;
        var currentLandsPlayedThisTurn = this.state.landsPlayedThisTurn;

        switch (this.state.phase) {
            case 'beginning':
                switch (this.state.subphase) {
                    case 'untap':
                        currentSubphase = 'upkeep';
                        break;
                    case 'upkeep':
                        currentSubphase = 'draw';
                        break;
                    case 'draw':
                        currentPhase = 'main1';
                        currentSubphase = null;
                        break;
                }
                break;
            case 'main1':
                currentPhase = 'combat';
                currentSubphase = 'attack-declaration';
                break;
            case 'combat':
                switch (this.state.subphase) {
                    case 'attack-declaration':
                        currentSubphase = 'defense-declaration';
                        break;
                    case 'defense-declaration':
                        currentSubphase = 'damage-resolution';
                        break;
                    case 'damage-resolution':
                        currentPhase = 'main2';
                        currentSubphase = null;
                        break;
                }
                break;
            case 'main2':
                currentPhase = 'discard';
                break;
            case 'discard':
                currentPhase = 'ending';
                break;
            case 'ending':
                currentPhase = 'opponents-turn';
                break;
            case 'opponents-turn':
                currentPhase = 'beginning';
                currentSubphase = 'untap';
                currentLandsPlayedThisTurn = 0;
                break;
        }
        this.setState({
            phase: currentPhase,
            subphase: currentSubphase,
            landsPlayedThisTurn: currentLandsPlayedThisTurn,
        });
    }

    render() {
        //alert(this.state.lands.length);
        return (
            <div className='col-sm-12 no-padding no-margin'>
                <Grid>
                    <Row>
                        <Col xs={12} sm={12} md={12} lg={12} >
                            <Grid>
                                <Row>
                                    <Col xs={12} sm={12} md={12} lg={12}>
                                        <Phases phase={this.state.phase} subphase={this.state.subphase} stepComplete={this.StepCompleted.bind(this)} />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="library-Container" xs={3} sm={3} md={3} lg={3}>
                                        <Library cards={this.state.deck} cardsDrawn={this.DrawCards.bind(this)} showTopCard={this.state.showtopCard} />
                                        <Graveyard cards={this.state.graveYard} />
                                    </Col>
                                    <Col xs={9} sm={9} md={9} lg={9}>
                                        {this.state.lands.length > 0 && <Lands lands={this.state.lands} />}
                                    </Col>
                                </Row>
                            </Grid>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} sm={12} md={12} lg={12} >
                            <Battlefield className="col-sm-12 no-padding no-margin" />
                        </Col>
                    </Row>
                </Grid>
                <div className='footer'>
                    <Hand hand={this.state.hand} phase={this.state.phase} subphase={this.state.subphase} cardClicked={this.CardClickedFromHand.bind(this)} />
                </div>
            </div>
        );
    }
}

export default Playfield;

