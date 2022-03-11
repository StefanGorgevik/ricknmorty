import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import "./Characters.css";

import Character from "../Character/Character";

const Characters = () => {
  const { state } = useContext(GlobalContext);
  if (state.isLoading)
    return (
      <div className="loader-wrapper">
        <div className="lds-hourglass"></div>
      </div>
    );

  return (
    <div className="chars-content">
      {state.characters &&
        state.info &&
        state.characters.map((char) => (
          <Character key={char.id} id={char.id} char={char} />
        ))}
    </div>
  );
};

export default React.memo(Characters);
