import React from "react";
import Card from "../components/Card";
import { Characters } from "../models/Characters";

const WomenScreen = () => {
  const womens = Characters.filter((character) => character.type === "m");

  return (
    <div className="container mt-5">
      <h1>WoMens Screen</h1>
      <hr />
      <div className="row">
        {womens.map((women) => (
          <Card key={women.id} {...women} />
        ))}
      </div>
    </div>
  );
};

export default WomenScreen;
