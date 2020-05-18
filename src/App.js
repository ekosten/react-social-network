import React from 'react';
import './App.css';
import Messages from "./components/Messages/Messages";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import {BrowserRouter, Route} from "react-router-dom";
import Profile from "./components/Profile/Profile";

function App(props) {
    return (
        <BrowserRouter >
            <div className="App">
                <Header />
                <div className="app-wrapper app-body">
                    <Navigation navItems={props.state.navItems} />
                    <Route path="/profile" component={ () => <Profile /> } />
                    <Route path="/messages" component={ () => <Messages messages={props.state.messages} addNewMessage={props.addNewMessage} /> } />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
