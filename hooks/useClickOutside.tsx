import { useEffect, useRef } from "react";
function useClickOutside<T extends HTMLElement>(
  callback: () => void,
  isOpen: boolean
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, callback]);

  return ref;
}

export default useClickOutside;
