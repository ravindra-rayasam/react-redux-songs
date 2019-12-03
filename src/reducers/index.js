import React from 'react';
import {combineReducers} from 'redux'; 

const songsReducer = () => {
    return [
        {title:'Selena : Lose you to Love me', duration:'3.05' },
        {title :"Kesha : Tonight I'mma fight", duration:'4.50'},
        {title:'Tones and I : Never seen the rain',duration:'2.35'},
        {title:'Kylie :Cant get you out of head',duration:'3.30'}
    ]
};

const selectedSongReducer = (selectedSong =null, action) => {
    if (action.type === 'SELECTED_SONG' ){
        return action.payload;
    }
    return selectedSong;
}

export default combineReducers ({song:songsReducer , selectedSong:selectedSongReducer });