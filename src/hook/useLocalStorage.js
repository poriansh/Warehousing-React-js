import {useState, useEffect} from "react";

const useLocalStorage = (key, initialValue) => {
  const getStoredValue = () => {
    try {
      return JSON.parse(localStorage.getItem(key)) || initialValue;
    } catch {
      return initialValue;
    }
  };

  const [state, setState] = useState(getStoredValue);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
};

export default useLocalStorage;
