import React, { useContext } from "react";
import "./Character.css";
import { GlobalContext } from "../../context/GlobalState";

const Character = ({ char, click }) => {
  const { ui } = useContext(GlobalContext);
  return (
    <div
      style={{ backgroundColor: ui.characterBack, color: ui.color }}
      className="character"
      onClick={click}
    >
      <img src={char.image} alt="user" />
      <p className="info-p ">{char.name}</p>
      <div
        className="main-info"
        style={{ background: ui.headerBack, color: ui.color }}
      >
        <p className="char-info-p">
          <span>Species:</span>
          <span>{char.species}</span>
        </p>
        <p className="char-info-p">
          <span>Status:</span> <span>{char.status}</span>
        </p>
        <p className="char-info-p">
          <span> Location:</span> <span>{char.location.name}</span>
        </p>
        <p className="char-info-p">
          <span> Origin:</span> <span>{char.origin.name}</span>
        </p>
        <p className="char-info-p">
          <span> Gender:</span> <span>{char.gender}</span>
        </p>
      </div>
    </div>
  );
};

export default Character;
