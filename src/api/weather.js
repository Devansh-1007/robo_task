import React, { useState } from 'react'
import axios from 'axios'
import { Input } from '@material-tailwind/react';
function Weather() {
    const [weather, setWeather] = useState([]);
    const [location, setLocation] = useState('');
    const url = `http://api.weatherapi.com/v1/current.json?key=d3e38e253ccd402881c70238231701&q=${location}`
    const getWeather =  (e) => {

         axios.get(url)
            .then((res) => {
                setWeather(res.data)
                console.log(weather)
            })
        setLocation('');
    }

    return (
        <div className='m-4'>
            <div className='flex justify-center p-8 '>
                <Input value={location} onChange={(e) => setLocation(e.target.value)} size="lg" color='red' label='Search Location' />
                <button onClick={getWeather} className="px-10 w-40  ">
                    Search
                </button>
            </div>
            <div className="border-[0.125rem] border-[#189BA5] min-w-[75%] h-[13rem] sm:h-[20rem] sm:min-w-[31%] flex flex-col justify-start items-center mx-4 px-2 sm:px-6 py-6 2xl:px-16 sm:mx-[1.254rem] rounded-lg">
                <p className="font-heading font-bold text-center sm:font-semibold sm:text-[1.5rem] text-[#189BA5]">
                    {weather.location ? <h1 className='text-4xl text-' >{weather.location.name}</h1> : null}                </p>
                <p className="sm:mt-[0.625rem] font-custom font-normal text-xs sm:text-[1.125rem] text-[#189BA5]">
                    <div className='p-4 flex justify-center mt-8 '>
                        {weather.current ? <p className='text-xl'>{weather.current.temp_c}C/{weather.current.temp_f}F</p> : null}
                    </div>
                    <div className='p-2 flex justify-center mt-8 '>
                        {weather.current ? <p className='text-xl'>Feels Like:{weather.current.feelslike_c}C/{weather.current.feelslike_f}F</p> : null}
                    </div>
                </p>
                <p className="my-4 px-2 sm:px-0 sm:mt-[3.125rem] text-justify font-light font-custom text-xs sm:text-lg overflow-auto sm:overflow-hidden sm:leading-6">
                    {weather.current ? <p>Wind :{weather.current.wind_kph}kph</p> : null}
                </p>
            </div>
        </div >
    )

}
export default Weather