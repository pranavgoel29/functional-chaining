import { MathFunction } from "../types";

type FunctionCardProps = {
  func: MathFunction;
  onEquationChange: (id: number, equation: string) => void;
  onNextFunctionChange: (id: number, nextFunctionId: number | null) => void;
  result?: { input: number; output: number };
};

const FunctionCard = (props: FunctionCardProps) => {
  const { func, onEquationChange, onNextFunctionChange, result } = props;
  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200 w-72 relative z-10">
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
          onChange={(e) => console.log(e.target.value)}
          className={`w-full p-2 border rounded-md `}
          placeholder="e.g., 2x + 1"
        />
        {/* {error && <p className="mt-1 text-sm text-red-500">{error}</p>} */}
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Next function
        </label>
        <select
          title="Select the next function in the chain"
          value={1}
          onChange={(e) =>
            console.log(
              //   func.id,
              e.target.value ? Number(e.target.value) : null
            )
          }
          disabled={true}
          className={`w-full p-2 border rounded-md bg-gray-100 cursor-not-allowed text-gray-500`}
        >
          <option value="">None</option>
          {
            <>
              <option key={1} value={1}>
                Function: 1
              </option>
              <option key={2} value={2}>
                Function: 2
              </option>
            </>
          }
        </select>
      </div>

      <div className="mt-4 pt-4 border-t">
        <div className="flex justify-between text-sm">
          <span>Input</span>
          <span>Output</span>
        </div>
      </div>
    </div>
  );
};

export default FunctionCard;
