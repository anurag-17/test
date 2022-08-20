import { useState, useEffect } from "react";

export const SCREEN_MAX = {
  xs: "screen and (max-width: 393px)",
  sm: "screen and (max-width: 600px)",
  md: "screen and (max-width: 900px)",
  lg: "screen and (max-width: 1200px)",
  xl: "screen and (max-width: 1536px)",
};

export const SCREEN_MIN = {
  xs: "screen and (min-width: 393px)",
  sm: "screen and (min-width: 600px)",
  md: "screen and (min-width: 900px)",
  lg: "screen and (min-width: 1200px)",
  xl: "screen and (min-width: 1536px)",
};

export const SCREEN_WIDTH = {
  xsm: 393,
  xs: 430,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1536,
};

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}
