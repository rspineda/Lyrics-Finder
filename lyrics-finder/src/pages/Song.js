import React from 'react';
import {Link, useParams} from 'react-router-dom'

const Cancion = () => {
    let {id} = useParams();

    return (
        <div>
            <h2>Canción {id}</h2>
        </div>
    )
}

export default Cancion;
