import React from 'react';
import {ChatRightDotsFill} from "react-bootstrap-icons";

const ChatButton = () => {
    return (
        <div className={"ChatContainer"}>
          <div className={"ChatButton"}>
              <ChatRightDotsFill/>
          </div>
        </div>
    );
};

export default ChatButton;