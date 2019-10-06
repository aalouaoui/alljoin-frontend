import { useState } from "react";

const useInput = (name, defaultValue = "") => {
  const [value, setValue] = useState(defaultValue);
  const onChange = ev => setValue(ev.target.value);
  return { name, value, onChange, placeHolder: name.charAt(0).toUpperCase() + name.slice(1) };
};

export default useInput;
