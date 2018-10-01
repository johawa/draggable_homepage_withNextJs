import React from "react";
//Download Image
import domtoimage from "dom-to-image";
import saveAs from "file-saver";

import "./Paint.css";

const amountCells = 625; //25 * 25

const colors = [
  "rgb(148, 29, 43)",
  "rgb(255, 229, 0)",
  "rgb(180, 143, 128)",
  "rgb(150, 187, 206)",
  "rgb(199, 197, 185)",
  "rgb(42, 69, 138)",
  "rgb(130, 129, 134)",
  "rgb(116, 116, 118)",
  "rgb(243, 253, 254)",
  "rgb(68, 72, 82)"
];

var Cell = props => {
  return <div className={`GridCell cell${props.nr}`} onClick={props.fill} />;
};

var Color = props => {
  return (
    <div
      className="ColorCell"
      onClick={props.chooseColor}
      style={{ backgroundColor: props.color, outline: props.choosen }}
    />
  );
};
var Button = props => {
  return (
    <button className="button" onClick={props.ClickButton}>
      {props.title}
    </button>
  );
};

class Paint extends React.Component {
  constructor() {
    super();
    this.state = {
      lenght: new Array(amountCells).fill(0),
      currentColor: "white",
      reset: false
    };
  }

  handleMouseClick(index, event) {
    console.log(event.currentTarget);
    let el = event.currentTarget;
    if (el.style.backgroundColor === this.state.currentColor) {
      el.style.backgroundColor = "grey";
    } else {
      el.style.backgroundColor = this.state.currentColor;
    }
  }

  changeColor(event) {
    let el = event.currentTarget;
    this.setState({
      currentColor: el.style.backgroundColor
    });
  }

  resteHanlder(event) {
    this.setState({
      reset: true
    });
    const Cells = document.getElementsByClassName("GridCell");

    let CellsArr = Array.from(Cells);
    CellsArr.forEach(el => {
      el.removeAttribute("style");
    });
  }

  downloadLink(event) {
    domtoimage
      .toBlob(document.getElementById("draw-wrapper"))
      .then(function(blob) {
        window.saveAs(blob, "My_Art.png");
      });
  }

  render() {
    return (
      <React.Fragment>
        <div id="draw-wrapper">
          <div
            className="container"
            style={{ backgroundColor: this.state.currentColor }}
          >
            {this.state.lenght.map((item, index) => {
              return (
                <Cell
                  key={index}
                  nr={this.state.reset ? `_afterreset_${index}` : index}
                  fill={event => this.handleMouseClick(index, event)}
                />
              );
            })}
          </div>
        </div>
        <div className="colorpicker">
          {colors.map((clr, index) => {
            return (
              <Color
                key={index}
                color={clr}
                chooseColor={event => this.changeColor(event)}
                choosen={
                  this.state.currentColor === clr ? "5px solid lime" : null
                }
              />
            );
          })}
        </div>
        <div className="button-box">
          <Button
            ClickButton={event => this.resteHanlder(event)}
            title={this.state.reset ? "RESET" : "BEGIN TO DRAW"}
          />
        </div>
        <div className="button-box__save">
          <Button
            ClickButton={event => this.downloadLink(event)}
            title={"Download"}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default Paint;
