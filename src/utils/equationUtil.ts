import { ValidationResult } from "../types";

export const validateEquation = (equation: string): ValidationResult => {
  // Remove all whitespace
  const trimmedEquation = equation.replace(/\s/g, "");

  // Check if equation contains only valid characters
  // Valid characters are: x, 0-9, +, -, *, /, ^ and no whitespace.
  const validChars = /^[x0-9+\-*/^.]*$/;
  if (!validChars.test(trimmedEquation)) {
    return {
      isValid: false,
      error: "Invalid characters in equation",
    };
  }

  // Check if equation contains at least one 'x'
  if (!trimmedEquation.includes("x")) {
    return {
      isValid: false,
      error: "Equation must contain variable x",
    };
  }

  // Basic syntax validation
  try {
    const evaluableEquation = convertToJsEquation(
      trimmedEquation.replace(/x/g, "1")
    );

    // Doing this to check if the equation is evaluable, this will throw an error if it's not of valid syntax.
    new Function(`return ${evaluableEquation}`)();
    return { isValid: true };
  } catch {
    return {
      isValid: false,
      error: "Invalid equation syntax",
    };
  }
};

const convertToJsEquation = (equation: string): string => {
  // Add explicit multiplication operator between a number and the variable x
  let processed = equation.replace(/(\d)x/g, "$1*x");
  // Add explicit multiplication operator between x and number
  processed = processed.replace(/x(\d)/g, "x*$1");
  // Replace ^ with ** for JavaScript exponentiation
  processed = processed.replace(/\^/g, "**");

  // Return the equation with the updates for JavaScript
  return processed;
};

export const evaluateEquation = (equation: string, x: number): number => {
  const trimmedEquation = equation.replace(/\s/g, "");
  const processedEq = convertToJsEquation(trimmedEquation);
  const evaluableEquation = processedEq.replace(/x/g, x.toString());
  return new Function(`return ${evaluableEquation}`)();
};
