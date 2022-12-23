import React, { useState } from 'react';
import NewSongForm from './NewSongForm';





function EditSongForm({ editSong, toggle, id, title, composer, _key, lyrics }) {


    return (
        <NewSongForm onSubmit={(e) => {

            editSong(e.id, e.title, e.composer, e._key, e.lyrics);
            toggle();
        }} id={id} title={title} composer={composer} _key={_key} lyrics={lyrics} />
    )

}
export default EditSongForm;