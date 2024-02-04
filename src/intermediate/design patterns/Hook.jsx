import { useEffect, useRef, useState } from "react";

function useHover() {
  const [isHovering, setIsHovering] = useState(false);
  const ref = useRef();

  const handleMouseOver = () => {
    setIsHovering(true);
  };
  const handleMouseOut = () => {
    setIsHovering(false);
  };
  useEffect(() => {
    const node = ref.current;
    if (node) {
      node.addEventListener("mouseover", handleMouseOver);
      node.addEventListener("mouseout", handleMouseOut);
    }
  }, [ref.current]);
  return [ref, isHovering];
}

export function ShyDiv() {
  const [ref, isHovering] = useHover();
  return (
    <div
      ref={ref}
      style={{
        background: `${isHovering ? "pink" : "yellow"}`,
        width: 100,
        height: 100,
      }}
    ></div>
  );
}
