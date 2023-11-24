import React from "react";
import { useState } from "react";
import PlayerInput from "./components/PlayerInput";
import { AiOutlinePlusCircle } from "react-icons/ai";
import "./Main.css";
import Pile from "./components/Pile";

function Main() {
  const [isStarted, setIsStarted] = useState(false);
  const [players, setPlayers] = useState(["player1", "player2"]);

  const addPlayer = (e) => {
    e.preventDefault();
    setPlayers([...players, ""]);
    console.log(players);
  };
  const sumPlayers = (e) => {
    e.preventDefault();
    setIsStarted(true);
    console.log(players);
  };

  return (
    <div>
      {!isStarted ? (
        <form className="players-input">
          {players.map((player, i, arr) => {
            return (
              <div key={i} className="single-player">
                <PlayerInput
                  num={i}
                  players={players}
                  setPlayers={setPlayers}
                />
              </div>
            );
          })}
          <button id="add-player" onClick={addPlayer}>
            <abbr title="הוסף שחקן">
              {" "}
              <AiOutlinePlusCircle />
            </abbr>
          </button>
          <button id="approval-button" onClick={sumPlayers}>
            אישור
          </button>
        </form>
      ) : (
        <><Pile/></>
      )}
    </div>
  );
}

export default Main;
