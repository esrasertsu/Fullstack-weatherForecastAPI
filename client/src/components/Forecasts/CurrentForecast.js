import React, {Component} from 'react';
import './Style.css';

export default class CurrentForecast extends Component {

  constructor(props){
    super(props);
    this.state={};
  }

  render(){
    const { location, temp_c, text, iconURL, humid, precip, wind} = this.props;
    return (
      <div className="container">
       <div className="location">{location}</div>
       <div className="row">
         <div className="inner-container img">
          <img className="currentWeather-img" src={iconURL} />
         </div>
          <div className="inner-container middle">
            <div className="temp">{temp_c}°</div>
            <div className="status">{text}</div>
          </div>
          <div className="inner-container">
            <div className="info">Humidity: {humid}%</div>
            <div className="info">Precipitation: {precip}%</div>
            <div className="info">Wind: {wind}km/h</div>
           </div>
        </div>
      </div>
    )
  }
}
