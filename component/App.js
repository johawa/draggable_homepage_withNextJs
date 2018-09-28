//servers as App like app Component in React

import React, { Component } from "react";
import { Provider } from "../context";
import "../css/App.css";

import Layout from "../hoc/Layout/Layout";
import IntroAnimation from "../component/IntroAnimation/IntroAnimation";

export default class Wrapper extends Component {
  state = {
    loaded: false
  };

  componentDidMount() {
    setTimeout(
      function() {
        this.setState({ loaded: true });
      }.bind(this),
      //loading Animation duration in ms
      3000
    );
  }

  render() {
    let { loaded } = this.state;
    return loaded ? (
      <Provider>
        <React.Fragment>
          <Layout />
        </React.Fragment>
      </Provider>
    ) : (
      <IntroAnimation />
    );
  }
}
