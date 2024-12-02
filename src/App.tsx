import React, { useState } from "react";
import ValueComponent from "./components/ValueComp";
import FunctionCard from "./components/FunctionCard";
import { defaultChainConfig, useFunctionChain } from "./hooks/useFunction";
import { FunctionConnector } from "./components/FunctionConnector";

const App: React.FC = () => {
  const [inputValue, setInputValue] = useState<number>(2);

  const { functions, results, handleEquationChange } =
    useFunctionChain(inputValue);

  const handleInputChange = (value: number) => {
    setInputValue(value);
  };

  return (
    <div className="min-h-screen flex justify-center items-center gap-8">
      <ValueComponent isInput value={inputValue} onChange={handleInputChange} />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 justify-items-center">
        {functions.map((func) => (
          <FunctionCard
            key={func.id}
            func={func}
            result={results.find((r) => r.functionId === func.id)}
            onEquationChange={handleEquationChange}
          />
        ))}
      </div>

      {functions.map((func) =>
        func.nextFunctionId ? (
          <FunctionConnector
            key={`connector-${func.id}-${func.nextFunctionId}`}
            startNodeId={`start-${func.id}`}
            endNodeId={`end-${func.nextFunctionId}`}
          />
        ) : null
      )}

      <FunctionConnector
        key={`connector-input-value-${functions[0].id}`}
        startNodeId="initial-value"
        endNodeId={`end-${functions[0].id}`}
      />

      <FunctionConnector
        key={`connector-final-value-${
          Object.entries(defaultChainConfig.defaultOrder).find(
            ([_, value]) => value === null
          )?.[0]
        }`}
        startNodeId={`start-${
          Object.entries(defaultChainConfig.defaultOrder).find(
            ([_, value]) => value === null
          )?.[0]
        }`}
        endNodeId="final-value"
      />

      <ValueComponent
        isInput={false}
        value={results?.[results.length - 1]?.output ?? ""}
      />
    </div>
  );
};

export default App;
