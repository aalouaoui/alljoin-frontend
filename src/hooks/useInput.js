import { useState } from "react";

const useInput = (name, defaultValue = "") => {
  const [value, setValue] = useState(defaultValue);
  const onChange = ev => setValue(ev.target.value);
  const placeholder = name
    .split("_")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  return {
    name,
    value,
    onChange,
    placeholder,
    type: name.includes("password") ? "password" : "text"
  };
};

export default useInput;
