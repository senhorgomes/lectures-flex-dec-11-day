import { useEffect, useState } from 'react';

const useAPI = (defaultCity) => {
    const [selectedCity, setSelectedCity] = useState(defaultCity || "Toronto");
    const [selectedCityWeather, setSelectedWeather] = useState(0);
    const [selectedCityEmoji, setSelectedEmoji] = useState("☀️");

    const fetchWeather = () => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&appid=16354d8b7551f37dde75ee0b8b506c68&units=metric`)
            // Every response will be json
            .then((response) => response.json())
            // Depending on the response of the weather, we need to modify which emoji will be displayed and weather
            .then((data) => {
                //Grab the temperature and set it
                // console.log(data.main.temp);
                setSelectedWeather(data.main.temp);
                //Grab the outside weather condition eg Cloudy, Clear
                console.log(data.weather[0].main)
                if (data.weather[0].main === "Clouds") {
                    setSelectedEmoji("☁️")
                }
                if (data.weather[0].main === "Clear") {
                    setSelectedEmoji("☀️")
                }
            })
    }
    useEffect(() => {
        // upon the first render
        // If the value of selectedCity is modified, re run the function fetchWeather()
        fetchWeather();
    }, [selectedCity])
    // We only need to export what the component needs
    // We can expand what we export later on
    return {
        setSelectedCity,
        selectedCityWeather,
        selectedCityEmoji,
        selectedCity
    }

}

export default useAPI;