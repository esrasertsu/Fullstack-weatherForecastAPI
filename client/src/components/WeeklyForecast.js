import React from "react";

import ForecastDay from "./ForecastDay";

export default class WeeklyForecast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    debugger;
    const { forecastdays } = this.props;
    return (
      <div className="bottom-container">
        <div className="inner-container">
          {forecastdays &&
            forecastdays.map((day, idx) => {
              return <ForecastDay day={day.day} key={idx} />;
            })}
        </div>
      </div>
    );
  }
}
