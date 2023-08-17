const API_KEY = "b77ea807bcbc8991760b377a6c26696f";
const BASE_URL = "https://api.openweathermap.org/data/2.5";
import {DateTime} from 'luxon';

const getData = (infoType, searchParam) =>{
    const url = new URL(BASE_URL + "/" + infoType);
    url.search = new URLSearchParams({ ...searchParam,appid:API_KEY});


    console.log(url);
    return fetch(url)
    .then((res) => res.json())
    .then((data) => data);
};

const formatCurrentData = (data) => {
    const {
        coord: {lat, lon},
        main: {temp,feels_like, temp_min, temp_max, humidity},
        name,
        dt,
        sys: {country, sunrise, sunset},
        weather,
        wind: {speed}
    } = data

    const {main: details, icon} = weather[0];

    return {lat,lon,temp,feels_like,temp_min,temp_max,humidity,name,dt,country,sunrise,sunset
    ,details,icon,speed}
}

const formatForecast = (data) => {
    let {timezone, daily, hourly} = data;

    daily = daily.slice(1,6).map()
}

const formattedData = async (searchParam) => {

    const formattedCurrentData = await getData('weather',
    searchParam).then(formatCurrentData)

    const {lat,lon} = formattedCurrentData

    const formattedForecast = await getData('onecall',{
        
        lat, lon, exclude: 'current,minutely,alerts', units:searchParam.units
    }).then(formatForecast);


    
return formattedCurrentData

};

const formatLocalTime = (secs,zone,format="cccc,dd LLL yyyy'
 | Local time: 'hh:mm a") => DateTime.fromSeconds()


export default formattedData