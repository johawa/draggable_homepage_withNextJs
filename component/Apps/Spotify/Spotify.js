import React, { Component } from "react";
import queryString from "query-string";
import PropTypes from "prop-types";

class Spotify extends Component {
  state = {
    access_token: ""
  };

  componentDidMount() {
    const parsed = queryString.parse(window.location.search);
    const token = parsed.access_token;
    this.setState({
      access_token: token
    });
    if (token === undefined || token === null || token === "") {
      console.log("token_error");
    }
  }

  getIframelyHtml() {
    const { access_token } = this.state;
    return {
      __html: `<iframe height=550 width=800 src=http://localhost:3001/?access_token=${access_token} />`
    };
  }
  render() {
    //return <div dangerouslySetInnerHTML={this.getIframelyHtml()} />;
    return (
      <div>
        <a href="https://spotify-login-backend.herokuapp.com/">Login</a>
        <div dangerouslySetInnerHTML={this.getIframelyHtml()} />
      </div>
    );
  }
}
Spotify.propTypes = {
  access_token: PropTypes.string
};
export default Spotify;
