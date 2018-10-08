import React, { Component } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { tomorrowNightBlue } from "react-syntax-highlighter/styles/hljs";

/*
&#123  Left curly brace
&#125  Right curly brace
&#59   Semi-colon 
&#44   Comma
*/

class AboutMe extends Component {
  render() {
    const foo = `
    const me = {  
          name: 'Johannes',
          lastname: 'Walenta',
          nationality: 'German'        
    };

    let profiles = {
        github: 'https://github.com/timebasher',
        twitter: 'https://codepen.io/timebasher/', 
        eMail: 'johannes.walenta@googlemail.com'
    };    

    
    Object.assign({}, me, profiles )



    






    `;
    return (
      <div>
        <SyntaxHighlighter language="javascript" style={tomorrowNightBlue}>
          {foo}
        </SyntaxHighlighter>
      </div>
    );
  }
}

export default AboutMe;
{
  /*  <SyntaxHighlighter language="javascript" style={tomorrowNightBlue}>
        {foo}
      </SyntaxHighlighter> */
}
