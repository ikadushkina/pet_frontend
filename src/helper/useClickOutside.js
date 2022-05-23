import { useEffect } from "react";

export const useClickOutside = (refContainer, refIgnored, callback) => {
  const handleClickOutside = event => {
    if (!refContainer?.current?.contains(event.target) && !refIgnored?.current?.contains(event.target)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [refContainer]);
};
