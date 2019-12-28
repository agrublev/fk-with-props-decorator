import React, { Component } from "react";
import  withStyleProps from "./FkWithStyles";
import PropTypes from "prop-types";
import { Button as BButton } from "rsuite";

@withStyleProps()
class Button extends Component {
  render() {
    console.log(this.props);
    return (
      <BButton className="sexx" {...this.props}>
        {this.props.children}
      </BButton>
    );
  }
}

Button.propTypes = {
  fkFill: PropTypes.bool,
  fkIntent: PropTypes.string
};

export default Button;
