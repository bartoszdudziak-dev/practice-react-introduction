import React from "react";
import PropTypes from "prop-types";

function MenuItem({ text, url }) {
  return (
    <li>
      <a href={url}>{text}</a>
    </li>
  );
}

MenuItem.propTypes = {
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default MenuItem;
