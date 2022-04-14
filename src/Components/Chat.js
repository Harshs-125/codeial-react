import React, { useState } from 'react';
import '../chat.css';
import up from './assets/up.png';
import down from './assets/down.png';
function Chat(props) {
  const [chatDetails, setChatDetails] = useState({
    messages: [],
    typedMessage: '',
  });
  const [windowDetails, setWindow] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
  };
  return (
    <div className="chat-container">
      <div className="chat-header">
        Chat
        <img
          src={down}
          onClick={(e) => {
            e.preventDefault();
            setWindow(!windowDetails);
            console.log(windowDetails);
          }}
          alt="arrow"
          height={17}
        />
      </div>
      {windowDetails && (
        <>
          <div className="chat-messages">
            {chatDetails.messages.map((message) => {
              <div
                className={
                  message.self
                    ? 'chat-bubble self-chat'
                    : 'chat-bubble other-chat'
                }
              >
                {message.content}
              </div>;
            })}
          </div>
          <div className="chat-footer">
            <input
              type="text"
              value={chatDetails.typedMessage}
              onChange={(e) => {
                setChatDetails({
                  typedMessage: e.target.value,
                });
              }}
            />
            <button onClick={handleClick}>Send</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Chat;
