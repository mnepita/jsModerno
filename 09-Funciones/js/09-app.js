// Metodos de propiedad//

//playlist


//Tracks
const track_001 = {
    title:'Entre Dos Tierras',
    artist:'Heroes del Silencio',
    album:'Senderos de Traicion'
}
const track_001_002 = {
    title:'Eye in the sky',
    artist:'Alan Parson',
    album:'Eye in the sky'
}
const track_002 = {
    title:'Element',
    artist:'Kendrick Lamar',
    album:'D.N.A.'
}

//Player
const player = {
    play: function(track){
        console.log(`Reproduciendo... '${track.title}' by '${track.artist}'`);
    },
    pause: function(track){
    console.info(`${track.title} Pausada`);
    },
    delete: function(track){
        console.error(`...Deleting track ${track.title}`)
    },
    createPlaylist:function(playlistName){
            console.log(`creando playlist ${playlistName}`);
        },
    playlist:function(playlistName){
        console.log(`Reproduciendo playlist ${playlistName}`);
    },
}

player.play(track_001);
player.pause(track_001);

player.play(track_001);
player.pause(track_001);

player.delete(track_001);

// playlist
player.createPlaylist('Prog');
player.playlist('Heavy Metal');
