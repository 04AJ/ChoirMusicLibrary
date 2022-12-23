import React, { useState } from 'react';
import NewSongForm from './NewSongForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import EditSongForm from './EditSongForm';




function Song({ song, removeSong, editSong }) {
    const [isEditing, toggle] = useToggle(false);


    return (


        <div>
            {isEditing ? (
                <EditSongForm editSong={editSong} toggle={toggle} id={song.id} title={song.title} composer={song.composer} _key={song._key} lyrics={song.lyrics} />
            ) : (
                <>
                    <div key={song.id}>{"Title: " + song.title + " | By: " + song.composer + " | Key: " + song._key}</div>
                    <div className='icons'>
                        <RiCloseCircleLine onClick={() => removeSong(song.id)} />
                        <TiEdit onClick={toggle} />
                    </div>
                </>
            )}

        </div>

    )

}
export default Song;

function useToggle(initialVal = false) {
    const [state, setState] = useState(initialVal);
    const toggle = () => {
        setState(!state);
    };
    return [state, toggle];
}

