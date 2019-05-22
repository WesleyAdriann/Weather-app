import React from 'react';

import { Sparklines, SparklinesLine, SparklinesReferenceLine  } from 'react-sparklines';

const WeatherItem = props => {
    return (
        <div className="row pl-3 pr-3" style={{height: '20vh'}}>
            <div className="col">
                Nome : {props.name} <br/>
                Temperatura Atual : {props.temp} ºC
            </div>
            <div className="col">
                <Sparklines data={props.tempPrev} width={100}>
                    <SparklinesLine color="blue" />
                    <SparklinesReferenceLine type="avg"/>
                </Sparklines>
                Temperatura

            </div>
            <div className="col">
                <Sparklines data={props.umidadePrev} width={100}>
                    <SparklinesLine color="blue" />
                    <SparklinesReferenceLine type="avg" />
                </Sparklines>
                Umidade
            </div>
            <div className="col">
                <Sparklines data={[0,5, 10, 5, 20]} width={100}>
                    <SparklinesLine color="blue" />
                    <SparklinesReferenceLine type="avg" />
                </Sparklines>
                Temperatura
            </div>
            
        </div>
    );
}

export default WeatherItem;