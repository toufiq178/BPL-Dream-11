import React from "react";
import Card from "../ui/Card";

const Player = ({ players , coins , setCoins , selectedPlayers , setSelectedPlayers }) => {



  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {players.map((player, index) => (
        <Card key={index} player={player} coins={coins} setCoins={setCoins} selectedPlayers={selectedPlayers} setSelectedPlayers = {setSelectedPlayers} />
      ))}
    </div>
  );
};

export default Player;
