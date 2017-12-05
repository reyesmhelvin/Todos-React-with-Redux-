import React from 'react'

const Message = ({message}) => {
    return message ? <span class="message">{message}</span> : null;
}

export default Message;