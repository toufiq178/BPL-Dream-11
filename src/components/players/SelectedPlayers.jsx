import React from 'react';
import SelectedPlayer from './SelectedPlayer';

const SelectedPlayers = ({selectedPlayers}) => {

    console.log(selectedPlayers);
    
    return (
        <div className='space-y-4'>
            {
                selectedPlayers.map((selectedPlayer , index ) => <SelectedPlayer key={index} selectedPlayer={selectedPlayer}/> )
            }
        </div>
    );
};

export default SelectedPlayers;