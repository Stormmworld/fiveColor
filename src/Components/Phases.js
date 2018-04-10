import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap'
import '../StyleSheets/Phases.css';

class Phases extends Component {

    generateSubphases() {
        if (this.props.phase === 'beginning') {
            return (
                <Row>
                    <Col xs={3} sm={3} md={3} lg={3} className={"Phase-Font " + (this.props.subphase === 'untap' ? 'active-phase' : 'inactive-phase')}>Untap</Col>
                    <Col xs={3} sm={3} md={3} lg={3} className={"Phase-Font " + (this.props.subphase === 'upkeep' ? 'active-phase' : 'inactive-phase')}>Upkeep</Col>
                    <Col xs={3} sm={3} md={3} lg={3} className={"Phase-Font " + (this.props.subphase === 'draw' ? 'active-phase' : 'inactive-phase')}>Draw</Col>
                    <Col xs={3} sm={3} md={3} lg={3} className="step-Complete-Button Phase-Font no-padding no-margin" onClick={() => this.props.stepComplete()}>Complete Phase</Col>
                </Row>
            );
        }
        if (this.props.phase === 'combat') {
            return (
                <Row>
                    <Col xs={3} sm={3} md={3} lg={3} className={"Phase-Font " + (this.props.subphase === 'attack-declaration' ? 'active-phase' : 'inactive-phase')}>Attack Declaration</Col>
                    <Col xs={3} sm={3} md={3} lg={3} className={"Phase-Font " + (this.props.subphase === 'defense-declaration' ? 'active-phase' : 'inactive-phase')}>Defense Declaration</Col>
                    <Col xs={3} sm={3} md={3} lg={3} className={"Phase-Font " + (this.props.subphase === 'damage-resolution' ? 'active-phase' : 'inactive-phase')}>Damage Resolution</Col>
                    <Col xs={3} sm={3} md={3} lg={3} className="step-Complete-Button Phase-Font" onClick={() => this.props.stepComplete()}>Complete Phase</Col>
                </Row>
            );
        }
        return (
            <Row>
                <Col xs={3} sm={3} md={3} lg={3} className={"Phase-Font "}></Col>
                <Col xs={3} sm={3} md={3} lg={3} className={"Phase-Font "}></Col>
                <Col xs={3} sm={3} md={3} lg={3} className={"Phase-Font "}></Col>
                <Col xs={3} sm={3} md={3} lg={3} className="step-Complete-Button Phase-Font" onClick={() => this.props.stepComplete()}>Complete Phase</Col>
            </Row>);
    }

    render() {
        return (
            <Grid>
                <Row>
                    <Col xs={2} sm={2} md={2} lg={2} className={"Phase-Font " + (this.props.phase === 'beginning' ? 'active-phase' : 'inactive-phase')}>Beginning</Col>
                    <Col xs={2} sm={2} md={2} lg={2} className={"Phase-Font " + (this.props.phase === 'main1' ? 'active-phase' : 'inactive-phase')}>Main</Col>
                    <Col xs={2} sm={2} md={2} lg={2} className={"Phase-Font " + (this.props.phase === 'combat' ? 'active-phase' : 'inactive-phase')}>Combat</Col>
                    <Col xs={2} sm={2} md={2} lg={2} className={"Phase-Font " + (this.props.phase === 'main2' ? 'active-phase' : 'inactive-phase')}>Main</Col>
                    <Col xs={2} sm={2} md={2} lg={2} className={"Phase-Font " + (this.props.phase === 'discard' ? 'active-phase' : 'inactive-phase')}>Discard</Col>
                    <Col xs={2} sm={2} md={2} lg={2} className={"Phase-Font " + (this.props.phase === 'ending' ? 'active-phase' : 'inactive-phase')}>Ending</Col>
                </Row>
                {this.generateSubphases()}
            </Grid>
        );
    }
}

export default Phases;

