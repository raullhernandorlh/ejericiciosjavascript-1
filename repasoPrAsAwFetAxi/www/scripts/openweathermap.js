const axios = require('axios');
const fetch = require('fetch-node');




async function getWeatherOfLondon(){

	const URL_WEATHER_OF_LONDON = "https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=439d4b804bc8187953eb36d2a8c26a02"
	const weatherDataResponse =  await axios.get(URL_WEATHER_OF_LONDON);
	const weatherData = weatherDataResponse.data;
	const typeOfWeatherData = typeof(weatherDataResponse.data);
	console.log(typeOfWeatherData);

	// const visibility = 



	// console.log(weatherData);
}

getWeatherOfLondon();







// function getWeatherOfLondon() {
//     fetch('https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=439d4b804bc8187953eb36d2a8c26a02')
//         .then((response) => {
//             const data = response.json();
//             console.log(response);
//             console.log("-------------------------------")
//             return data;
//         })
//         . then((data) => {
            
//             console.log(data);
//         });
// }

// getWeatherOfLondon();