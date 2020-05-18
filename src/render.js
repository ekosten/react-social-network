import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addNewMessage} from "./state";

export let renderEntireDocument = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addNewMessage={addNewMessage} />
        </React.StrictMode>,
        document.getElementById('root')
    );
}
