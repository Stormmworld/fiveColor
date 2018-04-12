import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap'
import '../StyleSheets/Lands.css';
import Card from './Card.js'

const Lands = function(props){
    return (
        <Grid>
            <Row className='lands-container'>
                {props.lands.map(card => <Card card={card} cardClicked={() => props.addMana(card)} />)}
            </Row>
        </Grid>
    );
}
export default Lands;