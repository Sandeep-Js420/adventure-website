//creating reducers we have 2 reducer first one that is going to return static list of ong

//and the second one that is going to allow our user to select a very specific song once they click.

const songReducer=()=>{
    return[
        {title:'Hotel California' ,duration:'6:30' },
        {title:'let me love you' ,duration:'4:30' },
        {title:'secy aa' ,duration:'4:30' },
        {title:'Hotel California' ,duration:'6:30' }
    ]
};

const selectedSongReducer=(selectedSong=null,action)=>{
     if(action.type==='SONG_SELECTED'){
         return action.payload;
     }
     return selectedSong;
}