import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

export const LayoutEx = () => {
  const [val, forceUpdate] = useState();
  const inputRef = useRef(0);
  useEffect(() => {
    console.log(inputRef);
    inputRef.current = "123456";
  });
  useLayoutEffect(() => {
    console.log(inputRef);
    forceUpdate();
  });

  return <div>{inputRef.current}</div>;
};
