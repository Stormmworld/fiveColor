import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap'
import Modal from './Modal.js'
import '../StyleSheets/Playfield.css';
import Battlefield from './BattleField.js'
import Library from './Library.js'
import Graveyard from './Graveyard.js'
import Lands from './Lands.js'
import Hand from './Hand.js'
import Phases from './Phases.js'
import ManaPool from './ManaPool.js'

class Playfield extends Component {
    constructor(props) {
        super(props);
        this.state = {
            DrawCount: 1,
            deck: this.shuffleDeck(this.props.deck, 3),
            showtopCard: false,
            hand: [],
            lands: [],
            graveYard: [],
            phase: 'beginning',
            subphase: 'untap',
            landsPlayedThisTurn: 0,
            landsPerTurn: 1,
            manaPool: [],
            battleFieldCards: [],
        }
    };

    componentWillReceiveProps(nextProps) {
        if (this.props.deck.length < 1)
            this.setState({ deck: this.shuffleDeck(nextProps.deck, 3) })
    }

    battleFieldCardClicked(card) {
        alert('the card ' + card.Name + ' was clicked in the battlefield')
    }

    shuffleDeck(deck, shuffleCount) {
        var shuffledCards = [];
        var loopCount = deck.length;
        for (var i = 0; i < loopCount; i++) {
            var index = Math.floor(Math.random() * deck.length);
            var card = deck[index];
            deck.splice(index, 1);
            shuffledCards.push(card);
        }
        return shuffleCount === 0 ? shuffledCards : this.shuffleDeck(shuffledCards, shuffleCount - 1);
    }

    CardClickedFromHand(card) {
        var currentHand = this.state.hand;
        var currentLands = this.state.lands;
        var currentBattlefield = this.state.battleFieldCards;
        var cardIndex = currentHand.findIndex(o => o.Name === card.Name);
        if (card.Types.find(o => o === 'Land')) {
            if (this.state.landsPlayedThisTurn < this.state.landsPerTurn) {
                //alert(cardIndex);
                currentHand.splice(cardIndex, 1);
                currentLands.push(card);
            }
            else
                alert('You can only play ' + this.state.landsPerTurn + ' lands per turn.');
        }
        else if (this.manaPoolSupportsCastingCost(card.ManaCost)) {//verify enough mana has been collected of the appropriate type before proceeding
            currentHand.splice(cardIndex, 1);
            currentBattlefield.push(card);
        }

        this.setState({
            hand: currentHand,
            lands: currentLands,
            battleFieldCards: currentBattlefield
        });
    }
    manaPoolSupportsCastingCost(ManaCost) {
        for (var i = 0; i < ManaCost.length; i++) {
            if (ManaCost[i] === "0") { return true; }
            var requiredMana = ManaCost[i].split(',');
            var manapool = this.state.manaPool;
            var success = true;
            for (var j = requiredMana.length; j > -1; j--) {
                if (manapool.length === 0)
                    success = false;
                var indexOfMana = manapool.findIndex(o => o.color === requiredMana[j]);
                if (indexOfMana) {
                    manapool.splice(indexOfMana, 1);
                }
                else
                    success = false;
            }
            if (success)
                return true;
        }
        return false;
    }


    ManaGenerated(manaProducer) {
        var currentManaPool = this.state.manaPool;
        if (manaProducer.ManaProduction.length === 1) {
            currentManaPool.push(manaProducer.ManaProduction[0]);
        }
        else if (manaProducer.ManaProduction.length > 1) {
            alert('learn about modals and launch mana selection')
        }
        this.setState({ manaPool: currentManaPool });
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

    manaSelected(colors) {
        alert(colors);
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
            <div className='col-sm-12 no-padding no-margin fill-area'>
                <Grid className="fill-area">
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
                                    <Col className='no-padding no-margin' xs={9} sm={9} md={9} lg={9}>
                                        <Col className='lands-container no-padding no-margin' xs={12} sm={12} md={12} lg={12}>
                                            <Lands lands={this.state.lands} addMana={this.ManaGenerated.bind(this)} />
                                        </Col>
                                        <Col className='no-padding no-margin' xs={12} sm={12} md={12} lg={12}>
                                            <ManaPool pool={this.state.manaPool} />
                                        </Col>
                                    </Col>
                                </Row>
                            </Grid>
                        </Col>
                    </Row>
                    <Row className="fill-area">
                        <Col className='battlefield-cointainer' xs={12} sm={12} md={12} lg={12} >
                            <Battlefield className="col-sm-12 no-padding no-margin" cards={this.state.battleFieldCards} cardClicked={this.battleFieldCardClicked} />
                        </Col>
                    </Row>
                </Grid>
                <div className='footer'>
                    <Hand hand={this.state.hand} phase={this.state.phase} subphase={this.state.subphase} cardClicked={this.CardClickedFromHand.bind(this)} />
                </div>
                <Modal modalVisible={this.state.manaSelectionModalVisible}>
                    <Col>Modal Content</Col>
                </Modal>
            </div>
        );
    }
}

export default Playfield;

