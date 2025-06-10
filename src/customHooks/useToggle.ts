import React, { useState } from "react";

const useToggle = (initialVal: Boolean = false) => {
  const [value, setValue] = useState(initialVal);

  const toggle = () => setValue((prev) => !prev);
  return { value, toggle };
};

export default useToggle;
