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
            BattleFieldHeight: '0px',
            SidebarHeight: '0px',
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

    //Component Event Handlers
    componentWillMount() {
        this.updateHeights();
    }
    componentDidMount() {
        window.addEventListener("resize", this.updateHeights.bind(this));
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateHeights.bind(this));
    }
    componentWillReceiveProps(nextProps) {
        if (this.props.deck.length < 1)
            this.setState({ deck: this.shuffleDeck(nextProps.deck, 3) })
    }

    //Event Handlers
    battleFieldCardClicked(card) {
        alert('the card ' + card.Name + ' was clicked in the battlefield')
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
    manaSelected(colors) {
        alert(colors);
    }

    //Functions
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
    updateHeights() {
        this.setState({
            BattleFieldHeight: (window.innerHeight - 326) + 'px',
            SidebarHeight: (window.innerHeight - 183) + 'px'
        });
    }

    render() {
        return (
            <Col className="edgeless grid">
                <Col className="edgeless" xs={12} sm={12} md={12} lg={12}>
                    <Col className="container-active-player edgeless" xs={3} sm={3} md={3} lg={3}>
                        Active Player
                    </Col>
                    <Col className="edgeless" xs={9} sm={9} md={9} lg={9}><Phases phase={this.state.phase} subphase={this.state.subphase} stepComplete={this.StepCompleted.bind(this)} /></Col>

                </Col>
                <Col className="edgeless" xs={12} sm={12} md={12} lg={12}>
                    <Col className="container-stack edgeless" xs={1} sm={1} md={1} lg={1} style={{ minHeight: this.state.SidebarHeight, maxHeight: this.state.SidebarHeight }}>
                        Stack
                    </Col>
                    <Col className="edgeless" xs={10} sm={10} md={10} lg={10}>
                        <Col className="edgeless" xs={12} sm={12} md={12} lg={12}>
                            <Col className="container-library-graveyard edgeless" xs={3} sm={3} md={3} lg={3}>
                                <Col className="edgeless" xs={1} sm={1} md={1} lg={1} />
                                <Col className="edgeless" xs={4} sm={4} md={4} lg={4} >
                                    <Library cards={this.state.deck} cardsDrawn={this.DrawCards.bind(this)} showTopCard={this.state.showtopCard} />
                                </Col>
                                <Col className="edgeless" xs={2} sm={2} md={2} lg={2} />
                                <Col className="edgeless" xs={4} sm={4} md={4} lg={4} >
                                <Col className="edgeless" xs={1} sm={1} md={1} lg={1} />
                                    <Graveyard cards={this.state.graveYard} />
                                </Col>
                            </Col>
                            <Col className="container-lands edgeless" xs={9} sm={9} md={9} lg={9}>
                                <Lands lands={this.state.lands} addMana={this.ManaGenerated.bind(this)} />
                            </Col>
                        </Col>
                        <Col className="container-battlefield edgeless" style={{ minHeight: this.state.BattleFieldHeight, maxHeight: this.state.BattleFieldHeight }} xs={12} sm={12} md={12} lg={12}>
                            <Battlefield className="col-sm-12 no-padding no-margin" cards={this.state.battleFieldCards} cardClicked={this.battleFieldCardClicked} />
                        </Col>
                    </Col>
                    <Col className="container-exile edgeless" xs={1} sm={1} md={1} lg={1} style={{ minHeight: this.state.SidebarHeight, maxHeight: this.state.SidebarHeight }}>Exile</Col>
                </Col>
                <Col className="edgeless" xs={12} sm={12} md={12} lg={12}>
                    <Col className="container-manapool edgeless" xs={1} sm={1} md={1} lg={1}>
                        <ManaPool pool={this.state.manaPool} />
                    </Col>
                    <Col className="container-hand edgeless" xs={10} sm={10} md={10} lg={10}>
                        <Hand hand={this.state.hand} phase={this.state.phase} subphase={this.state.subphase} cardClicked={this.CardClickedFromHand.bind(this)} />
                    </Col>
                    <Col className="container-life edgeless" xs={1} sm={1} md={1} lg={1}>
                        Life Stats
                    </Col>
                </Col>
            </Col>
        );
    }
}

export default Playfield;

