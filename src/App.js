import React, { useState } from 'react';
import './App.css';
import CharacterBuilder from '../src/components/BuildCharacter/CharacterBuilder'
import PlayerStats from './components/PlayerStats/PlayerStats';

function App() {

    const [playerClass, setPlayerClass] = useState(null)
    const [step, setStep] = useState(0);
    const [inventory, setInventory] = useState([])
    
    const addItemToInventory = (e) => {
      e.preventDefault();
      setInventory({
        ...inventory,

      })

    }

    function initializePlayer(chosenClass) {
      
      if(chosenClass === "DECKER") {
        setPlayerClass("DECKER");
        setInventory([
          ...inventory,
          {
            id: 0,
            name: "Cyber-Deck"
          },
          {
            id: 1,
            name: "Heavy-Pistol"
          }
        ])
      } else if (chosenClass === "OPERATOR") {

        setPlayerClass("OPERATOR")
        setInventory([
          ...inventory,
          {
            id: 0,
            name: "Cyber-Deck-Operator-Style"
          },
          {
            id: 1,
            name: "Heavy-Pistol"
          }
        ])
      } else if (chosenClass === "WARRIOR") {
        setPlayerClass("WARRIOR")
        setInventory([
          ...inventory,
          {
            id: 0,
            name: "Cyber-Deck-Operator-Style"
          },
          {
            id: 1,
            name: "Heavy-Pistol"
          }
        ])
      }

    }
    
    
    let gameView;

    if (step === 0) {
      gameView = <CharacterBuilder 
                    initializePlayer = {initializePlayer}
                    setStep = { setStep }
                    />
    } else if(step ===1) {
      gameView = <div>HERE</div>
    }

  return (
    <div>
      <div>STEP: {step}</div>
        {gameView}
        <PlayerStats  
          playerClass={playerClass} 
          inventory={inventory}
          />
    </div>
  );
}

export default App;
