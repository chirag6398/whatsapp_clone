import React, { useEffect, useState } from "react";
import chatStyle from "../styles/chat.module.css";
import AttachFile from "@material-ui/icons/AttachFile";
import { Avatar, IconButton } from "@material-ui/core";
import MoreVert from "@material-ui/icons/MoreVert";
import SearchOutLined from "@material-ui/icons/SearchOutlined";
import MicIcon from "@material-ui/icons/MicNoneOutlined";
import SentimentVerySatisfiedIcon from "@material-ui/icons/SentimentVerySatisfied";
import { useParams } from "react-router-dom";
import { db } from "../firebase/Firebase";
export default function Chat() {
  const [seed, setSeed] = useState("");
  const [input, setInput] = useState("");
  const { roomId } = useParams();
  const [roomName, setRoomName] = useState();
  console.log(roomId);
  useEffect(() => {
    if (roomId) {
      db.collection("rooms")
        .doc(roomId)
        .onSnapshot((snapshot) => {
          setRoomName(snapshot.data().name);
          console.log(snapshot.data());
        });
    }
  }, [roomName]);
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);
  const sendMessage = (e) => {
    e.preventDefault();

    setInput("");
  };
  return (
    <div className={chatStyle.chat_container}>
      <div className={chatStyle.chat_header}>
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className={chatStyle.header_info}>
          <h3>{roomName}</h3>
          <p>Last seen at...</p>
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
        <SentimentVerySatisfiedIcon />
        <form>
          <input
            type="text"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
            placeholder="enter yor message..."
          />
          <button type="submit" onClick={sendMessage}>
            Send a message
          </button>
        </form>

        <MicIcon />
      </div>
    </div>
  );
}
