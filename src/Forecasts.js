//import React from 'react';
import logo from './logo.svg';
import rain from './rain.png';
import weather from './weather.png';
import './App.css';
// import React  from 'react';
import React, { useState, useEffect } from "react";
import { format } from 'date-fns';

function Forecasts() {

  const [userData, setUserData] = useState({});
  const [userList, setList] = useState([]);
  const [userWeather, setWeather] = useState([]);
  const [name, setName] = useState("");

  var ResponseURL=window.location.href;
  var domain = ResponseURL.split('/');
  let datetime=domain[domain.length - 1];
  let cityname=domain[domain.length - 2];
  const gitHubUrl ="http://api.openweathermap.org/data/2.5/forecast?q="+cityname+"&appid=ce5cbb754c954329a69f2f8083ebedb9";



  var domains = datetime.split('%');
  let date=domains[domains.length - 2];


  useEffect(() => {
    getGitHubUserWithFetchs();
    
  }, []);

  
  const getGitHubUserWithFetchs  = async () => {
    const response = await fetch(gitHubUrl);
    const jsonData = await response.json();
    setUserData(jsonData);
    setList(jsonData.list);
    
    
  };
 
 
  // const navigateTo = () => history.push('/componentURL');//eg.history.push('/login');

  return (
    <div>
      <h1>Weather App</h1>
        <div class="centered">
        <h1> Call 5 day / 3 hour forecast data  </h1>
        </div>
        <div class="demo">
          <div> 
              <br />
              <h1 class="margin-center">Location : {cityname}</h1>
              {/* {userList.map((forecast,index) => ( */}
                {userList.filter(name => name.dt_txt.includes(date)).map((forecast,index) => (
              
              <div key={index} class="forecastdiv">
              <div>
                <br/>
                { forecast.dt_txt.includes('00:00:00') &&(
                  <h3>12:00 AM - 03:00 AM</h3>
                )}
                 { forecast.dt_txt.includes('03:00:00') &&(
                  <h3>03:00 AM - 06:00 AM</h3>
                )}
                
                { forecast.dt_txt.includes('06:00:00') &&(
                  <h3>06:00 AM - 09:00 AM</h3>
                )}
                 { forecast.dt_txt.includes('09:00:00') &&(
                  <h3>09:00 AM - 12:00 PM</h3>
                )}
                 { forecast.dt_txt.includes('12:00:00') &&(
                  <h3>12:00 PM - 03:00 PM</h3>
                )}
                 { forecast.dt_txt.includes('15:00:00') &&(
                  <h3>3:00 PM - 06:00 PM</h3>
                )}
                 { forecast.dt_txt.includes('18:00:00') &&(
                  <h3>6:00 PM - 09:00 PM</h3>
                )}
                 { forecast.dt_txt.includes('21:00:00') &&(
                  <h3>9:00 PM - 12:00 AM</h3>
                )}
                {forecast.dt_txt.dateDMY}{new Date( forecast.dt_txt ).toDateString()}<br/>
              {forecast.weather[0].description == 'moderate rain' &&(
              <img src={rain} alt="Smiley face" class="rainimage"/>)}
              {forecast.weather[0].description == 'heavy intensity rain' &&(
              <img src={rain} alt="Smiley face" class="rainimage"/>)}
               {forecast.weather[0].description == 'very heavy rain' &&(
              <img src={rain} alt="Smiley face" class="rainimage"/>)}
              {forecast.weather[0].description == 'broken clouds' &&(
              <img src={rain} alt="Smiley face" class="rainimage"/>)}
              {forecast.weather[0].description == 'scattered clouds' &&(
              <img src={weather} alt="Smiley face" class="rainimage"/>)}
               {forecast.weather[0].description == 'clear sky' &&(
              <img src={weather} alt="Smiley face" class="rainimage"/>)}
              {forecast.weather[0].description == 'light rain' &&(
              <img src={rain} alt="Smiley face" class="rainimage"/>)}
              {forecast.weather[0].description == 'few clouds' &&(
              <img src={weather} alt="Smiley face" class="rainimage"/>)}
              {forecast.weather[0].description == 'overcast clouds' &&(
                <img src={weather} alt="Smiley face" class="rainimage" />)}
              <h4>Temp:{forecast.main.temp}</h4><br/>
               {forecast.weather[0].description}
              </div>  
              </div>


              ))};
          </div>
    
       </div>
    </div>
   
  );
}

export default Forecasts;
