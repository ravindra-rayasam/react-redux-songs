// Action creator
export const selectedSong = (song) =>{
    // Return an Action.
    return  {
        type:'SELECTED_SONG',
        payload:song
    }

    ;
};

