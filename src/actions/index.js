//action creators for select song 
//action creator

/**
 * @author:Sandeep kumar jena. 
 * */ 
export const selectSong=(song)=>{
    //return an action
    return{
        type:'SONG_SELECTED',
        payload:song

    }
}