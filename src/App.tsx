import React, { useState } from "react";
import ValueComponent from "./components/ValueComp";
import FunctionCard from "./components/FunctionCard";
import { useFunctionChain } from "./hooks/useFunction";

const App: React.FC = () => {
  const [inputValue, setInputValue] = useState<number>(2);

  const { functions, results, handleEquationChange } =
    useFunctionChain(inputValue);

  const handleInputChange = (value: number) => {
    setInputValue(value);
  };

  return (
    <div className="min-h-screen flex justify-center items-center gap-6">
      <ValueComponent isInput value={inputValue} onChange={handleInputChange} />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
        {functions.map((func) => (
          <FunctionCard
            key={func.id}
            func={func}
            result={results[func.id - 1]}
            onEquationChange={handleEquationChange}
          />
        ))}
      </div>

      <ValueComponent
        isInput={false}
        value={results?.[results.length - 1]?.output ??""}
      />
    </div>
  );
};

export default App;
