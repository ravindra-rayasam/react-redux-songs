import React , {Component}from 'react';
import {connect} from 'react-redux';

class SongsList extends Component {

    render () {
        return (
            <div>SongsList</div>
        );
    }    
}

const mapsStatetoProp = (state) =>{
    console.log(state.song);
    return {songs:state.song};

}
 export default connect(mapsStatetoProp)(SongsList);

