import React, { useState } from "react";

export interface NewButtonProps {
  name: string;
  age: number;
  email: string;
  isStudent: boolean;
}

const NewButton: React.FC<NewButtonProps> = ({
  name,
  age,
  email,
  isStudent,
}) => {
  const [buttonColor, setButtonColor] = useState<string>("green");

  const handleClick = () => {
    setButtonColor((color) => (color === "green" ? "#ff0000" : "green"));
  };
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
      <p>{isStudent ? "Student" : "Not a student"}</p>
      <button onClick={handleClick} style={{ backgroundColor: buttonColor }}>
        Is that right?
      </button>
    </div>
  );
};

export default NewButton;
