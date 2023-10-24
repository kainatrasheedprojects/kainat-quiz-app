import React from "react";
import "../styles.css";

function Correct(props) {
  return <h3 className="correct">CORRECT : {props.correct}</h3>;
}

export default Correct;