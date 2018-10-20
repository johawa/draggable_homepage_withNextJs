//servers as App like app Component in React

import React, { Component } from "react";
import { Provider } from "../context";
import "../css/App.css";

import Layout from "../hoc/Layout/Layout";
import IntroAnimation from "../component/IntroAnimation/IntroAnimation";
import { isBrowser, isMobile } from "react-device-detect";

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
    if (isBrowser) {
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
    if (isMobile) {
      return <div>Sry this beauty is only visible on Desktop !</div>;
    }
  }
}

/* let { loaded } = this.state;
return loaded ? (
  <Provider>
    <React.Fragment>
      <Layout />
    </React.Fragment>
  </Provider>
) : (
  <IntroAnimation />
); */
