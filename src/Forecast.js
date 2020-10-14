//import React from 'react';
import logo from './logo.svg';
import rain from './rain.png';
import weather from './weather.png';
import './App.css';
 import Forecasts  from './Forecasts';
import React, { useState, useEffect } from "react";
import {  BrowserRouter, Route, Link ,Switch} from 'react-router-dom';



// const gitHubUrl ="http://api.openweathermap.org/data/2.5/forecast?q=hyderabad&cnt=4&appid=ce5cbb754c954329a69f2f8083ebedb9";

function Forecast() {

 
  const [userData, setUserData] = useState({});
  const [userList, setList] = useState([]);
  const [userWeather, setWeather] = useState([]);
  const [name, setName] = useState([]);
  const [cityname, setCityName] = useState([]);

  let gitHubUrl="http://api.openweathermap.org/data/2.5/forecast?q=hyderabad&appid=ce5cbb754c954329a69f2f8083ebedb9";

  let search = (e) => {
    e.preventDefault();
    let keyword = e.target.elements.keyword.value;
    gitHubUrl ="http://api.openweathermap.org/data/2.5/forecast?q="+keyword+"&appid=ce5cbb754c954329a69f2f8083ebedb9";
    getGitHubUserWithFetch();
  }

  

  
  

  useEffect(() => {
    getGitHubUserWithFetch();
  }, []);

  
  const getGitHubUserWithFetch = async () => {
    const response = await fetch(gitHubUrl);
    const jsonData = await response.json();
    setUserData(jsonData);
    setList(jsonData.list);
    setName(jsonData.city);
    
    
  };
  var dateTime;

  




  return (
    
    <div>
       <h1>Weather App</h1>

       <div class="rightdivsearch">
       <form method="post" onSubmit={search}>
          <input type="text" name="keyword" placeholder="Search city..." />
          <input type="submit" value="Search" />
        </form>
        </div>
      
        <div class="centered">
         
        <h1> Call 5 day / 3 hour forecast data  </h1>
        </div>
        <div class="demo">
          {/* <h1>Datatatatata</h1> */}
          <div> 
              <br />
              <h1 class="margin-center">Location : {name.name}</h1>
              {userList.filter(name => name.dt_txt.includes('15:00:00')).map((forecast,index) => (
                
                
             
            
            // <BrowserRouter>
            
            <Link to={'/Forecasts/'+name.name+'/'+forecast.dt_txt } >
              <div class="forecastdiv">
              <div>{forecast.dt_txt.dateDMY}{new Date( forecast.dt_txt ).toDateString()}<br/>
              
              {forecast.weather[0].description == 'moderate rain' &&(
              <img src={rain} alt="Smiley face" class="rainimage"/>)}
              {forecast.weather[0].description == 'heavy intensity rain' &&(
              <img src={rain} alt="Smiley face" class="rainimage"/>)}
              {forecast.weather[0].description == 'broken clouds' &&(
              <img src={rain} alt="Smiley face" class="rainimage"/>)}
              {forecast.weather[0].description == 'scattered clouds' &&(
              <img src={weather} alt="Smiley face" class="rainimage"/>)}
              {forecast.weather[0].description == 'light rain' &&(
              <img src={rain} alt="Smiley face" class="rainimage"/>)}
               {forecast.weather[0].description == 'clear sky' &&(
              <img src={weather} alt="Smiley face" class="rainimage"/>)}
              {forecast.weather[0].description == 'few clouds' &&(
              <img src={weather} alt="Smiley face" class="rainimage"/>)}
               {forecast.weather[0].description == 'very heavy rain' &&(
              <img src={rain} alt="Smiley face" class="rainimage"/>)}
              {forecast.weather[0].description == 'overcast clouds' &&(
                <img src={weather} alt="Smiley face" class="rainimage" />
              

            )}
            <br/>
            
              <h4>Temp:{forecast.main.temp}</h4><br/>
               {forecast.weather[0].description}
              </div>  
              </div>

              </Link>
              // </BrowserRouter>
           
              
              ))};
          </div>
    
       </div>
    </div>
   
  );
}

export default Forecast;
