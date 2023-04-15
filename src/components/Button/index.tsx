import React from "react";
import "./style.scss";

interface ButtonProps {
  text: string;
  outline?: boolean;
  onClick?: (e : React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({ text, outline, onClick }) => {
  return (
    <button className={`button ${outline && "outline"} `} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
