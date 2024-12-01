import React from "react";

interface ValueComponentProps {
  value: number;
  isInput: boolean; // Determines whether it's an input or output
  onChange?: (value: number) => void; // Optional because output doesn't need it
}

export const ValueComponent: React.FC<ValueComponentProps> = ({
  value,
  isInput,
  onChange,
}) => {
  const accentBg = isInput ? "bg-orange-400" : "bg-green-500";
  const accentBorder = isInput ? "border-orange-400" : "border-green-500";

  return (
    <div className="w-36 max-w-36 relative">
      {/* Dynamic Label */}
      <label
        htmlFor={isInput ? "initial-value" : "final-value"}
        className={`block text-sm font-medium text-white mb-1 p-1 text-center rounded-full ${accentBg}`}
      >
        {isInput ? "Initial value of x" : "Final value of y"}
      </label>

      {/* Input or Display */}
      <div
        className={`flex items-center border-2 ${accentBorder} rounded-xl bg-white`}
      >
        {isInput ? (
          // Input Field
          <input
            id="initial-value"
            aria-label="Initial value of x"
            type="number"
            value={value}
            onChange={(e) => onChange?.(Number(e.target.value))}
            className="p-2 w-full border-none focus:outline-none rounded-xl font-bold"
          />
        ) : (
          // Output Display
          <div
            id="final-value"
            aria-label="Final value of y"
            className="flex-1 p-2 font-bold"
          >
            {value}
          </div>
        )}
      </div>
    </div>
  );
};

export default ValueComponent;
