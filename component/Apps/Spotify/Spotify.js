import React, { Component } from "react";

class Spotify extends Component {
  componentDidMount() {
    window.iframely && iframely.load();
  }

  //THIS IS TO REMIND ME THAT IT IS A DANGEROUS CROSS ORIGIN CALL
  getIframelyHtml() {
    return {
      __html:
        '<iframe width="800px" height="550px" frameborder="0" src="https://spotify-login-backend.herokuapp.com/" />'
    };
  }

  render() {
    return (
      <div>
        <div>
          <div dangerouslySetInnerHTML={this.getIframelyHtml()} />
        </div>
      </div>
    );
  }
}
export default Spotify;
