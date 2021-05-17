//Refactoring - Metodos de propiedad//

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

const player = {
    cancion:'',
    play: track => console.log(`Reproduciendo... '${track.title}' by '${track.artist}'`),
    pause: () => console.info(`Pausada`),
    delete: track => console.error(`...Deleting track ${track.title}`),
    createPlaylist: playlistName => console.log(`creando playlist ${playlistName}`),
    playlist: playlistName =>console.log(`Reproduciendo playlist ${playlistName}`),
    set nuevaCancion(cancion){
        this.cancion = cancion;
        console.log(`Agregando cancion...${this.cancion}`);
    },
    get obtenerCancion() {
        console.log(`${this.cancion}`);
    }
}

player.nuevaCancion = 'Maldito Duende';
player.obtenerCancion;

player.play(track_001);
player.pause();
player.play(track_001);
player.pause();
player.delete(track_001);
player.createPlaylist('Prog');
player.playlist('Heavy Metal');
