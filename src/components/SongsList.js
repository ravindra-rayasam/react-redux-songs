import React , {Component}from 'react';
import {connect} from 'react-redux';
import {selectedSong} from '../actions'

class SongsList extends Component {

    render () {
        return <div className="ui divided list">{this.renderList()}</div>;
    } 
 
    renderList  ()  {
        return (
            this.props.songs.map((song) => {
                return (
                    <div className="item" key={song.title}> 
                        <div className="right floated ">
                            <button className="ui button primary"
                            onClick={()=>this.props.selectedSong(song)}>
                                Select
                             </button>
                        </div>
                         <div className="left floated content">
                             {song.title}
                         </div>        
                    </div>
                    ) 
                }
            )
        )
    }   
 
}
const mapsStatetoProp = (state) =>{
    //console.log(state);
    return {songs:state.song};

}
 export default connect(mapsStatetoProp,{selectedSong})(SongsList);

