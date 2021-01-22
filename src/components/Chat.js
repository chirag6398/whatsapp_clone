import React, { useEffect, useState } from "react";
import chatStyle from "../styles/chat.module.css";
import AttachFile from "@material-ui/icons/AttachFile";
import { Avatar, IconButton } from "@material-ui/core";
import MoreVert from "@material-ui/icons/MoreVert";
import SearchOutLined from "@material-ui/icons/SearchOutlined";
import MicIcon from "@material-ui/icons/MicNoneOutlined";
import SentimentVerySatisfiedIcon from "@material-ui/icons/SentimentVerySatisfied";
export default function Chat() {
  const [seed, setSeed] = useState("");
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);
  return (
    <div className={chatStyle.chat_container}>
      <div className={chatStyle.chat_header}>
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className={chatStyle.header_info}>
          <h3>username</h3>
          <p>Last seen...</p>
        </div>
        <div className={chatStyle.header_right}>
          <IconButton>
            <SearchOutLined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className={chatStyle.chat_body}>
        <p className={`${chatStyle.message} ${true && chatStyle.receiver}`}>
          <span
            style={{
              position: "absolute",
              top: "-23px",
              fontWeight: "800",
            }}
          >
            userName
          </span>
          hello hey guys
          <span
            style={{
              opacity: "0.8",
              fontSize: "small",
              fontWeight: "700",
              marginLeft: "10px",
            }}
          >
            4:30 pm
          </span>
        </p>
        <p className={`${chatStyle.message} ${true && chatStyle.receiver}`}>
          <span
            style={{
              position: "absolute",
              top: "-23px",
              fontWeight: "800",
            }}
          >
            userName
          </span>
          hello hey guys
          <span
            style={{
              opacity: "0.8",
              fontSize: "small",
              fontWeight: "700",
              marginLeft: "10px",
            }}
          >
            4:30 pm
          </span>
        </p>
      </div>
      <div className={chatStyle.chat_footer}>
        <form>
          <input type="text" placeholder="enter yor message..." />
          <button>Send a message</button>
        </form>
        <SentimentVerySatisfiedIcon />
        <MicIcon />
      </div>
    </div>
  );
}
