import { useState } from "react";

import "./App.css";

function App() {
  const [counterValue, setCounterValue] = useState(20);
  //let counterValue = 15;
  
  const addValue = () => {
    if(counterValue >= 20) {
      return;
    }
    setCounterValue(counterValue + 1);
    console.log(counterValue);
  };
  const removeValue = () => {
    if(counterValue <= 0) {
      return;
    }
    setCounterValue(counterValue - 1);
    console.log(counterValue );
  };

  return (
    <>
    <div className="main-div">
      <h1 >Counter Value: {counterValue}</h1>
      <button className="add-button" onClick={addValue}>Increase Value</button>

      <br />

      <button className="remove-button" onClick={removeValue}>Decrease Value</button>
      
    </div>
    </>
  );
}

export default App;


/*In this project we have created a counter app using react hooks.
 We have used useState hook to manage the state of the counter value. 
 We have created two buttons to increase and decrease the counter value.
 We have also added some validation to prevent the counter value from going below 0 and above 20.
 */