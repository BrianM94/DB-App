import React from "react";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import { Characters } from "../models/Characters";

const CharacterScreen = () => {
  const { id } = useParams();

  const { type, name, description } = Characters.find(
    (character) => character.id === id
  );

  const path = `/assets/${type}-${id}.png`;

  const history = useHistory();

  const handleBack = () => {
    history.goBack();
  };

  return (
    <div className="container row mt-5">
      <div className="col-8">
        <img
          className="img-thumbnail"
          src={path}
          alt={id}
          style={{ width: "40%", height: "800px" }}
        />
      </div>
      <div className="col-4">
        <h2>Nombre: {name}</h2>
        <p>Descripción: {description}</p>
        <button onClick={handleBack} className="btn btn-outline-danger">
          Go Back
        </button>
      </div>
    </div>
  );
};

export default CharacterScreen;
