type FlowPointIndicatorProps = {
  label: string;
  id: string;
  innerColor?: string;
  outerColor?: string;
  labelPosition?: "left" | "right";
};

/**
 * A component that represents a point in a flow chart. It consists of a label and a point indicator.
 *
 * @param {string} label - The label to display next to the point indicator.
 * @param {string} id - The id of the point indicator.
 * @param {string} innerColor - The color of the inner filled circle of the point indicator.
 * @param {string} outerColor - The color of the outer circle of the point indicator.
 * @param {string} labelPosition - The position of the label relative to the point indicator.
 */
const FlowPointIndicator = ({
  label,
  id,
  innerColor = "bg-blue-400",
  outerColor = "border-gray-300",
  labelPosition = "right",
}: FlowPointIndicatorProps) => {
  return (
    <span className={`flex items-center gap-1 `}>
      {labelPosition === "left" && (
        <span className="mr-2">{label}</span> // Left side label
      )}
      <div className="relative w-4 h-4 flex items-center justify-center">
        {/* Outer circle */}
        <div
          className={`w-4 h-4 border-2 ${outerColor} rounded-full`}
          id={id}
        ></div>
        {/* Inner filled circle */}
        <div
          className={`absolute w-2 h-2 ${innerColor} rounded-full`}
          id={id}
        />
      </div>
      {labelPosition === "right" && (
        <span className="ml-2">{label}</span> // Right side label
      )}
    </span>
  );
};

export default FlowPointIndicator;
