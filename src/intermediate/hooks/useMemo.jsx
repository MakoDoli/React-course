import { useMemo, useState } from "react";

export default function CalculatePrime() {
  const [number, setNumber] = useState(0);

  const [isShy, setIsShy] = useState(false);

  function isPrime(num) {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }

  //Function to find the nth prime number
  function findNthPrime(n) {
    let count = 0;
    let num = 2;
    while (count < n) {
      if (isPrime(num)) {
        count++;
      }
      num++;
    }
    return num - 1;
  }

  const prime = useMemo(() => {
    return findNthPrime(number);
  }, [number]);

  return (
    <div
      style={{
        borderRadius: 8,
        width: 200,
        height: 200,
        padding: 20,
        background: `${isShy ? "seagreen" : "pink"}`,
      }}
    >
      <button onClick={() => setIsShy(!isShy)}>make me blush</button>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <h3>nth prime number {prime}</h3>
    </div>
  );
}
