import React, { Component } from "react";

import { Consumer } from "../../../context";

class NavItem_AppTracker extends Component {
  closeAppHandler(items, dispatch, title) {
    const updatedItems = [...items];
    let ItemToUpdate = updatedItems.find(item => {
      return item.name === title;
    });
    ItemToUpdate.visible = false;
    dispatch({
      type: "OPEN_APP",
      payload: updatedItems
    });
  }

  render() {
    let button_title;
    let title;
    let checker = false;

    return (
      <Consumer>
        {value => {
          const { dispatch, items, focusedFrameId, lastOpenID } = value;
          {
            //Check if there is an App opened but none Fucused
            const itemOpen = items.filter(item => item.visible === true);
            //Check wich of the opened Apps is Selected
            const itemSelected = itemOpen.filter(
              item => item.id === focusedFrameId
            );
            //Check if none is selected but more then 0 opened
            if (itemSelected.length === 0 && itemOpen.length > 0) {
              //this is not right, due to close apps
              title = items[lastOpenID].name;
              button_title = (
                <button className="Dropdown-Btn App_desc">{title}</button>
              );
              checker = true;
            }
            //Choose wich of the opened Apps are selected
            if (itemSelected.length > 0 && itemOpen.length > 0) {
              title = itemSelected[0].name;
              button_title = (
                <button className="Dropdown-Btn App_desc">{title}</button>
              );
              checker = true;
            }
            //none selected and none open
            if (itemSelected.length === 0 && itemOpen.length === 0) {
              title = "This is the Webpage of Johannes Walenta";
              button_title = (
                <button className="Dropdown-Btn_blank">{title}</button>
              );
              checker = false;
            }
          }

          return (
            <div className="Dropdown">
              {button_title}

              {checker ? (
                <div className="Dropdown-Content">
                  <a
                    href="#"
                    onClick={this.closeAppHandler.bind(
                      this,
                      items,
                      dispatch,
                      title
                    )}
                  >
                    Quit
                  </a>
                </div>
              ) : (
                <React.Fragment />
              )}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default NavItem_AppTracker;
