import React from 'react';
import {connect} from 'react-redux';

const SongDetails = (props) => {
    if (!props.selectedSong){
       return  <div>Choose a song for displaying details</div>;
    }    
    else    { 
        return (
            <div>
                <h3> The details of the song chosen<br/></h3>    
                    Title : {props.selectedSong.title}
                    <br/>
                    Duration : {props.selectedSong.duration}
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {selectedSong: state.selectedSong}; 
} 
export default connect(mapStateToProps)(SongDetails);