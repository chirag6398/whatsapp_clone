import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat.js";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LogIn from "./components/LogIn/Login.js";
import { useStateValue } from "./StateProvider/Stateprovider";

import { auth } from "./firebase/Firebase";
function App() {
  // const [user, setUser] = useState();
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="app">
      {!user ? (
        <LogIn />
      ) : (
        <div className="app_body">
          <BrowserRouter>
            <Switch>
              <Route exact path="/">
                <Sidebar />
              </Route>
              <Route exact path="/rooms/:roomId">
                <Sidebar />
                <Chat />
              </Route>
            </Switch>
          </BrowserRouter>
        </div>
      )}
    </div>
  );
}

export default App;
