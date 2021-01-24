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
import firebase from "firebase";
import { useStateValue } from "../StateProvider/Stateprovider";
// import userEvent from "@testing-library/user-event";
export default function Chat() {
  const [{ user }, dispatch] = useStateValue();
  const [seed, setSeed] = useState("");
  const [input, setInput] = useState("");
  const { roomId } = useParams();
  const [roomName, setRoomName] = useState();
  const [messages, setMessages] = useState([]);
  var data = [];
  useEffect(() => {
    if (roomId) {
      db.collection("rooms")
        .doc(roomId)
        .onSnapshot((snapshot) => {
          // console.log(snapshot.data().name);
          setRoomName(snapshot.data().name);
        });
      db.collection("rooms")
        .doc(roomId)
        .collection("messages")
        .orderBy("Timestamp", "asc")
        .onSnapshot((snapshot) => {
          data = snapshot.docs.map((doc) => {
            return {
              // Timestamp: new Date(doc.data().Timestamp).toString(),
              name: doc.data().name,
              message: doc.data().message,
            };
          });
          console.log(data);
          setMessages(data);
          // setMessages(
          //   snapshot.docs.map((doc) => {
          //     return doc.data();
          //   })
          // );
          // console.log()
        });
    }
  }, [roomId]);

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    db.collection("rooms").doc(roomId).collection("messages").add({
      message: input,
      name: user.displayName,
      Timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  };
  return (
    <div className={chatStyle.chat_container}>
      <div className={chatStyle.chat_header}>
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className={chatStyle.header_info}>
          <h3>{roomName}</h3>
          <p>Last seen at{new Date().toLocaleTimeString()}</p>
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
        {messages.map((message) => {
          return (
            <p
              className={`${chatStyle.message} ${
                message.name === user.displayName && chatStyle.receiver
              }`}
            >
              <span
                style={{
                  fontWeight: "700",
                  fontSize: "13px",
                  marginBottom: "5px",
                }}
              >
                {message.name}
              </span>
              {message.message}
              <span
                style={{
                  opacity: "0.5",
                  fontSize: "small",
                  fontWeight: "600",
                  marginLeft: "10px",
                  display: "flex",
                  flexDirection: "row-reverse",
                }}
              >
                4:00 pm
                {/* {new Date(message.Timestamp?.toDate().toUTCString())} */}
              </span>
            </p>
          );
        })}
      </div>
      <div className={chatStyle.chat_footer}>
        <SentimentVerySatisfiedIcon style={{ color: "gray" }} />
        <form>
          <input
            type="text"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
            placeholder="enter yor message..."
          />
          <button type="submit" onClick={sendMessage}></button>
        </form>

        <MicIcon style={{ color: "gray" }} />
      </div>
    </div>
  );
}
