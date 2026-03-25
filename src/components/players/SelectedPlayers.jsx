import React from "react";
import SelectedPlayer from "./SelectedPlayer";

const SelectedPlayers = ({
  selectedPlayers,
  setSelectedPlayers,
  coins,
  setCoins,
}) => {


  console.log(selectedPlayers);

  return (
    <div>

        {
            selectedPlayers.length === 0 ? 
            
            <div>

                <div className="min-h-40 flex justify-center items-center">
                    <h1 className="font-bold text-4xl"> No player available</h1>
                </div>
            </div> 
            
            
            : 
            
            <div className="space-y-4">
        {selectedPlayers.map((selectedPlayer, index) => (
          <SelectedPlayer
            key={index}
            selectedPlayers={selectedPlayers}
            setSelectedPlayers={setSelectedPlayers}
            selectedPlayer={selectedPlayer}
            coins={coins}
            setCoins={setCoins}
          />
        ))}
      </div>
        }


      
    </div>
  );
};

export default SelectedPlayers;
