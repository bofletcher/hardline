import React, { useState } from 'react';
import styles from './CharacterBuilder.module.css'

function CharacterBuilder(props) {


  return(
    <div>
      <p>Choose your player type:</p>
        <div>
          <button onClick={()=>{props.initializePlayer("DECKER"); props.setStep(1)}}>DECKER</button>
          <button onClick={()=>{props.initializePlayer("OPERATOR"); props.setStep(1)}}>OPERATOR</button>
          <button onClick={()=>{props.initializePlayer("WARRIOR"); props.setStep(1)}}>WARRIOR</button>
        </div>
    </div>
  )
} 

export default CharacterBuilder;