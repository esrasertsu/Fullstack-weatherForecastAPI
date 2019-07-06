import React, { Component } from 'react';

class ForecastDay extends Component {
  constructor(props) {
    super(props);
    this.state ={
       days : ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
       dateString : new Date(this.props.date)
    }
  }

  render() {
    const { day } = this.props;
    const dayName  = this.state.days[this.state.dateString.getDay()];

    if (!day) return null;
    else
    return (
      <div className="forecastday-container">
      <div>{dayName}</div>
        <div className="image">
          <img src={day.condition.icon}/>
        </div>
        <div className="text">{day.avgtemp_c}°C</div>
        <div className="muted-text">{day.condition.text}</div>
      </div>
    );
  }
}
export default ForecastDay;
