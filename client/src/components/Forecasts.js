import React, {Component} from 'react';
import WeeklyForecast from "./Forecasts/WeeklyForecast";
import CurrentForecast from "./Forecasts/CurrentForecast";
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

 getWeather() {
      const { cityName, numForcastDays } = this.state;
      debugger;
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
              precip:data.current.precip_in,
              humid:data.current.humidity,
              wind:data.current.wind_mph,
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
     this.getWeather();
     //
     // eventEmitter.on("getWeather", data => {
     //   this.setState({ cityName: data }, () => this.getWeather());
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
                  precip,
                  humid,
                  wind,
                  forecastdays
                } = this.state;

            return (
                <div>
                   <CurrentForecast
                          location={cityName}
                          temp_c={temp_c}
                          isDay={isDay}
                          text={text}
                          iconURL={iconURL}
                          precip={precip}
                          humid ={humid}
                          wind={wind} />

                    <WeeklyForecast forecastdays={forecastdays} />
                </div>
            );
        }

    // onClick = (counter, event) => {
    //     this.setState({counter: this.state.counter + counter});
    // }
}

export default Forecasts;
