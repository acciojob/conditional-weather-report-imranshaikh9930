import React from 'react'

function Whether({whether}) {

    const {temperature, conditions} = whether;

    const aboveThrehold = temperature > 20;

  return (
    <div>
        <h1>Whether App</h1>
        <p>
       <span style={{color: aboveThrehold ? "red":"blue"}}>Temperature: {temperature}</span>
        </p>
        <p>Conditions: {conditions}</p>
    </div>
  )
}

export default Whether