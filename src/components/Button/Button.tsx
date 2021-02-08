import React from "react";

import "./styles/button.css"

interface ButtonProps {
  size: string;
  type: string;
  text: string;
  onClick: () => void;
}

function Button({ size, type, text, onClick }: ButtonProps) {
  return (
    <button
      onClick={() => onClick()}
      className={`button button--${size} button--${type}`}
    >
      {text}
    </button>
  );
}

export default Button;
