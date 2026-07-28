
import React from 'react'

export default function App(){
          
      function handleadd() {
         let firstNumber = 21;
         let secondNumber = 32;

        const sum = firstNumber+ secondNumber;
        console.log(sum)

      }

  return (
    <div>
       <div>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>0</button>
       </div>

      <div>
      <button onSubmit={handleadd()}>+</button>
      <button onSubmit={handlesub()}>-</button>
      <button onSubmit={handlemul()}>*</button>
      <button onSubmit={handlediv()}>/</button>
      <button onSubmit={handleequal()}>=</button>
      <button onSubmit={handledot()}>.</button>
      <button onSubmit={handledel()}>del</button>
      <button onSubmit={handleClean()}>C</button>
      </div>

    </div>
  )
}



