import React, { Component } from 'react';
import Song from './Song';
import NewSongForm from './NewSongForm';


class SongList extends Component {
    //add constructor if component has state
    constructor(props) {
        super(props);
        //setting initial state
        this.state = {
            songs: []
        };
        this.create = this.create.bind(this);
        this.remove = this.remove.bind(this);
        this.update = this.update.bind(this);

    }
    create(song) {
        this.setState({
            songs: [...this.state.songs, song]
        })
    }
    remove(id) {
        this.setState({
            songs: this.state.songs.filter(s => s.id !== id)
        });
    }
    update(id, updatedSong) {
        const updatedSongs = this.state.songs.map(song => {
            if (song.id === id) {
                return { ...song, hymn: updatedSong }
            }
            return song;
        });
        this.setState({ songs: updatedSongs });
    }
    render() {
        const songs = this.state.songs.map(song => {
            return <Song key={song.id} id={song.id} hymn={song.hymn} removeSong={this.remove} updateSong={this.update} />

        })
        return (
            <div>
                <NewSongForm createSong={this.create} />
                <ul> {songs} </ul>

            </div>
        );
    }
}

export default SongList;