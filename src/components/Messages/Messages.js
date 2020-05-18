import React from "react";
import Message from "./Message/Message";
import NewMessageForm from "./AddMessage/AddMessage";

const Messages = (props) => {
    const messages = props.messages.map( el => <Message text={el.msgText} />)
    return (
        <div className="mainContent">
            <h2>Messages:</h2>
            <ul>
                {messages}
            </ul>
            <hr/>
            <NewMessageForm addNewMessage={props.addNewMessage}/>
        </div>
    )
}

export default Messages
