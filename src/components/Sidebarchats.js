import React, { useState, useEffect } from "react";
import sidebarchatStyle from "../styles/sidebarchats.module.css";
import { Avatar } from "@material-ui/core";

export default function Sidebarchats({ addNewChat }) {
  const [seed, setSeed] = useState("");
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);
  const createChat = () => {
    const roomName = prompt("Please enter name for chat");
    if (roomName) {
      //database stuff
    }
  };
  return !addNewChat ? (
    <div className={sidebarchatStyle.sidebarchat_Container}>
      <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
      <div className={sidebarchatStyle.chat_info}>
        <h3 style={{ margin: "0px" }}>userName</h3>
        <p style={{ margin: "0px" }}>Last message.....</p>
      </div>
    </div>
  ) : (
    <div
      onClick={createChat}
      className={sidebarchatStyle.sidebarchat_Container}
    >
      <h2>Add new chat</h2>
    </div>
  );
}
