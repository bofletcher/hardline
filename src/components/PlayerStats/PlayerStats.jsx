import React from 'react'

function PlayerStats(props) {

  return(
    <div>
      <h1>PLAYER STATS:</h1>
        <h2>CLASS</h2>
        <p>{props.playerClass}</p>
        <h2>INVENTORY</h2>
        <ul>
          {props.inventory.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
    </div>
  )
}

export default PlayerStats;