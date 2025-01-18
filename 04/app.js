import React from "react";
import { createRoot } from "react-dom/client";
import MenuItem from "../03/MenuItem";

const root = createRoot(document.querySelector("#root"));

function Nav() {
  return (
    <nav>
      <Menu />
    </nav>
  );
}

function Menu() {
  return (
    <ul>
      <MenuItem text="home" url="/" />
      <MenuItem text="kontakt" url="/contact" />
    </ul>
  );
}

root.render(<Nav />);
