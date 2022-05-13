import React, {useState} from 'react'
import axios from 'axios'

function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=762b20cd9002fa00ebc594f2b95172ec&units=metric`

  function searchLocation(event) {
    if (event.key === 'Enter') {
      axios.get(url).then(response => {
        setData(response.data)
      })

      setLocation('')
    }
  }

  return (
    <div className='app'>
      <div className='app--search'>
        <input 
          type='text' 
          value={location} 
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder='Enter location'
        />
      </div>
      <div className='app--ctr'>
        <div className='app--ctr-top'>
          <div className='app--ctr-top-loc'>
            <p>{data.name}</p>
          </div>
          <div className='app--ctr-top-temp'>
            {data.main ? <p>{Math.round(data.main.temp)}°C</p> : null}
          </div>
          <div className='app--ctr-top-desc'>
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>
        {data.name != undefined &&
          <div className='app--ctr-bot'>
            <div className='app--ctr-bot-feels'>
              {data.main ? <p className='value'>{Math.round(data.main.feels_like)}°C</p> : null}
              <p>Feels Like</p>
            </div>
            <div className='app--ctr-bot-hum'>
              {data.main ? <p className='value'>{data.main.humidity}%</p> : null}
              <p>Humidity</p>
            </div>
            <div className='app--ctr-bot-wind'>
              {data.wind ? <p className='value'>{Math.round(data.wind.speed)} km/h</p> : null}
              <p>Wind Speed</p>
            </div>
          </div>
        }
      </div>
    </div>
  );
}

export default App;
