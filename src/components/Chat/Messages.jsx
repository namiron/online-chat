import React from 'react'
import chat from './Chat.module.scss'

const Messages = ({ messages, name }) => {
    return (
        <div className={chat.message}>
            {messages.map(({ user, message }, i) => {
                const itsMe = user.name.trim().toLowerCase() === name.trim().toLowerCase();
                const className = itsMe ? chat.me : chat.user;
                console.log(className);
                return (
                    <div key={i} className={`${chat.message} ${className}`}>
                        <span>{user.name}</span>
                        <p className={chat.text}>{message}</p>
                    </div>
                );
            })}
        </div>
    );
}

export default Messages;
