import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap'
import '../StyleSheets/Lands.css';
import Card from './Card.js'

const Lands = (props) => {
    return (
        <Grid>
            <Row className='lands-container'>
                {this.props.lands.map(card => <Card card={card} cardClicked={() => props.addMana(card)} />)}
            </Row>
        </Grid>
    );
}
export default Lands;