import React, { Component } from "react";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREASE_COUNTER":
      return {
        ...state,
        counter: state.counter + action.payload
      };
    case "OPEN_APP":
      return {
        ...state,
        items: action.payload
      };
    case "CLOSE_ALL_APPS":
      return {
        ...state,
        items: action.payload
      };
    case "CHANGE_FRAME_POSITION":
      return {
        ...state,
        items: action.payload
      };
    case "TOGGLE_FRAME_SIZE":
      return {
        ...state,
        items: action.payload
      };
    case "TOGGLE_FRAME_SIZE_2":
      return {
        ...state,
        items: action.payload
      };
    case "FOCUS_FRAME":
      return {
        ...state,
        focusedFrameId: action.payload
      };

    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    background: [
      "linear-gradient(to right, #0099f7, #f11712)",
      "#008081",
      "yellow"
    ],
    counter: 0,
    lastOpenID: 0,
    items: [
      {
        id: 0,
        name: "My Work",
        top: 100,
        left: 950,
        width: 400,
        height: 300,
        scale: 1,
        minimized: false,
        visible: false,
        color: "#0004FF"
      },
      {
        id: 1,
        name: "Paint.exe",
        top: 80,
        left: 450,
        width: 402,
        height: 450,
        scale: 1,
        minimized: false,
        visible: false,
        color: "#6cc3af"
      },
      {
        id: 2,
        name: "Spotify.exe",
        top: 250,
        left: 630,
        width: 800,
        height: 600,
        scale: 1,
        minimized: false,
        visible: false,
        color: "#EA1B19"
      },
      {
        id: 3,
        name: "AboutMe.txt",
        top: 295,
        left: 260,
        width: 650,
        height: 450,
        scale: 1,
        minimized: false,
        visible: false,
        color: "#FFF200"
      },
      {
        id: 4,
        name: "Contact.mail",
        top: 180,
        left: 530,
        width: 600,
        height: 400,
        scale: 1,
        minimized: false,
        visible: false,
        color: "#FFF200"
      }
    ],
    focusedFrameId: null,
    dispatch: action => this.setState(state => reducer(state, action))
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
