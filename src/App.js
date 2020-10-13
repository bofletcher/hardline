import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Menu from '../src/components/Menu/Menu'
import CharacterBuilder from '../src/components/CharacterBuilder/CharacterBuilder'
import PlayerStats from './components/PlayerStats/PlayerStats';
import GameStart from './components/GameStart/GameStart';

function App() {

    const [playerClass, setPlayerClass] = useState(null)
    const [step, setStep] = useState(0);
    const [inventory, setInventory] = useState([])


    function startGame() {
      setStep(1)
    }

    function restartGame() {

    }

    function endGame() {

    }
    
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
      setStep(2)
    }
    
    let gameView;
    //conditional rendering
    if (step === 0) {
      gameView = <GameStart startGame={startGame}/>
    } else if(step ===1) {
      gameView = <CharacterBuilder initializePlayer = {initializePlayer}/>
    } else if (step === 2) {
      gameView = 
          <Router basename="/">
            <Menu />
              <Switch>
                <Route path="/" exact component={() => <GameStart startGame={startGame}/>}/>
                <Route path="/playerstats" exact component={() => <PlayerStats playerClass={playerClass} inventory={inventory}/>}/>
                <Route />
              </Switch>
          </Router>
    }

  return (
    <div>
      {gameView}
    </div>
  );
}

export default App;
