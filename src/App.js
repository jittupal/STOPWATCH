import React, { useEffect, useState } from 'react'

const App = () => {
   const [time, setTime] = useState(0);
   const [running, setRunning] = useState(false);

   useEffect(()=>{
     let interval;
     if(running){
       interval = setInterval(() => {
        setTime((pretime)=>pretime + 10);
       }, 10);
     }
     else if(!running){
      clearInterval(interval);
     }
    return ()=>clearInterval(interval);
     
   }, [running]);
  return (
    <center>
      <center><h1>STOPWATCH</h1></center>
      <div>
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </div>
      <div>
        {
          running ? (
          <button onClick={()=>{setRunning(false)}}>PAUSE</button>
          ):
          ( 
          <button onClick={()=>{setRunning(true)}}>START</button>
          )
        }
        <button onClick={()=>{setTime(0)}}>RESET</button>
      </div>
    </center>
  )
}

export default App