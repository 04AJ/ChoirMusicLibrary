import React, { useState, useEffect } from "react";
import axios from "axios";


function Intro() {
    const [data, setData] = useState([{}]);

    let list = ["/song/1",
        "/song/2",
        "/song/3",
        "/song/4",
    ];

    useEffect(() => {

        const requests = list.map((endpoint) => axios.get(endpoint));
        axios.all(requests).then((responses) => {
            responses.forEach((res) => {
                setData(res.data);
            })
        }).catch((error) => {
            console.error(error);
        });
    }, [])

    return (
        <div>
            <h1>Introduction Songs</h1>

            {(typeof data === 'undefined') ? (
                <p>Loading...</p>
            ) : (

                <ul>
                    <li key={data.id}>{data.title} {data.composer} {data.key}</li>
                </ul>




            )}
        </div>
    );
}


export default Intro;
