import { useState } from "react";

type UseCounterReturn = {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
};

const useCounter = (initialVal: number = 0): UseCounterReturn => {
  const [count, setCount] = useState<number>(0);

  const increment = () => setCount((c) => c + 1);
  const decrement = () => setCount((c) => c - 1);
  const reset = () => setCount(0);

  return { count, increment, decrement, reset };
};

export default useCounter;
