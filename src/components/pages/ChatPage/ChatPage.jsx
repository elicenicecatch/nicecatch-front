import { useState, useEffect, useRef } from 'react';
import './ChatPage.scss';
import ScrollToBottom from 'react-scroll-to-bottom';
import { BsSendFill } from 'react-icons/bs';

const Chat = ({ socket, username, room }) => {
  const chatContainerRef = useRef();
  const [currentMessage, setCurrentMessage] = useState('');
  const [messageList, setMessageList] = useState([]);

  const sendMessage = async () => {
    if (currentMessage !== '') {
      const messageData = {
        room: room,
        author: username,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ':' +
          new Date(Date.now()).getMinutes(),
      };

      await socket.emit('send_message', messageData);
      setMessageList((list) => [...list, messageData]);
      setCurrentMessage('');
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight + 152;
    }
  };

  useEffect(() => {
    socket.on('receive_message', (data) => {
      setMessageList((list) => [...list, data]);
    });
  }, [socket]);

  return (
    <div className="chat_window">
      <div className="chat_header">
        <p>6</p>
      </div>
      <div className="chat_body">
        <div className="message_container" ref={chatContainerRef}>
          {messageList.map((messageContent, i) => {
            return (
              <div
                key={i}
                className="message"
                id={username === messageContent.author ? 'you' : 'other'}
              >
                <div>
                  <div className="message_content">
                    <p>{messageContent.message}</p>
                  </div>
                  <div className="message_meta">
                    <p id="time">{messageContent.time}</p>
                    <p id="author">{messageContent.author}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="chat_footer">
        <input
          type="text"
          value={currentMessage}
          placeholder="메세지를 입력해주세요"
          onChange={(e) => {
            setCurrentMessage(e.target.value);
          }}
          onKeyDown={(e) => {
            e.key === 'Enter' && sendMessage();
          }}
        />
        <button onClick={sendMessage}>
          <BsSendFill />
        </button>
      </div>
    </div>
  );
};
export default Chat;
