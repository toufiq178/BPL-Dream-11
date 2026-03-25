import React, { useState } from "react";
import { FaFlag, FaUser } from "react-icons/fa";
import { toast } from "react-toastify";

const Card = ({ player, coins, setCoins, selectedPlayers, setSelectedPlayers }) => {
  const [selected, setSelected] = useState(false);

  const handleCoinSet = () => {
    const newCoins = coins - player.price;
    if (newCoins > 0) {
      setCoins(newCoins);
      toast.success(`${player.name} selected successfully!`);
    } else {
      toast.error("Not enough coins to purchase the player!");
      return;
    }
    setSelected(true);

    setSelectedPlayers([...selectedPlayers , player])
  };

  return (
    <div className="card bg-base-100  shadow-sm p-5 border border-gray-100">
      <figure>
        <img
          className="h-80 w-full object-cover rounded-lg"
          src={player.img}
          alt={player.name}
        />
      </figure>
      <div className="card-body">
        <div className="flex items-center gap-2">
          <FaUser />
          <h2 className="card-title">{player.name}</h2>
        </div>

        <div className="flex items-center justify-between ">
          <div className="flex items-center gap-2">
            <FaFlag />
            <p>{player.country}</p>
          </div>
          <button className="btn">{player.role}</button>
        </div>

        <div className="divider"></div>

        <p className="font-semibold ">Rating ({player.rating})</p>

        <div className="flex items-center justify-between ">
          <p>{player.battingStyle}</p>
          <p className="text-right">{player.bowlingStyle}</p>
        </div>

        <div className="flex items-center justify-between ">
          <p className="font-bold">Price: ${player.price} </p>
          <button onClick={handleCoinSet} disabled={selected} className="btn ">
            {selected ? "Selected" : "Choose Player"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
