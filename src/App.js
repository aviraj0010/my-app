// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import React, { useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light'); //Whether dark mode is enable or not      

  const toggleMode = () => {
    if(mode == 'light'){
      setMode ('dark');
      document.body.style.backgroundColor = 'gray';
      document.title = 'TextUtils -Dark Mode';
      // setInterval(() => {
      // document.title = 'TextUtils is Amazing Mode';
      // }, 2000);
      // setInterval(() => {
      // document.title = 'Install TextUtils is Amazing Mode';
      // }, 1500);
    }
    else{
      setMode ('light');
      document.title = 'TextUtils -Light Mode'

    }
  }
  return (
    <>
    {/* <Router> */}
<Navbar title ="Aviraj" abouttxt="about" hometxt="Home" search = "Search" mode={mode} toggleMode={toggleMode}/>
{/* <Navbar/> */}
<div className="container my-3">
        <TextForm heading="Enter the text to analyze " mode={mode} />
{/* <Routes> */}
{/* /users -----> Component-1
    /users/home ---->----> Component-2*/}
          {/* <Route exact path="/" element={<TextForm heading="Enter the text to analyze " />} />
        <Route exact path="/about" element={<About />}> */}
        {/* <Route path="/" element={<TextForm heading="Enter the text to analyze " />}> */}
          {/* <Route index element={<TextForm heading="Enter the text to analyze " />} /> */}
          {/* <Route path="contact" element={<Contact />} /> */}
          {/* <Route path="*" element={<NoPage />} /> */}
        {/* </Route>
      </Routes> */}
</div>
      {/* </Router> */}
    </>
  );
}

export default App;
