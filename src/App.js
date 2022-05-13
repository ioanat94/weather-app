import React, {useState} from 'react'
import axios from 'axios'

function App() {
  // const url = `https://api.openweathermap.org/data/2.5/weather?q=helsinki&appid=762b20cd9002fa00ebc594f2b95172ec&units=metric`

  return (
    <div className="app">
      <div className="app--ctr">
        <div className="app--ctr-top">
          <div className="app--ctr-top-loc">
            <p>Helsinki</p>
          </div>
          <div className="app--ctr-top-temp">
            <p>14°C</p>
          </div>
          <div className="app--ctr-top-desc">
            <p>Clouds</p>
          </div>
        </div>
        <div className="app--ctr-bot">
          <div className="app--ctr-bot-feels">
            <p className="value">12°C</p>
            <p>Feels Like</p>
          </div>
          <div className="app--ctr-bot-hum">
            <p className="value">20%</p>
            <p>Humidity</p>
          </div>
          <div className="app--ctr-bot-wind">
            <p className="value">8 km/h</p>
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
