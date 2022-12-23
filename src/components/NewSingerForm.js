import React, { Component } from 'react';
//paths without . or / immediately point to nodemodule library
// import uuid from "uuid/v4";

class NewSongForm extends Component {


    constructor(props) {
        super(props);
        this.state = { hymn: "", num: 0 }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        //prevents page from reloading
        e.preventDefault();
        this.props.createSong({ ...this.state, id: this.state.num++ });
        this.setState({ hymn: "" });
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor='hymn'>New Song</label>
                <input type='text' placeholder='New Song' id='hymn' value={this.state.hymn} name='hymn' onChange={this.handleChange} />
                <button>Add Song</button>
            </form>
        )
    }
}
export default NewSongForm;