    import React from 'react';

    const WeatherItem = props => {
        return (
            <div>
                Temperatura : {props.temp} <br/>
            </div>
        );
    }

    export default WeatherItem;