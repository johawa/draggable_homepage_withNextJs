import { createForm, createFactory, createField } from "micro-form";

import React, { Component } from "react";
import Head from "next/head";
import "isomorphic-fetch";

// App Specific
//import Layout from 'layout'

//import ProgressButton from 'component/ProgressButton'

/* import {
  Form,
  Input
} from 'components/forms/index' */

class Contact extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      submitting: false,
      submitted: false,
      value: ""
    };
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  submitForm(data) {
      console.log(typeof data)
    fetch("/api/contact", {
      method: "post",
      headers: {
        'Accept': "application/json, text/plain, */*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({data})
    }).then(res => {
      res.status === 200 ? this.setState({ submitted: true }) : "";
    });
  }
  render() {
    return (
      <div>
        <form
          className="board-form"
          onSubmit={e => {
            e.preventDefault();
            this.submitForm(this.state.value);
          }}
        >
          <h2>Contact</h2>
          <div className="f fw grid-row--s">
            <div className="mb1 pb05">
              <input
                name="name"
                label="Name"
                required
                value={this.state.value}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div>
            <button type="submit">Send</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Contact;
