import React from "react";
import MenuItem from "./MenuItem";

function Menu({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <MenuItem key={item.text} text={item.text} url={item.url} />
      ))}
    </ul>
  );
}

export default Menu;
