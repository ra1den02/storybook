import React, { useState } from "react";

export interface NewButtonProps {
  name?: string;
  age?: number;
  href?: string;
  disabled: boolean;
  defaultColor: "green" | "red" | "yellow";
}

const NewButton: React.FC<NewButtonProps> = ({
  name,
  age,
  defaultColor,
  disabled,
  href,
}) => {
  const [buttonColor, setButtonColor] = useState<string>(defaultColor);

  const handleClick = () => {
    setButtonColor((color) =>
      color === defaultColor ? "#ff0000" : defaultColor
    );
  };

  const button = (
    <button
      onClick={handleClick}
      style={{ backgroundColor: buttonColor }}
      disabled={disabled}
    >
      Is that right?
    </button>
  );

  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      {href ? <a href={href}>{button}</a> : <>{button}</>}
    </div>
  );
};

export default NewButton;
