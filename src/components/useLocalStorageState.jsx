import { useState, useEffect } from "react";

export function useLocalStorageState(initialValue, Key) {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(Key);
    console.log(storedValue);
    return storedValue ? JSON.parse(storedValue) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(Key, JSON.stringify(value));
  }, [value, Key]);

  return { value, setValue };
}
