import React from "react";

import ForecastDay from "./ForecastDay";

export default class WeeklyForecast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { forecastdays } = this.props;
    return (
      <div className="bottom-container light-blue darken-3">
        <div className="forecast-container">
          {forecastdays &&
            forecastdays.map((day, idx) => {
              return <ForecastDay day={day.day} date={day.date} key={idx} />;
            })}
        </div>
      </div>
    );
  }
}
