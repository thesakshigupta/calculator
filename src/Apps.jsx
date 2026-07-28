import React, { useState } from 'react';

export default function App() {
  const [display, setDisplay] = useState('0');
  const [prevValue, setPrevValue] = useState(null);
  const [operation, setOperation] = useState(null);
  const [overwrite, setOverwrite] = useState(false);

  // Append digit (0-9)
  function handleNumber(digit) {
    if (display === '0' || overwrite) {
      setDisplay(digit);
      setOverwrite(false);
    } else {
      setDisplay(display + digit);
    }
  }

  // Handle decimal point
  function handleDot() {
    if (overwrite) {
      setDisplay('0.');
      setOverwrite(false);
      return;
    }
    if (!display.includes('.')) {
      setDisplay(display + '.');
    }
  }

  // Choose operation (+, -, *, /)
  function handleOp(op) {
    if (prevValue !== null && !overwrite) {
      calculate();
    } else {
      setPrevValue(parseFloat(display));
    }
    setOperation(op);
    setOverwrite(true);
  }

  // Perform calculation
  function calculate() {
    if (prevValue === null || operation === null) return;

    const current = parseFloat(display);
    let result = 0;

    switch (operation) {
      case '+':
        result = prevValue + current;
        break;
      case '-':
        result = prevValue - current;
        break;
      case '*':
        result = prevValue * current;
        break;
      case '/':
        result = current !== 0 ? prevValue / current : 'Error';
        break;
      default:
        return;
    }

    setDisplay(String(result));
    setPrevValue(null);
    setOperation(null);
    setOverwrite(true);
  }

  // Delete last character
  function handleDel() {
    if (overwrite) return;
    if (display.length === 1 || (display.length === 2 && display.startsWith('-'))) {
      setDisplay('0');
    } else {
      setDisplay(display.slice(0, -1));
    }
  }

  // Clear all
  function handleClear() {
    setDisplay('0');
    setPrevValue(null);
    setOperation(null);
    setOverwrite(false);
  }

  return (
    <div>
      {/* Screen */}
      <h1>{display}</h1>

      {/* Row 1 */}
      <div>
        <button onClick={handleClear}>C</button>
        <button onClick={handleDel}>del</button>
        <button onClick={() => handleOp('/')}>/</button>
        <button onClick={() => handleOp('*')}>*</button>
      </div>

      {/* Row 2 */}
      <div>
        <button onClick={() => handleNumber('7')}>7</button>
        <button onClick={() => handleNumber('8')}>8</button>
        <button onClick={() => handleNumber('9')}>9</button>
        <button onClick={() => handleOp('-')}>-</button>
      </div>

      {/* Row 3 */}
      <div>
        <button onClick={() => handleNumber('4')}>4</button>
        <button onClick={() => handleNumber('5')}>5</button>
        <button onClick={() => handleNumber('6')}>6</button>
        <button onClick={() => handleOp('+')}>+</button>
      </div>

      {/* Row 4 */}
      <div>
        <button onClick={() => handleNumber('1')}>1</button>
        <button onClick={() => handleNumber('2')}>2</button>
        <button onClick={() => handleNumber('3')}>3</button>
        <button onClick={calculate}>=</button>
      </div>

      {/* Row 5 */}
      <div>
        <button onClick={() => handleNumber('0')}>0</button>
        <button onClick={handleDot}>.</button>
      </div>
    </div>
  );
}