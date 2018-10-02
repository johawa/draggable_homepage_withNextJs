import React, { Component } from "react";

import { Consumer } from "../../../context";

class NavItem_Start extends Component {
  state = {
    toggler: false
  };

  openApp(dispatch, items, value, id) {
    value.lastOpenID = id;
    const updatedItems = [...items];
    let ItemToUpdate = updatedItems.find(item => {
      return item.id === id;
    });

    ItemToUpdate.visible = true;
    dispatch({
      type: "OPEN_APP",
      payload: updatedItems
    });
  }

  closeWindow() {
    console.log("close window");
    window.close();
  }
  render() {
    return (
      <Consumer>
        {value => {
          const { dispatch, items } = value;
          return (
            <div
              className="Dropdown"
              onMouseEnter={() => this.setState({ toggler: true })}
              onMouseLeave={() => this.setState({ toggler: false })}
            >
              <button
                className="Dropdown-Btn"
                style={{
                  background: this.state.toggler
                    ? "#B68282"
                    : "linear-gradient(to right, #0099f7, #f11712)",
                  backgroundSize: "150% 150%",
                  backgroundPosition: "center",
                  paddingRight: "45px",
                  paddingLeft: "40px"
                }}
              >
                Johannes Walenta
              </button>
              <div
                className="Dropdown-Content"
                style={{ width: "100%", textAlign: "start" }}
              >
                <a
                  style={{ paddingLeft: "25px" }}
                  href="#"
                  onClick={this.openApp.bind(this, dispatch, items, value, 3)}
                >
                  {" "}
                  About Me
                </a>
                <hr />
                <a
                  style={{ paddingLeft: "25px" }}
                  href="https://codepen.io/timebasher/"
                  target="_blank"
                >
                  {" "}
                  CodePen
                </a>
                <a
                  style={{ paddingLeft: "25px" }}
                  href="https://github.com/timebasher"
                  target="_blank"
                >
                  {" "}
                  Github
                </a>
                <a style={{ paddingLeft: "25px" }} href="#">
                  {" "}
                  Email
                </a>
                <hr />
                <a
                  style={{ paddingLeft: "25px" }}
                  href="#"
                  onClick={this.closeWindow.bind(this)}
                >
                  {" "}
                  Shut Down
                </a>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default NavItem_Start;
