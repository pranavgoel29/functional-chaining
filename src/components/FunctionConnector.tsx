import React, { useEffect, useState } from "react";

interface Position {
  x: number;
  y: number;
}

interface ConnectorProps {
  startNodeId: string;
  endNodeId: string;
}

export const FunctionConnector: React.FC<ConnectorProps> = ({
  startNodeId,
  endNodeId,
}) => {
  const [start, setStart] = useState<Position>({ x: 0, y: 0 });
  const [end, setEnd] = useState<Position>({ x: 0, y: 0 });

  useEffect(() => {
    const updatePositions = () => {
      // Get the start and end elements by their IDs
      const startElement = document.getElementById(startNodeId);
      const endElement = document.getElementById(endNodeId);

      if (startElement && endElement) {
        // Get the bounding rectangles of the elements, which include the position and size
        const startRect = startElement.getBoundingClientRect();
        const endRect = endElement.getBoundingClientRect();

        // Get the scroll position of the window, to adjust the position of the elements
        const scrollX = window.scrollX;
        const scrollY = window.scrollY;

        setStart({
          x: startRect.right + scrollX,
          y: startRect.top + startRect.height / 2 + scrollY,
        });
        setEnd({
          x: endRect.left + scrollX,
          y: endRect.top + endRect.height / 2 + scrollY,
        });
      }
    };

    updatePositions();

    // Update positions on resize
    window.addEventListener("resize", updatePositions);

    // Remove event listener for window resize, to avoid memory leaks.
    return () => window.removeEventListener("resize", updatePositions);
  }, [startNodeId, endNodeId]);

  // Bezier curve path, M is the starting point, C is the curve
  const path = `M ${start.x} ${start.y} 
                C ${start.x + 50} ${start.y},
                  ${end.x - 50} ${end.y},
                  ${end.x} ${end.y}`;

  return (
    <svg
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 100,
      }}
    >
      <path d={path} stroke="#7db3fe69" strokeWidth="6" fill="none" />
    </svg>
  );
};
