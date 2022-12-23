import React, { useState } from 'react'
import NewSongForm from './NewSongForm'
import Song from './Song'

function SongList() {
    const [songs, setSongs] = useState([])

    const addSong = song => {
        const newSongs = [...songs, song];
        setSongs(newSongs);
        // console.log(...songs, song);
    }



    const removeSong = id => {
        const removeArr = [...songs].filter(song => song.id !== id)
        setSongs(removeArr);
    }


    const editSong = (id, title, composer, _key, lyrics) => {
        const updatedSongs = songs.map(song =>
            song.id === id ? {
                title: title,
                composer: composer,
                _key: _key,
                lyrics: lyrics
            } : song)

        setSongs(updatedSongs);
    };


    return (
        <div>
            <NewSongForm onSubmit={addSong} />
            {songs.map(song => (
                <Song key={song.id} song={song} removeSong={removeSong} editSong={editSong} />
            ))}


        </div>
    )


}
export default SongList;