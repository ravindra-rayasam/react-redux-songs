import React from 'react';

// Action creator
export const selectedSong = () =>{
    // Return an Action.
    return  {
        type:'SELECTED_SONG',
        payload:song
    }

    ;
};

