import React from 'react'

function Whether({whether}) {

    const {temperature, conditions} = whether;

    const aboveThrehold = temperature > 20;

  return (
    <div>
        <h1>Whether App</h1>
        <p>
            + Tempreture : <span style={{color: aboveThrehold ? "red":"blue"}}>{temperature}</span>
        </p>
        <p>Conditions: {conditions}</p>
    </div>
  )
}

export default Whether