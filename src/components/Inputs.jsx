import React from 'react';
import { UilSearch,UilMapPin } from '@iconscout/react-unicons';


const Inputs = () => {
  return (
    <>
        <div className='flex flex-row justify-center my-6' >
<div className='flex flex-row w-3/4 items-center justify-center space-x-4'>
<input type="text" className='text-xl font-light placeholder:lowercase p-2 w-full shadow-xl capitalize focus:outline-none first-letter:capitalize' 
placeholder='See Weather...' />

<UilSearch size={25} className="text-white cursor-pointer transition ease-out hover:scale-125"/>
<UilMapPin size={25} className="text-white cursor-pointer transition ease-out hover:scale-125"/>
</div>

<div className='flex flex-row w-1/4 items-center justify-center'>
<button name='metric' className='text-xl text-white font-light'>°C</button>
<p className='text-xl text-white mx-1'>|</p>
<button name='imperial' className='text-xl text-white font-light'>°F</button>
</div>
        </div>
    </>
  );
}

export default Inputs;
