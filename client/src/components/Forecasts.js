import React, {Component} from 'react';
import WeeklyForecast from "./WeeklyForecast";
import axios from 'axios';

const WEATHER_KEY = "05fa14e773434825be0193343191301";

class Forecasts extends Component {
    constructor(props) {
        super(props);
        this.state = {
          cityName: "Sydney",
          numForcastDays: 7,
          isLoading: true
        }
    }

    updateWeather() {
      const { cityName, numForcastDays } = this.state;
      const URL = `https://api.apixu.com/v1/forecast.json?key=${WEATHER_KEY}  &q=${cityName} &days=${numForcastDays}`;
      axios.get(URL)
      .then(res=> {
        return res.data;
      }).then((data)=>{
        this.setState({
              isLoading: false,
              temp_c: data.current.temp_c,
              isDay: data.current.is_day,
              text: data.current.condition.text,
              iconURL: data.current.condition.icon,
              forecastdays: data.forecast.forecastday
            });
       })
       .catch(err => {
         if(err) console.error('Cannot fetch weather Data from API,', err);
       })
 }

 componentDidMount() {
     // const { eventEmitter } = this.props;
     //
     this.updateWeather();
     //
     // eventEmitter.on("updateWeather", data => {
     //   this.setState({ cityName: data }, () => this.updateWeather());
     // });

   }

  render() {
          const {
                  isLoading,
                  cityName,
                  temp_c,
                  isDay,
                  text,
                  iconURL,
                  forecastdays
                } = this.state;

            return (
                <div>
                    <WeeklyForecast forecastdays={forecastdays} />
                </div>
            );
        }

    // onClick = (counter, event) => {
    //     this.setState({counter: this.state.counter + counter});
    // }
}

export default Forecasts;
