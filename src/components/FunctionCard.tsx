import { useState } from "react";
import { defaultChainConfig } from "../hooks/useFunction";
import { MathFunction } from "../types";
import { validateEquation } from "../utils/equationUtil";

type FunctionCardProps = {
  func: MathFunction;
  onEquationChange: (id: number, equation: string) => void;
};

const FunctionCard = (props: FunctionCardProps) => {
  const { func, onEquationChange } = props;

  const [error, setError] = useState<string>("");

  // Validate if the equation is valid and set the error state accordingly
  const handleEquationChange = (newEquation: string) => {
    const validation = validateEquation(newEquation);
    if (!validation.isValid) {
      setError(validation.error ?? "Invalid equation");
    } else {
      setError("");
    }
    onEquationChange(func.id, newEquation);
  };

  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200 w-62 relative z-10">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-400">
          Function: {func.id}
        </h3>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Equation
        </label>
        <input
          type="text"
          value={func.equation}
          onChange={(e) => handleEquationChange(e.target.value)}
          className={`w-full p-2 border rounded-md `}
          placeholder="e.g., 2x + 1"
        />
        {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Next function
        </label>
        <select
          title="Select the next function in the chain"
          value={func.nextFunctionId ?? ""}
          onChange={(e) =>
            console.log(func.id, e.target.value ? Number(e.target.value) : null)
          }
          disabled={true}
          className={`w-full p-2 border rounded-md bg-gray-100 cursor-not-allowed text-gray-500`}
        >
          <option value="">None</option>
          {
            // Render all available functions except the current function
            defaultChainConfig.availableFunctions
              .filter((id) => id !== func.id)
              .map((id) => (
                <option key={id} value={id}>
                  Function: {id}
                </option>
              ))
          }
        </select>
      </div>

      <div className="mt-4 pt-4 border-t">
        <div className="flex justify-between text-sm">
          <span id={`end-${func.id}`}>Input</span>
          <span id={`start-${func.id}`}>Output</span>
        </div>
      </div>
    </div>
  );
};

export default FunctionCard;
