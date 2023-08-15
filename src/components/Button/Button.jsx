import React from "react";
import "./button.css";

const Button = (props) => {
  return (
    <div>
      <button
        className={`btn ${
          props.type === "primary"
            ? "btn-primary"
            : props.type === "outline"
            ? "btn-outline"
            : ""
        }`}
        style={{
          width: props.width ? props.width : "",
          height: props.height ? props.height : "",
          fontSize: props.fontSize ? props.fontSize : "16px",
        }}
      >
        {props.title}
      </button>
    </div>
  );
};

export default Button;
