import { useState } from "react";

const useToggle = (initial = false) => {
  const [isOpen, setOpen] = useState(initial);
  const toggle = ev => {
    ev.preventDefault();
    setOpen(!isOpen);
  };
  return [isOpen, toggle, setOpen];
};

export default useToggle;
