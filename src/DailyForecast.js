import React from 'react';
import Fortune from './Fortune';

function DailyForecast({day}) {

    return (
        <div>
            <h2>Date: {day.dt_txt}</h2>
            <h3>Conditions: {day.weather[0].main}</h3>
            <h3 style={{margin: '0'}}>Temperature: {((day.main.temp - 273.15) * (9/5) + 32).toFixed(0)}</h3>
            <Fortune />


        
        
        </div>
    )

}


export default DailyForecast