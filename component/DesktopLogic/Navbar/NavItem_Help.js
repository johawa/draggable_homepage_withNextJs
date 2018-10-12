import React, { Component } from "react";

import { Consumer } from "../../../context";

class NavItem_Help extends Component {
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

  render() {
    return (
      <Consumer>
        {value => {
          const { dispatch, items } = value;
          return (
            <div className="Dropdown">
              <button className="Dropdown-Btn">Help</button>
              <div className="Dropdown-Content">
                <a
                  href="#"
                  onClick={this.openApp.bind(this, dispatch, items, value, 4)}
                >
                  Found a Bug ? Send Message
                </a>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default NavItem_Help;
