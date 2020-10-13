import React from 'react'

function GameStart(props) {

  return(
    <div>
      <h1>HARDLINE</h1>
      <h2>GAME START</h2>
      <div>
        <button onClick={props.startGame}>START</button>
      </div>
    </div>
  )
}

export default GameStart