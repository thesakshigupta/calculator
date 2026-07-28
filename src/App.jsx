
import React from 'react'

export default function App(){
          
      function handleclick() {
         
      }

     function handleequal(){

     }


    function handledel() {

    }

    function handleClean(){

    }


  return (
    <div>
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
      
      <button onSubmit={handleequal}>=</button>
      <button onSubmit={handledel}>del</button>
      <button onSubmit={handleClean}>C</button>
      
      </div>

    </div>
  )
}



