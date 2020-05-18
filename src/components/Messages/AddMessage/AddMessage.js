import React from "react";

const NewMessageForm = (props) => {
    const textAreaElement = React.createRef();
    const addMessage = () => {
        let text = textAreaElement.current.value
        props.addNewMessage(text)
    }
    return (
        <div>
            <textarea ref={textAreaElement} name="" id="" cols="30" rows="10"></textarea>
            <button onClick={ addMessage }>Add New Message</button>
        </div>
    )
}

export default NewMessageForm
