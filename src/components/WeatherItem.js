import React from 'react';

import Graph from './Graph';

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
                <h6>Umidade Atual : {props.humidity} %</h6>
                <h6>Pressão Atual : {props.pressure} atm</h6>

            </div>
            <Graph data={props.tempPrev} color="orange" avg={avgTemp + "ºC"} label="Temperatura"/>
            <Graph data={props.umidadePrev} color="blue" avg={avgUmi + "%"} label="Umidade"/>
            <Graph data={props.pressaoPrev} color="green" avg={avgPre + "atm"} label="Pressão"/>
            
            
        </div>
    );
}

export default WeatherItem;