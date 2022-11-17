import { useState } from 'react';
import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom"


function App() {

  const [mode, setMode] = useState('light'); //whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  const showAlert = (message , type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#0c0d41';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'Textutils - Dark Mode';
      // setInterval(() => {
      //   document.title = 'Textutils is Amazing Mode';
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Install Textutils Now';
      // }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'Textutils - Light Mode';
    }
  }
  return (
    <>
    {/* <Router> */}
    <Navbar titel ="Textutils" aboutText="About us" mode={mode} toggleMode ={toggleMode}/>
    {/* <Navbar/> */}
    <Alert alert ={alert}/>
    <div className="container my-3" >
    
      {/* <Routes>
      <Route exact path='/About' element={<About/>}/>
      <Route exact path='/' element={ */}
      <TextForm showAlert ={showAlert}heading = "Enter the text to analyze below" mode={mode}/>
      {/* }/>
      </Routes> */}
    </div>
    {/* </Router> */}
    </>
  );
}

export default App;
