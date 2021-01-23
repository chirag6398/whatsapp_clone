import React, { useState, useEffect } from "react";
import sidebarchatStyle from "../styles/sidebarchats.module.css";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";
import { db } from "../firebase/Firebase";
export default function Sidebarchats({ addNewChat, name, id }) {
  const [seed, setSeed] = useState("");
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);
  const createChat = () => {
    const roomName = prompt("Please enter name of chat room");
    if (roomName) {
      //database stuff
      db.collection("rooms").add({ name: roomName });
    }
  };
  return !addNewChat ? (
    <Link to={`/rooms/${id}`}>
      <div className={sidebarchatStyle.sidebarchat_Container}>
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className={sidebarchatStyle.chat_info}>
          <h3 style={{ margin: "0px" }}>{name}</h3>
          <p style={{ margin: "0px" }}>Last message.....</p>
        </div>
      </div>
    </Link>
  ) : (
    <div
      onClick={createChat}
      className={sidebarchatStyle.sidebarchat_Container}
    >
      <h2>Add new chat</h2>
    </div>
  );
}
