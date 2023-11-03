import { useEffect, useState } from "react";

function getWindowWidth() {
  const [winWidth, setWinWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWinWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return winWidth;
}

export default getWindowWidth;
