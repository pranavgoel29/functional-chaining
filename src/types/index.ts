// Define the structure of a mathematical function in the chain
export interface MathFunction {
  id: number;
  equation: string;
  nextFunctionId: number | null;
}

// Result of a function computation
export interface ComputationResult {
  functionId: number;
  input: number;
  output: number;
}