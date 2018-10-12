import React, { Component } from "react";

class SendMessageContent extends Component {
  getIframelyHtml() {
    return {
      __html:
        '<iframe width="800px" height="550px" frameborder="0" src="https://www.johannes-walenta.de/api/contact" />'
    };
  }
  render() {
    return <div dangerouslySetInnerHTML={this.getIframelyHtml()} />;
  }
}

export default SendMessageContent;
