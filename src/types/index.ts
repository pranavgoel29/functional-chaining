// Define the structure of a mathematical function in the chain
export interface MathFunction {
  id: number;
  equation: string;
  nextFunctionId: number | null;
}

// Validation result interface for equation checking
export interface ValidationResult {
  isValid: boolean;
  error?: string;
}

// Result of a function calculation
export interface FunctionResult {
  functionId: number;
  input: number;
  output: number;
}
