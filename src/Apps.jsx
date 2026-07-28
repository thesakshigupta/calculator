import React, { useState } from 'react'

 export default function App() {
    const [input, setInput] = useState("")

    function handleclick(value){
       setInput(input + value)
    }

    function handleEqual(){
     try{
        setInput(String(eval(input)));
       }
     catch (error){
        setInput('Error')
      }
    }

    function handleDel() {
       setInput(input.slice(0, -1))
    }

    function handleClean(){
      setInput("")
    }


  return (
    <div>
       <h2>{input || 0 }</h2>
      <div>
        <button onClick={() => handleclick('1')}>1</button>
        <button onClick={() => handleclick('2')}>2</button>
        <button onClick={() => handleclick('3')}>3</button>
        <button onClick={() => handleclick('4')}>4</button>
        <button onClick={() => handleclick('5')}>5</button>
        <button onClick={() => handleclick('6')}>6</button>
        <button onClick={() => handleclick('7')}>7</button>
        <button onClick={() => handleclick('8')}>8</button>
        <button onClick={() => handleclick('9')}>9</button>
        <button onClick={() => handleclick('0')}>0</button>
      </div>

      <div>
        <button onClick={() => handleclick('+')}>+</button>
        <button onClick={() => handleclick('-')}>-</button>
        <button onClick={() => handleclick('*')}>*</button>
        <button onClick={() => handleclick('/')}>/</button>
        <button onClick={() => handleclick('.')}>.</button>
        <button onClick={handleEqual}>=</button>
        <button onClick={handleDel}>del</button>
        <button onClick={handleClean}>C</button>
      </div>

    </div>
  )
}

