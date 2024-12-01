import React, { useState } from "react";
import ValueComponent from "./components/ValueComp";

const App: React.FC = () => {
  const [inputValue, setInputValue] = useState<number>(2);
  const [outputValue] = useState<number>(5); // Static output value

  const handleInputChange = (value: number) => {
    setInputValue(value);
  };
  return (
    <div className="min-h-screen flex flex-col justify-center items-center gap-6s">
      <ValueComponent isInput value={inputValue} onChange={handleInputChange} />
      <ValueComponent isInput={false} value={outputValue} />
    </div>
  );
};

export default App;
