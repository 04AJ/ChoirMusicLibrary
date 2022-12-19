import React, { Component } from 'react';


class Song extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            song: this.props.hymn
        };
        this.handleRemove = this.handleRemove.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
    }
    handleRemove() {
        this.props.removeSong(this.props.id);
    }
    toggleForm() {
        this.setState({ isEditing: !this.state.isEditing });
    }
    handleUpdate(e) {
        e.preventDefault();
        //take new song data and pass up to parent
        this.props.updateSong(this.props.id, this.state.song);
        this.toggleForm();

    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        let result;
        if (this.state.isEditing) {
            result = (
                <div>
                    <form onSubmit={this.handleUpdate}>
                        <input type='text' value={this.state.song} name='song' onChange={this.handleChange}></input>
                        <button >Save</button>
                    </form>
                </div>
            )
        }
        else {
            return (
                <div>
                    <button onClick={this.toggleForm}>Edit</button>
                    <button onClick={this.handleRemove}>X</button>
                    <li>{this.props.hymn}</li>
                </div>
            )
        }
        return result;

    }
}
export default Song;