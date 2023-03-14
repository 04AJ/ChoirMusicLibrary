import React, { useState, useEffect } from "react";
import SongList from "../components/SongList";

//demo song list
function Todo() {

    const [todo, setTodo] = useState([])
    useEffect(() => {
        fetch("/api").then(
            res => res.json()
        ).then(
            data => setTodo(data)
        )
    }, [])

    return (
        <div>
            <h1>Todo List</h1>
            {/* passing in list of todos as prop to song list */}
            <SongList listOfTodos={todo} />
        </div>
    );
}

export default Todo;