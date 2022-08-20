import React, { useState, useEffect } from "react";

function Intro() {
    const [data, setData] = useState([{}]);

    useEffect(() => {
        fetch("/intro").then(
            res => res.json()
        ).then(
            data => {
                setData(data)
                console.log(data)
            }
        )
    }, [])
    return (
        <div>
            <h1>Introduction Songs</h1>

            {(typeof data.introSongs === 'undefined') ? (
                <p>Loading...</p>
            ) : (
                data.introSongs.map((intro, i) => (
                    <p key={i}>{intro}</p>
                ))
            )}
        </div>
    );
}

export default Intro;