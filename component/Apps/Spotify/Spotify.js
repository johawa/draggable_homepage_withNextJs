import React, { Component } from "react";

import "./Spotify.css";

class Spotify extends Component {
  render() {
    return (
      <div className="wrapper_spotify_frame">
        <h1 className="h1_spotify_frame">SPOTIFY COVERFLOW.</h1>
        <h4 style={{ color: "white", fontSize: "13px" }}>
          // Works best on Chrome // Spotify doesn't support Safari //
        </h4>
        <div className="center_spotify_frame">
          <form
            action="https://spotify-login-backend.herokuapp.com/login"
            target="_blank"
          >
            <input
              className="button_spotify_frame"
              type="submit"
              value="Login With Spotify"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default Spotify;
