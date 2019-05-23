import React from 'react';

import { Sparklines, SparklinesReferenceLine,SparklinesCurve   } from 'react-sparklines';

const WeatherItem = props => {
    function add(acc, a) {return acc + a};
    const avgTemp = parseInt(props.tempPrev.reduce(add,0)/props.tempPrev.length);
    const avgUmi = parseInt(props.umidadePrev.reduce(add,0)/props.umidadePrev.length);
    const avgPre = parseInt(props.pressaoPrev.reduce(add,0)/props.pressaoPrev.length);
    return (
        <div className="row pl-3 pr-3 text-center" style={{height: '20vh'}}>
            <div className="col-3 text-left">
                
                <h6><img src={props.icon} alt={props.alt}/> {props.name}</h6>
                <h6>Temperatura Atual : {props.temp} ºC</h6>

            </div>
            
            <div className="col-3">
                <h6>Temperatura</h6>
                <Sparklines data={props.tempPrev} height={100} style={{borderRadius: '15px'}}>
                    <SparklinesCurve  color="orange" />
                    <SparklinesReferenceLine type="avg"/>
                </Sparklines>
                <h6>Media: {avgTemp}ºC</h6>
                

            </div>
            <div className="col-3">
                <h6>Umidade</h6>
                <Sparklines data={props.umidadePrev} height={100} style={{borderRadius: '15px'}}>
                    <SparklinesCurve  color="blue" />
                    <SparklinesReferenceLine type="avg" />
                </Sparklines>
                <h6>Media: {avgUmi}%</h6>
            </div>
            <div className="col-3">
                <h6>Pressão</h6>
                <Sparklines data={props.pressaoPrev} height={100} style={{borderRadius: '15px'}}>
                    <SparklinesCurve  color="green" />
                    <SparklinesReferenceLine type="avg" />
                </Sparklines>
                <h6>Media : {avgPre} atm</h6>
            </div>
            
            
        </div>
    );
}

export default WeatherItem;