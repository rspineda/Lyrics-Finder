import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import {Alert, AlertTitle} from '@material-ui/lab'

const Error404 = () => {
    let url = useLocation();

    return (
        <>
            <Alert severity="error" style={{maxWidth:752, margin:'2rem auto 0'}}>
                <AlertTitle>Error 404</AlertTitle>
                <p>
                    Recurso <b><i>{url.pathname}</i></b> no encontrado
                </p>
            </Alert>
        </>

    )
}

export default Error404;