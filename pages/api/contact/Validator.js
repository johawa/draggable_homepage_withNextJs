import React from "react";
import { ValidatorComponent } from "react-form-validator-core";

class Validator extends ValidatorComponent {
  render() {
    const {
      errorMessages,
      validators,
      requiredError,
      validatorListener,
      ...rest
    } = this.props;

    return (
      <div>
        <input
          {...rest}
          ref={r => {
            this.input = r;
          }}
        />
        <div style={{ height: "20px", width: "400px" }}>{this.errorText()}</div>
      </div>
    );
  }

  errorText() {
    const { isValid } = this.state;
    
    if (isValid) {
      return <div style={{ color: "green" }}>&#10004;</div>;
    }

    return <div style={{ color: "red" }}>{this.getErrorMessage()}</div>;
  }
}

export default Validator;
