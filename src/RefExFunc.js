import React, { useRef } from "react";

export function RefExFunc() {
  const inputRef = useRef();

  const handleClick = () => {
    console.log(inputRef);
  };

  return (
    <div>
      <input ref={inputRef} />
      <button onClick={handleClick}>Кнопка</button>
    </div>
  );
}
