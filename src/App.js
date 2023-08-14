import React from 'react';
import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs';
import TimeAndLocation from './components/TimeAndLocation';
import Details from './components/Details';
import Forecast from './components/Forecast';

const App = () => {
  return (
    <>
      <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl
      shadow-gray-400">
      <h2 className='font-medium text-2xl ml-1 text-orange-500 text-center'>Welcome To Atul Forecast Website</h2>
      <TopButtons />
      <Inputs />
      <TimeAndLocation />
      <Details />
     <Forecast title="hourly forecase" />
     <Forecast title="daily forecase" />
      </div>
    </>
  );
}

export default App;
