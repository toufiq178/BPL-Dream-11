import React from "react";
import { FaUser } from "react-icons/fa";
import { FaTrashCan } from "react-icons/fa6";


const SelectedPlayer = ({ selectedPlayer, setSelectedPlayers, selectedPlayers, coins, setCoins }) => {

    console.log(selectedPlayer);

    const handleDeleteSelectedPlayer = () => {

        const filterSelectedPlayer = selectedPlayers.filter(player => selectedPlayer.name !== player.name)
        console.log(filterSelectedPlayer);
        setSelectedPlayers(filterSelectedPlayer)
        setCoins(coins + selectedPlayer.price)
    }

  return (
    <div className="shadow-sm p-5 flex justify-between items-center rounded-md ">

      <div className="flex gap-4 items-center justify-center">
        
        <div className="w-16 h-16 flex justify-self-center">
            <img className="rounded-md object-cover" src={selectedPlayer.img} alt="" />
        </div>

        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-2">
                    <FaUser />
                    <h2 className="card-title">{selectedPlayer.name}</h2>
                  </div>
          <p className="text-gray-500">{selectedPlayer.role}</p>
        </div>

      </div>

      <div className="p-1.5 flex justify-center items-center text-red-500 rounded-md bg-red-50">
        <button onClick={()=> handleDeleteSelectedPlayer()}><FaTrashCan/></button>
      </div>

    </div>
  );
};

export default SelectedPlayer;
