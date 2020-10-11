//import React from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './Clock';
import Welcomes from './Welcomes';
import Toggle from './Toggle';
import NameForm from './formSubmit';
import React, { useState } from 'react';
import Functional from './Functional';
import Addmore from './Addmore';
import Context from './Context';
import Forecast from './Forecast';


const posts = [
  {id: 1, title: 'React js', content: 'Welcome to learning React!'},
  {id: 2, title: 'Angular', content: 'Welcome to learning angular'}
];
function App() {
  return (
  <div>
  {
  /* <Welcomes name="Sara" age="25" qualification="Degree" />,
  <Clock />,
  <Toggle />,
  <NameForm />, */}
  {/* <Functional />,
  <Addmore />,
  <Context /> */}
  <Forecast />
  </div>
  );
}

export default App;
