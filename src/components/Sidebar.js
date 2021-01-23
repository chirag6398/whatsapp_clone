import React from "react";
import sidebarStyle from "../styles/sidebar.module.css";
import { Avatar, IconButton } from "@material-ui/core";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchOutLined from "@material-ui/icons/SearchOutlined";
import Sidebarchats from "./Sidebarchats";
import { useEffect, useState } from "react";

import { db } from "../firebase/Firebase";
export default function Sidebar() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const unSuscribe = db.collection("rooms").onSnapshot((snapshot) => {
      setRooms(
        snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            data: doc.data(),
          };
        })
      );
    });

    return () => {
      unSuscribe();
    };
  }, []);
  return (
    <div className={sidebarStyle.sidebar}>
      <div className={sidebarStyle.sidebar_header}>
        <Avatar />
        <div className={sidebarStyle.headerRight}>
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      <div className={sidebarStyle.sidebar_searchBar}>
        <div className={sidebarStyle.searchContainer}>
          <SearchOutLined />
          <input type="taxt" placeholder="search or start new chat" />
        </div>
      </div>
      <div className={sidebarStyle.sidebar_chats}>
        <Sidebarchats addNewChat />
        {rooms.map((v, i) => {
          return <Sidebarchats key={i} id={v.id} name={v.data.name} />;
        })}
      </div>
    </div>
  );
}
