import { useState } from "react";

function useFlip() {
  // call useState, "reserve piece of state"
  const [value, setValue] = useState(true);
  const toggle = () => {
    setValue(oldValue => !oldValue);
  };
  
  // return piece of state AND a function to toggle it
  return [value, toggle];
}

export default useFlip;