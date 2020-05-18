const state = {
    navItems: [
        { id: 1, name: "Profile", href: "/profile" },
        { id: 2, name: "Messages", href: "/messages" },
        { id: 3, name: "Settings", href: "/settings" }
    ],
    messages: [
        { id: 1, msgText: "Message 1" },
        { id: 2, msgText: "Message 2" },
        { id: 3, msgText: "Message 3" },
        { id: 4, msgText: "Message 4" },
        { id: 5, msgText: "Message 5" },
        { id: 6, msgText: "Message 6" },
    ]
}

export let addNewMessage = (msgText) => {
    let message = {
        id: 7,
        msgText: msgText
    }
    state.messages.push(message)
}

export default state
