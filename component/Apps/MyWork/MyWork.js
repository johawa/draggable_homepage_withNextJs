import React from "react";

import css from "./MyWork.css";

const MyWork = props => {
  return (
    <div>
      <div className="TextContainer_Heading">
        {"Hey i am Johannes"}
        <br />
        {"and maybe u've guessed it,"}
        <br />
        {"my name is"}
        <div className="TextContainer_Heading--span">{"Johannes"}</div>
      </div>
      <div className="TextContainer">
        <br />
        {"I am a Software Developer."}
        <br />
        {"Currently I am creating my Stuff with React and Next.js"}
        <br />
        {"My next Project will be a SaaS Product, to rise my Skills"}
        <br />
        {"and hopefully create value ;)"}
        <br />
        <br />
        {
          "My main Goal is, to use the todays techologies' variety to strech the boundries"
        }
        <br />
        {"of the known UX for Webapplications"}
      </div>
    </div>
  );
};
export default MyWork;
