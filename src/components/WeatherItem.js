    import React from 'react';

    const WeatherItem = props => {
        return (
            <div>
                Cidade: {props.name} <br/>
                Temperatura : {props.temp} <br/>
            </div>
        );
    }

    export default WeatherItem;