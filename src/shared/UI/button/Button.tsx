import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  message: string;
  onClick: () => void;
};

const Button = ({ message, onClick, ...props }: ButtonProps) => {
  return (
    <button onClick={onClick} {...props}>
      {message}
    </button>
  );
};

export default Button;
