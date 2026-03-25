import React from 'react';
import SelectedPlayer from './SelectedPlayer';

const SelectedPlayers = ({selectedPlayers , setSelectedPlayers , coins, setCoins}) => {

    console.log(selectedPlayers);
    
    return (
        <div className='space-y-4'>
            {
                selectedPlayers.map((selectedPlayer , index ) => <SelectedPlayer key={index} selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} selectedPlayer={selectedPlayer} coins={coins} setCoins={setCoins}/> )
            }
        </div>
    );
};

export default SelectedPlayers;