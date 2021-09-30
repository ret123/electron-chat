import React, { useEffect } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";

import HomeView from "./view/Home";
import Navbar from "./components/Navbar";
import Settings from "./view/Settings";

import Welcome from "./view/Welcome";
import Chat from "./view/Chat";

import configureStore from "./store";
import { listenToAuthChanges } from "./actions/auth";

const store = configureStore();

export default function App() {
  useEffect(() => {
    store.dispatch(listenToAuthChanges());
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Switch>
          <div className="content-wrapper">
            <Route path="/" exact>
              <Welcome />
            </Route>
            <Route path="/home" exact>
              <HomeView />
            </Route>
            <Route path="/chat/:id">
              <Chat />
            </Route>
            <Route path="/settings">
              <Settings />
            </Route>
          </div>
        </Switch>
      </Router>
    </Provider>
  );
}
