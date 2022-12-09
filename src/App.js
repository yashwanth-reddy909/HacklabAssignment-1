// import logo from './logo.svg';
import './App.css';
import { useState,useEffect} from 'react';


function App() {
  const [t,setT] = useState(0);
  
  useEffect(()=>{
    const interval = setInterval(() => {
    setT(t => t + 1);
      }, 1000);
    return () => clearInterval(interval);
  },[]);

  function handleRedbutton  () {
    setT(0);
  }
  function handleGreenbutton (){
    setT(20);
  }
  function handleYellowbutton () {
    setT(35);
  }

  function getColor() {
    if(t<20){
      return "red";
    }
    else if (t<35){
      return "green";
    }
    else if(t<40){
      return "yellow";
    }
    else if(t>=40){
      setT(0);
      return "red";
    }
  }

  function remainTime() {
    if(t<20){
      return 20-t;
    }
    else if (t<35){
      return 35-t;
    }
    else if(t<40){
      return 40-t;
    }
    else if(t>=40){
      setT(0);
      return 0;
    }
  }



  return (
    <div className="App">
      <header className="App-header">
          <div className="displayColor" style={{background: getColor()}}></div>
        <div>{remainTime()} seconds left</div>
        <div className="btn-container">
          <button className="btn red-btn" onClick={handleRedbutton}>Red</button>
          <button className="btn green-btn" onClick={handleGreenbutton}>Green</button>
          <button className="btn yellow-btn" onClick={handleYellowbutton}>Yellow</button>
        </div>
      </header>
    </div>
  );
}

export default App;
