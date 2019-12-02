import React from "react";
import Home from "./pages/Home";
import Error from "./pages/error";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/rooms" component={Rooms} />
          <Route exact path="/rooms/:slug" component={SingleRoom} />
          <Route component={Error} />
        </Switch>
      </>
    );
  }
}

export default App;
