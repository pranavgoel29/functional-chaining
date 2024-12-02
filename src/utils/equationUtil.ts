const convertToJsEquation = (equation: string): string => {
  // Add explicit multiplication operator between a number and the variable x
  let processed = equation.replace(/(\d)x/g, "$1*x");
  // Add explicit multiplication operator between x and number
  processed = processed.replace(/x(\d)/g, "x*$1");
  // Replace ^ with ** for JavaScript exponentiation
  processed = processed.replace(/\^/g, "**");
  return processed;
};

export const evaluateEquation = (equation: string, x: number): number => {
  const cleaned = equation.replace(/\s/g, "");
  const processed = convertToJsEquation(cleaned);
  const evaluableEquation = processed.replace(/x/g, x.toString());
  return new Function(`return ${evaluableEquation}`)();
};
