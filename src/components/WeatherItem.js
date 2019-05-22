import React from 'react';

import { Sparklines, SparklinesLine, SparklinesReferenceLine,SparklinesCurve   } from 'react-sparklines';

const WeatherItem = props => {
    return (
        <div className="row pl-3 pr-3 text-center" style={{height: '20vh'}}>
            <div className="col-3 text-left">
                <img src={props.icon}/>
                {props.name} <br/>
                Temperatura Atual : {props.temp} ºC

            </div>
            <div className="col-3">
                <Sparklines data={props.tempPrev} height={100}>
                    <SparklinesCurve  color="orange" />
                    <SparklinesReferenceLine type="avg"/>
                </Sparklines>
                Temperatura

            </div>
            <div className="col-3">
                <Sparklines data={props.umidadePrev} height={100}>
                    <SparklinesCurve  color="blue" />
                    <SparklinesReferenceLine type="avg" />
                </Sparklines>
                Umidade
            </div>
            <div className="col-3">
                <Sparklines data={props.pressaoPrev} height={100}>
                    <SparklinesCurve  color="green" />
                    <SparklinesReferenceLine type="avg" />
                </Sparklines>
                Pressão
            </div>
            
            
        </div>
    );
}

export default WeatherItem;