import React, { Component } from 'react';
import '../StyleSheets/Phases.css';

class Phases extends Component {

    generateSubphases(){
        if(this.props.phase === 'beginning'){
            return (
                    <div className="col-sm-9">
                        <div className={"col-sm-4 Phase-Font no-padding no-margin " + (this.props.subphase === 'untap'?'active-phase':'inactive-phase')}>Untap</div>
                        <div className={"col-sm-4 Phase-Font no-padding no-margin " + (this.props.subphase === 'upkeep'?'active-phase':'inactive-phase')}>Upkeep</div>
                        <div className={"col-sm-4 Phase-Font no-padding no-margin " + (this.props.subphase === 'draw'?'active-phase':'inactive-phase')}>Draw</div>
                    </div>
                );
        }
        if(this.props.phase === 'combat'){
            return (
                <div className="col-sm-9">
                    <div className={"col-sm-4 Phase-Font no-padding no-margin " + (this.props.subphase === 'attack-declaration'?'active-phase':'inactive-phase')}>Attack Declaration</div>
                    <div className={"col-sm-4 Phase-Font no-padding no-margin " + (this.props.subphase === 'defense-declaration'?'active-phase':'inactive-phase')}>Defense Declaration</div>
                    <div className={"col-sm-4 Phase-Font no-padding no-margin " + (this.props.subphase === 'damage-resolution'?'active-phase':'inactive-phase')}>Damage Resolution</div>
                </div>
            );
        }           
        return null;
    }

    render() {
        return (
            <div className="col-sm-12">
                <div className="col-sm-12">
                    <div className={"col-sm-2 Phase-Font no-padding no-margin " + (this.props.phase === 'beginning'?'active-phase':'inactive-phase')}>Beginning</div>
                    <div className={"col-sm-2 Phase-Font no-padding no-margin " + (this.props.phase === 'main1'?'active-phase':'inactive-phase')}>Main</div>
                    <div className={"col-sm-2 Phase-Font no-padding no-margin " + (this.props.phase === 'combat'?'active-phase':'inactive-phase')}>Combat</div>
                    <div className={"col-sm-2 Phase-Font no-padding no-margin " + (this.props.phase === 'main2'?'active-phase':'inactive-phase')}>Main</div>
                    <div className={"col-sm-2 Phase-Font no-padding no-margin " + (this.props.phase === 'discard'?'active-phase':'inactive-phase')}>Discard</div>
                    <div className={"col-sm-2 Phase-Font no-padding no-margin " + (this.props.phase === 'ending'?'active-phase':'inactive-phase')}>Ending</div>
                </div>
                <div className="col-sm-12 no-padding no-margin">
                    {this.generateSubphases()}
                    <div className="col-sm-3 step-Complete-Button Phase-Font no-padding no-margin" onClick={()=>this.props.stepComplete()}>Complete</div>
                </div>
            </div>
        );
    }
}

export default Phases;

