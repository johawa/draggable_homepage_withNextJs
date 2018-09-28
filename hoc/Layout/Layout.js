import React, { Component } from "react";
import HTML5Backend from "react-dnd-html5-backend";
import { DragDropContext } from "react-dnd";

import "../../css/Layout.css";
import OS from "../../container/OS/OS";
import Background from "../../component/DesktopLogic/Background/Background";
import Navbar from "../../component/DesktopLogic/Navbar/Navbar";

class Layout extends Component {
  render() {
    return (
      <Background>
        <div className="Container">
          <nav className="Navbar">
            <Navbar />
          </nav>
          <main className="Main">
            <OS />
          </main>
        </div>
      </Background>
    );
  }
}

export default DragDropContext(HTML5Backend)(Layout);
