import { useEffect } from "react";

export function useKey(key, action) {
  useEffect(() => {
    console.log("Effect mount");
    function callback(e) {
      if (e.code.toLowerCase() === key.toLowerCase()) {
        action();
        console.log("effect run ");
      }
    }

    document.addEventListener("keydown", callback);
    return () => {
      console.log("Effect CleanUP");
      document.removeEventListener("keydown", callback);
    };
  }, [key, action]);
}
