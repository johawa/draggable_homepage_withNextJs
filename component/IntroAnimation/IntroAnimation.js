import React, { Component } from "react";
import Typist from "react-typist";

import "../../css/IntroAnimation.css";

export default class LoadingAnimation extends Component {
  state = {
    headerDone: false
  };
  onHeaderTyped = () => {
    this.setState({ headerDone: true });
  };

  render() {
    return (
      <div className="loadingAnimation-Wrapper">
        <div>
          <div className="fakeMenu">
            <div className="fakeButtons fakeClose" />
            <div className="fakeButtons fakeMinimize" />
            <div className="fakeButtons fakeZoom" />
          </div>
          <div className="fakeScreen">
            <Typist
              avgTypingSpeed={40}
              cursor={{ hideWhenDone: true }}
              onTypingDone={this.onHeaderTyped}
            >
              <span className="my-custom-class">>&nbsp; $ npm start</span>
            </Typist>
            <br />
            {this.state.headerDone ? (
              <span style={{ color: "yellow" }}>
                >&nbsp; starting Emulator &nbsp;
              </span>
            ) : null}
            <Typist
              avgTypingSpeed={40}
              startDelay={1200}
              cursor={{ show: false }}
            >
              <br />
              <Typist.Delay ms={200} cursor={{ show: false }} />
              <span>>&nbsp; .</span>
              <Typist.Delay ms={200} cursor={{ show: false }} />
              <span>.</span>
              <Typist.Delay ms={200} cursor={{ show: false }} />
              <span>.</span>
            </Typist>
          </div>
        </div>
      </div>
    );
  }
}
