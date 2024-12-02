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
  const [start, setStart] = useState<Position | null>(null);
  const [end, setEnd] = useState<Position | null>(null);

  // Update positions on mount and resize
  const updatePositions = () => {
    const startElement = document.getElementById(startNodeId);
    const endElement = document.getElementById(endNodeId);

    if (startElement && endElement) {
      const startRect = startElement.getBoundingClientRect();
      const endRect = endElement.getBoundingClientRect();
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

  useEffect(() => {
    updatePositions();

    // Add event listeners for resize and scroll
    window.addEventListener("resize", updatePositions);
    window.addEventListener("scroll", updatePositions);

    return () => {
      window.removeEventListener("resize", updatePositions);
      window.removeEventListener("scroll", updatePositions);
    };
  }, [startNodeId, endNodeId]);

  if (!start || !end) {
    return null; // Don't render the connector if positions are not ready
  }

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
