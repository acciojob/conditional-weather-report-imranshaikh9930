
import React from "react";
import './../styles/App.css';
import Whether from "./Whether";

const App = () => {

  const whetherData = { temperature: 25, conditions: "Sunny"}
  return (
    <div>
      <Whether whether={whetherData}/>
        {/* Do not remove the main div */}

    </div>
  )
}

export default App
