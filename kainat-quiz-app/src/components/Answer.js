import React from "react";
import "../styles.css";

function Answer(props) {
  return (
    <div>
      <button
        type="button"
        className="butt"
        onClick={() => props.handleClick(props.choice)}
      >
        {props.Answer}
      </button>
    </div>
  );
}

export default Answer;