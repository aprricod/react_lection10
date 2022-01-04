import React, { useState, useEffect } from "react";

export const EffectExFunc = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    const l = localStorage.getItem("list") || [];
    setList(JSON.parse(l));
  }, []);
  useEffect(() => {
    document.addEventListener("click", handleClick);
    console.log("init use effect hook", [list]);
    localStorage.setItem("list", JSON.stringify(list));
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [list]);
  const handleClick = () => {
    const temp = [...list];
    temp.push(list.length + 1);
    setList(temp);
  };
  return (
    <div>
      <ul>{list !== undefined && list.map((el) => <li key={el}>{el}</li>)}</ul>
      <button onClick={handleClick}>Add element</button>
    </div>
  );
};
