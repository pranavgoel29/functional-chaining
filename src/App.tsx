import React, { useState } from "react";
import ValueComponent from "./components/ValueComp";
import FunctionCard from "./components/FunctionCard";

const App: React.FC = () => {
  const [inputValue, setInputValue] = useState<number>(2);
  const [outputValue] = useState<number>(5); // Static output value

  const handleInputChange = (value: number) => {
    setInputValue(value);
  };
  return (
    <div className="min-h-screen flex justify-center items-center gap-6">
      <ValueComponent isInput value={inputValue} onChange={handleInputChange} />

      <FunctionCard />
      <ValueComponent isInput={false} value={outputValue} />
    </div>
  );
};

export default App;
