import React from 'react';
import { UilTemperature,UilTemperaturePlus,UilTemperatureMinus,UilRaindrops,UilWind,UilSunset, UilBrightness  } from '@iconscout/react-unicons'

const Details = () => {
  return (
    <div>
      <div className='flex items-center justify-center py-6 text-xl text-cyan-300'>

             <p> Cloudy</p>
      </div>
      <div className='flex flex-row items-center justify-between
      text-white py-3'>

        <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="" 
        className='w-20' />
        <p className='text-5xl'>34°</p>
        <div className='flex flex-col space-y-2'>
            <div className='flex font-light text-sm items-center justify-center'>
            <UilTemperature size={18} className='mr-1' />
            
            Real Feel:
            <span className='font-medium ml-1'>32°</span>
            </div>
            <div className='flex font-light text-sm items-center justify-center'>
            <UilRaindrops size={18} className='mr-1' />
            
            Humidity:
            <span className='font-medium ml-1'>65%</span>
            </div>
            <div className='flex font-light text-sm items-center justify-center'>
            <UilWind size={18} className='mr-1' />
            
            Wind Speed:
            <span className='font-medium ml-1'>11 km/h</span>
            </div>
        </div>
      </div>
      <div className='flex flex-row items-center justify-center space-x-2
      text-white text-sm py-3'>
      <UilBrightness />
      <p className="font-light">
        Rise: <span className='font-medium ml-1'>05:45 AM</span>
      </p>

      <p className='font-light'>|</p>
      <UilSunset />
      <p className="font-light">
        Sunset: <span className='font-medium ml-1'>05:45 PM</span>
      </p>
      <p className='font-light'>|</p>
      <UilTemperaturePlus />
      <p className="font-light">
        Maximum: <span className='font-medium ml-1'>32°</span>
      </p>
      <p className='font-light'>|</p>
      <UilTemperatureMinus />
      <p className="font-light">
        Minimum: <span className='font-medium ml-1'>39°</span>
      </p>
      <p className='font-light'>|</p>
      </div>
    </div>
  );
}

export default Details;
