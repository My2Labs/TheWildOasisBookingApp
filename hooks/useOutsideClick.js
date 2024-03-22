import { useEffect, useRef } from "react";

export function useOutsideClick(handler, listenCapturing = true) {
  const ref = useRef();

  /* Below received the following error. Moved 'if (name !== openName) return null' to below useEffect to correct.
    86:3   error    React Hook "useEffect" is called conditionally. React Hooks must be called in the exact same order in every component render. Did you accidentally call a React Hook after an early return?  react-hooks/rules-of-hooks*/

  // useEffect(function () {
  //   function handleClick(e) {}
  //   document.addEventListener("click", handleClick);
  //   return () => document.removeEventListener("click", handleClick);
  // }, []);

  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          console.log("Click outside");
          //   close();
          handler();
        }
      }
      // Added 'true' below to allow the event listener to reopen modal window
      //   document.addEventListener("click", handleClick, true);
      document.addEventListener("click", handleClick, listenCapturing);
      //   return () => document.removeEventListener("click", handleClick);
      return () =>
        document.removeEventListener("click", handleClick, listenCapturing);
    },
    [handler, listenCapturing]
  );
  return ref;
}
