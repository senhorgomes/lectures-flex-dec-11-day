import './App.css';
import NavBar from './components/NavBar';
import { useEffect, useState } from 'react';
import useCounter from './hooks/useCounter';
import useAPI from './hooks/useAPI';
function App() {

  // const [selectedCity, setSelectedCity] = useState("Toronto");
  // const [selectedCityWeather, setSelectedWeather] = useState(0);
  // const [selectedCityEmoji, setSelectedEmoji] = useState("☀️");

  // const fetchWeather = () => {
    // fetch(`https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&appid=INSERT_KEY&units=metric`)
  //     // Every response will be json
  //     .then((response) => response.json())
  //     // Depending on the response of the weather, we need to modify which emoji will be displayed and weather
  //     .then((data) => {
  //       //Grab the temperature and set it
  //       // console.log(data.main.temp);
  //       setSelectedWeather(data.main.temp);
  //       //Grab the outside weather condition eg Cloudy, Clear
  //       console.log(data.weather[0].main)
  //       if(data.weather[0].main === "Clouds"){
  //         setSelectedEmoji("☁️")
  //       }
  //       if(data.weather[0].main === "Clear"){
  //         setSelectedEmoji("☀️")
  //       }
  //     })
  // }
  // useEffect(() => {
  //   // upon the first render
  //   // If the value of selectedCity is modified, re run the function fetchWeather()
  //   fetchWeather();
  // }, [selectedCity])

  const {count, increaseCount} = useCounter(100);
  const {selectedCity, selectedCityEmoji, selectedCityWeather, setSelectedCity} = useAPI();
  return (
    <>
      <NavBar setSelectedCity={setSelectedCity} />
      <main>
        <section>
          <div className="row">
            <article className="card flow">
              <h2>Weather in {selectedCity}</h2>
              <div className="emoji">{selectedCityEmoji}</div>
              <div className="emoji">{selectedCityWeather}</div>
            </article>
          <button onClick={()=> increaseCount()}>{count}</button>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;