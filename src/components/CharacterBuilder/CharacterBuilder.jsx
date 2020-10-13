import React, { useState } from 'react';
import styles from './CharacterBuilder.module.css'

function CharacterBuilder(props) {


  return(
    <div>
      <p>Choose your player type:</p>
        <div>
          <button onClick={()=>{props.initializePlayer("DECKER");}}>DECKER</button>
          <button onClick={()=>{props.initializePlayer("OPERATOR");}}>OPERATOR</button>
          <button onClick={()=>{props.initializePlayer("WARRIOR");}}>WARRIOR</button>
        </div>
    </div>
  )
} 

export default CharacterBuilder;