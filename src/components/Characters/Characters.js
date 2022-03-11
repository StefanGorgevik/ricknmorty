import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import "./Characters.css";

import Character from "../Character/Character";

const Characters = () => {
  console.log("characters");
  const { state, clickedCharacterHandler } = useContext(GlobalContext);
  let content = (
    <div className="loader-wrapper">
      <div className="lds-hourglass"></div>
    </div>
  );

  if (!state.isLoading && state.characters && state.info) {
    content = state.characters.map((char) => {
      return (
        <Character
          click={() => clickedCharacterHandler(char)}
          key={char.id}
          id={char.id}
          char={char}
        />
      );
    });
  }

  return (
    <div className="characters">
      <div className="chars-content">{content}</div>
    </div>
  );
};

export default React.memo(Characters);
