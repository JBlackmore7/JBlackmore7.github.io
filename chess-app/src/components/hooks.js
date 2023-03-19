import { useCallback, useState, useLayoutEffect } from "react";

export const useSize = (ref) => {
  const [componentSize, setComponentSize] = useState(getSize(ref ? ref.current : {}));
  const handleResize = useCallback(() => {
    if (ref.current) {
      setComponentSize(getSize(ref.current));
    }
  }, [ref]);

  useLayoutEffect(() => {
    if (!ref.current) {
      return undefined;
    }

    handleResize();

    if (typeof ResizeObserver === "function") {
      let resizeObserver = new ResizeObserver(() => {
        handleResize();
      });
      resizeObserver.observe(ref.current);

      return () => {
        resizeObserver.disconnect(ref.current);
        resizeObserver = null;
      };
    }

    return eventListener(window, "resize", handleResize);
  }, [ref.current]);

  return componentSize;
};

var eventListener = function eventListener(element, eventName, listener) {
  if (element) {
    element.addEventListener(eventName, listener);
    return function () {
      return element.removeEventListener(eventName, listener);
    };
  }
  return undefined;
};

const getSize = (el) => {
  if (!el) {
    return {
      width: 0,
      height: 0,
    };
  }

  return {
    width: el.offsetWidth,
    height: el.offsetHeight,
  };
};

export const useModal = () => {
  const [isShowing, setIsShowing] = useState(false);

  function toggle() {
    setIsShowing(!isShowing);
  }

  return {
    isShowing,
    toggle,
  };
};
