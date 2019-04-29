import React from 'react';
import axios from 'axios';

import DailyForecast from './DailyForecast';


class Weather extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            currentWeather: {},
            forecast: []
        }
    }
    // runs on initial page load (only once)
    async componentDidMount() {
        // make request to Open Weather Map API
        const response = await axios.get('http://api.openweathermap.org/data/2.5/weather?q=Atlanta&APPID=449d8f25bab8a422a5c3936e6e9abe0e');
        this.setState({
            currentWeather: response.data
        })

        const forecast = await axios.get('http://api.openweathermap.org/data/2.5/forecast?q=Atlanta,us&mode=json&APPID=449d8f25bab8a422a5c3936e6e9abe0e');
        this.setState({
            forecast: forecast.data.list
        })

    }


    render() {
        return (
        
            <div>
                <h2>Current Weather: {this.state.currentWeather.name}</h2>
                <ul style={{borderBottom: '2px dashed red', paddingBottom: '20px'}}>
                    <li>
                    {
                        this.state.currentWeather.main ? ((this.state.currentWeather.main.temp - 273.15) * (9/5) + 32).toFixed() + ' degrees' : null
                    }
                    </li>
                    <li>
                        {
                            this.state.currentWeather.weather ? 'Conditions: ' + this.state.currentWeather.weather[0].main : null
                        }
                    </li>
                </ul>
                <h2>5 day forecast: </h2>
                <ul style={{margin: '0'}}>
                        {
                            this.state.forecast.filter((day, i) => i % 4 === 0).map((day, i) => <DailyForecast day={day}/>)
                        }
                </ul>


            </div>

        )
    }

}


export default Weather;