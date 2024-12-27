import React from "react";
import "./Message.css";
import { Avatar} from "@mui/material";

const Message = ({ picLink, name, content, date }) => {
  return (

    <div className="message-container">

        <Avatar alt="Profile" src={picLink} sx={{ width: 50, height: 50 }}  className="avatar-circle"/>

        <div className="message-content">

            <div className="message-header">
                <span className="name">{name}</span>
            </div>

            <div className="message-text">
                <span>{content}</span>
            </div>

            <div className="message-footer">
                <span className="date">{date}</span>
            </div>

        </div>

        <div className="close-icon">&#x2716;</div>

    </div>

  );
};

export default Message;
