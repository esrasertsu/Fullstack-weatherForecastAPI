import React, {Component} from 'react';
import WeeklyForecast from "./Forecasts/WeeklyForecast";
import CurrentForecast from "./Forecasts/CurrentForecast";
import axios from 'axios';
import { connect } from 'react-redux';

const WEATHER_KEY = "05fa14e773434825be0193343191301";

class Forecasts extends Component {
    constructor(props) {
        super(props);
        this.state = {
          numForcastDays: 7,
          selectedCity:"",
          cities: [{value: '', display: '(Select your city)'},{value:'Sydney', display:'Sydney'},{value:'Istanbul', display:'Istanbul'}] ,
          validationError:"",
          temp_c: "",
          lastUpdate: "",
          isDay: "",
          text: "",
          iconURL: "",
          precip:"",
          humid:"",
          wind:"",
          forecastdays:[]
        }
    }

 getWeather() {
      const { selectedCity, numForcastDays } = this.state;
      const URL = `https://api.apixu.com/v1/forecast.json?key=${WEATHER_KEY}  &q=${selectedCity} &days=${numForcastDays}`;
      axios.get(URL)
      .then(res=> {
        return res.data;
      }).then((data)=>{
        this.setState({
              temp_c: data.current.temp_c,
              lastUpdate: data.current.last_updated,
              isDay: data.current.is_day,
              text: data.current.condition.text,
              iconURL: data.current.condition.icon,
              precip:data.current.precip_in,
              humid:data.current.humidity,
              wind:data.current.wind_mph,
              forecastdays: data.forecast.forecastday
            },()=>this.saveStateToLocalStorage());
          })
           .catch(err => {
             if(err) console.error('Cannot fetch weather Data from API,', err);
         })
       }


 componentDidMount() {

        this.hydrateStateWithLocalStorage();

   }

  refreshData(){
    if(this.state.selectedCity!=="" && localStorage.getItem(this.state.selectedCity)==null)
    {
      localStorage.setItem("selectedCity",this.state.selectedCity);
      this.getWeather();
    }
  }

  hydrateStateWithLocalStorage() {

    debugger;
    // for all items in state
    for (let key in this.state) {
      // if the key exists in localStorage
      if (localStorage.hasOwnProperty(key)) {
        // get the key's value from localStorage
        let value = localStorage.getItem(key);

        // parse the localStorage string and setState
        try {
          value = JSON.parse(value);
          this.setState({ [key]: value });
        } catch (e) {
          // handle empty string
          this.setState({ [key]: value });
        }
      }
    }
  }

  saveStateToLocalStorage() {
    // for every item in React state
    for (let key in this.state) {
      // save to localStorage
      localStorage.setItem(key, JSON.stringify(this.state[key]));
    }
  }

 handleChange(e){

   this.setState({selectedCity: e.target.value,
                validationError: e.target.value === "" ? "You must select your city" : ""},() => this.refreshData());
  }

 renderContent(){
     const {
             selectedCity,
             lastUpdate,
             temp_c,
             isDay,
             text,
             iconURL,
             precip,
             humid,
             wind,
             forecastdays
           } = this.state;

         switch (this.props.auth) {
           case null:
              return;
           case false:
              return ;
           default:
             return (
               <div>
               <CurrentForecast
                      location={selectedCity}
                      temp_c={temp_c}
                      lastUpdate={lastUpdate}
                      isDay={isDay}
                      text={text}
                      iconURL={iconURL}
                      precip={precip}
                      humid ={humid}
                      wind={wind} />
                    <div className="selectCities">
                      <select className="select" value={this.state.selectedCity}
                            onChange={this.handleChange.bind(this)}>
                      {this.state.cities.map((city) => <option key={city.value} value={city.value}>{city.display}</option>)}
                    </select>
                    <div style={{color: 'red'}}>
                      {this.state.validationError}
                    </div>
                  </div>
                  <WeeklyForecast forecastdays={forecastdays} />
                </div>
             );
         }
   }

 render() {
            return (
                <div>
                 {this.renderContent()}
                </div>
            );
        }

}

function mapStateToProps({auth}){
    return { auth };
}
export default connect(mapStateToProps)(Forecasts);
