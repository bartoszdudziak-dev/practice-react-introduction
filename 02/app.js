import React from "react";
import { createRoot } from "react-dom/client";

const root = createRoot(document.querySelector("#root"));

const headerStyle = {
  backgroundColor: "lightblue",
  textTransform: "uppercase",
  fontSize: "2rem",
  color: "white",
  padding: "1rem",
  borderRadius: "5px",
  boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.25)",
  marginBottom: "1rem",
};

function HeaderFn() {
  return <header style={headerStyle}>Moja pierwsza strona w React</header>;
}

class HeaderCl extends React.Component {
  render() {
    return <header style={headerStyle}>Moja pierwsza strona w React</header>;
  }
}

function App() {
  return (
    <>
      <HeaderFn />
      <HeaderCl />
    </>
  );
}
root.render(<App />);
