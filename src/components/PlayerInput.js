import React from "react";
import "./PlayerInput.css";

function PlayerInput(props) {
  return (
    <div className="inputs">
      <div id="input-flex">
      <label htmlFor={`player-input${props.num}`}>הכנס שם שחקן: </label>
      <input
        id={`player-input${props.num}`}
        type="text"
        pattern=""
        onChange={(e) =>
          props.setPlayers([
            ...props.players.slice(0, props.num),
            e.target.value,
            ...props.players.slice(props.num + 1, props.players.length),
          ])
        }
      ></input>
      
      </div>
    </div>
  );
}

export default PlayerInput;
