import React from "react";
import PropTypes from "prop-types";

function Button({ children, version, type, isDisabled, text }) {
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
      {text}
    </button>
  );
}

Button.defaultProps = {
  version: "primary",
  type: "button",
  isDisabled: false,
};

Button.propTypes = {
  children: PropTypes.node,
  version: PropTypes.string,
  type: PropTypes.string,
  isDisabled: PropTypes.bool,
  text: PropTypes.string.isRequired,
};
export default Button;
