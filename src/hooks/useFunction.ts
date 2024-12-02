import { useState, useEffect, useCallback } from "react";
import { FunctionResult, MathFunction } from "../types";
import { evaluateEquation } from "../utils/equationUtil";

// Default configuration for the function chain
export const defaultChainConfig = {
  defaultOrder: {
    1: 2,
    2: 4,
    3: null,
    4: 5,
    5: 3,
  },
  availableFunctions: [1, 2, 3, 4, 5],
} as const;

const functionsData = [
  {
    id: 1,
    equation: "x*2",
    nextFunctionId: defaultChainConfig.defaultOrder[1],
  },
  {
    id: 2,
    equation: "2x+4",
    nextFunctionId: defaultChainConfig.defaultOrder[2],
  },
  {
    id: 3,
    equation: "x^2+20",
    nextFunctionId: defaultChainConfig.defaultOrder[3],
  },
  {
    id: 4,
    equation: "x-2",
    nextFunctionId: defaultChainConfig.defaultOrder[4],
  },
  {
    id: 5,
    equation: "x/2",
    nextFunctionId: defaultChainConfig.defaultOrder[5],
  },
];

export const useFunctionChain = (initialX: number) => {
  // Initialize functions with default equations and order
  const [functions, setFunctions] = useState<MathFunction[]>(functionsData);

  const [results, setResults] = useState<FunctionResult[]>([]);

  /**
   * Updates the equation for a function in corresponding to its ID
   */
  const handleEquationChange = (id: number, equation: string) => {
    setFunctions(
      functions.map((func) => (func.id === id ? { ...func, equation } : func))
    );
  };

  /**
   * Updates the next function in the chain
   */
  //   const handleNextFunctionChange = (
  //     id: number,
  //     nextFunctionId: number | null
  //   ) => {
  //     setFunctions(
  //       functions.map((f) => (f.id === id ? { ...f, nextFunctionId } : f))
  //     );
  //   };

  /**
   * Computes results for the entire function chain
   */
  const calculateFunctionResults = useCallback(() => {
    const newResults: FunctionResult[] = [];
    let currentX = initialX;
    let currentId = 1; // Start with function 1

    while (currentId !== null) {
      const currentFunc = functions.find((func) => func.id === currentId);
      if (!currentFunc) break;

      try {
        const output = evaluateEquation(currentFunc.equation, currentX);
        console.log("Function", currentFunc.id, "Output", output);
        newResults.push({
          functionId: currentFunc.id,
          input: currentX,
          output,
        });
        currentX = output;
        currentId = currentFunc.nextFunctionId ?? 0;
      } catch (error) {
        console.error("Computation error:", error);
        break;
      }
    }

    setResults(newResults);
  }, [initialX, functions]);

  // Recompute results when functions or initial value changes
  useEffect(() => {
    calculateFunctionResults();
  }, [initialX, functions, calculateFunctionResults]);

  return {
    functions,
    results,
    handleEquationChange,
  };
};
