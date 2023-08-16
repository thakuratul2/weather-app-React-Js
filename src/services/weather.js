const API_KEY = "b77ea807bcbc8991760b377a6c26696f";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

const getData = (infoType, searchParam) =>{
    const url = new URL(BASE_URL + "/" + infoType);
    url.search = new URLSearchParams({ ...searchParam,appid:API_KEY});


    console.log(url);
    return fetch(url)
    .then((res) => res.json())
    .then((data) => data);
};

const formattedCurrent = (data) => {
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
const formattedData = async (searchParam) => {

    const formattedCurrent = await getData('weather',searchParam
    ).then(formattedCurrent);

    
return formattedCurrent

}

export default formattedData