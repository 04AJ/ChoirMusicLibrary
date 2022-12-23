import React, { useState } from 'react'

function NewSongForm(props) {
    const [input, setInput] = useState({
        title: props.title,
        composer: props.composer,
        _key: props._key,
        lyrics: props.lyrics

    });
    const [id, setId] = useState(0);

    const handleTitleChange = e => {
        setInput({ ...input, title: e.target.value })
    }
    const handleComposerChange = e => {
        setInput({ ...input, composer: e.target.value })
    }
    const handleKeyChange = e => {
        setInput({ ...input, _key: e.target.value })
    }
    const handleLyricsChange = e => {
        setInput({ ...input, lyrics: e.target.value })
    }
    const handleSubmit = e => {
        e.preventDefault();
        let num = id + 1;
        setId(num);
        props.onSubmit({
            id: id,
            title: input.title,
            composer: input.composer,
            _key: input._key,
            lyrics: input.lyrics

        })
        setInput({
            title: "",
            composer: "",
            _key: "",
            lyrics: ""
        });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='title' value={input.title} name='text' className='input-title' onChange={handleTitleChange}></input>
                <input type='text' placeholder='composer' value={input.composer} name='text' className='input-composer' onChange={handleComposerChange}></input>
                <input type='text' placeholder='key' value={input._key} name='text' className='input-key' onChange={handleKeyChange}></input>
                <input type='text' placeholder='lyrics' value={input.lyrics} name='text' className='input-lyrics' onChange={handleLyricsChange}></input>

                <button>Submit</button>
            </form>

        </div>
    )
}
export default NewSongForm;