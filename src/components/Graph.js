import React from 'react';

import { Sparklines, SparklinesReferenceLine, SparklinesCurve } from 'react-sparklines';

const Graph = props => {
    return (
        <div className="col-3">
            <h6>{props.label}</h6>
            <Sparklines data={props.data} height={100} style={{borderRadius: '15px'}}>
                <SparklinesCurve  color={props.color} />
                <SparklinesReferenceLine type="avg"/>
            </Sparklines>
            <h6>Média : {props.avg}</h6>
        </div>
    )
}

export default Graph;