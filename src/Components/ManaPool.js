import React from 'react';
import { Col } from 'react-bootstrap'
import '../StyleSheets/ManaPool.css';
import Mana from './Mana.js'

const ManaPool = function(props){
    return (
            <Col xs={12} sm={12} md={12} lg={12}>
                {props.pool.map(mana => <Mana color={mana.color} />)}
            </Col>
    );
}
export default ManaPool;