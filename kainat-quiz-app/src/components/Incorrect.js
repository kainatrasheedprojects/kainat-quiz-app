import React from "react";
import "../styles.css";

function Incorrect(props) {
  return <h3 className="incorrect">INCORRECT : {props.incorrect}</h3>;
}

export default Incorrect;