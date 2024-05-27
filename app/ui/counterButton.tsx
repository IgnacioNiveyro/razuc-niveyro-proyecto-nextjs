'use client';
import React, { useState } from 'react';
import { Button } from "@nextui-org/react";

interface CounterButtonProps {
  initialValue?: number;
}

const CounterButton: React.FC<CounterButtonProps> = ({ initialValue = 0 }) => {
  const [count, setCount] = useState<number>(initialValue);

  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount(prevCount => {
      const newValue = prevCount - 1 < 0 ? 0 : prevCount - 1;
      return newValue;
    });
  };
  

  return (
    <div>
        <Button 
        onClick={handleDecrement}
        className="text-tiny text-black bg-black/20" 
        variant="flat" 
        color="default" 
        radius="lg" 
        size="sm"
      >
        -
      </Button>
      <span className="text-tiny text-black bg-black/20 flat bg-transparent px-3" >{count}</span>
      <Button 
        onClick={handleIncrement}
        className="text-tiny text-black bg-black/20" 
        variant="flat" 
        color="default" 
        radius="lg" 
        size="sm"
      >
        +
      </Button>
    </div>
  );
};

export default CounterButton;
