import React from "react";
import { render } from "react-dom";

function Hi() {
  return <p>Hello, my world.</p>;
}

render(<Hi />, document.getElementById("app"));
