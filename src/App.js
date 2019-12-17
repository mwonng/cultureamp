import React, { useEffect } from 'react';
import './core.scss';
import axios from 'axios';

function App() {

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_ENDPOINT}/surveys/`)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])

    return (
        <div className="App">
            <h1>The title one</h1>
        </div >
    );
}

export default App;
