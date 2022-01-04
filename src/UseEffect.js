import React, { useEffect, useState } from "react";

export const UseEffect = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (value === 0) {
      setValue(Math.random() * 99 + 99);
    }
  }, [value]);

  console.log("render", value);
  return <div onClick={() => setValue(0)}>value: {value}</div>;
};
