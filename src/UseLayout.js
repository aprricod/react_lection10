import React, { useLayoutEffect, useState } from "react";

export const UseLayout = () => {
  const [value, setValue] = useState(0);

  useLayoutEffect(() => {
    if (value === 0) {
      setValue(Math.random() * 99 + 99);
    }
  }, [value]);

  console.log("render", value);
  return <div onClick={() => setValue(0)}>value: {value}</div>;
};
