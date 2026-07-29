import React, { useState } from 'react'

export default function App() {
  const [input, setInput] = useState("")

  function handleClick(value) {
    if (input === 'Error') {
      setInput(value)
    } else {
      setInput(prev => prev + value)
    }
  }
  
  function handleEqual() {
    try {
      if (!input) return;
      setInput(String(eval(input)));
    } catch (error) {
      setInput('Error')
    }
  }

  function handleDel() {
    if (input === 'Error') {
      setInput("")
    } else {
      setInput(prev => prev.slice(0, -1))
    }
  }

  function handleClean() {
    setInput("")
  }

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-sky-50 p-4 font-sans select-none overflow-hidden">
      
      {/* Background Ambient Glowing Lights - Warm Gold & Soft Amber */}
      <div className="absolute -top-32 -left-32 h-[30rem] w-[30rem] rounded-full bg-amber-500/10 blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 h-[30rem] w-[30rem] rounded-full bg-yellow-600/10 blur-[140px] pointer-events-none" />

      {/* Main Glassmorphism Container */}
      <div className="relative w-full max-w-xs rounded-[2rem] bg-[#14171d]/80 p-6 backdrop-blur-2xl border border-stone-800/60 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)]">
        
        {/* Brand / Header */}
        <div className="mb-5 flex items-center justify-between px-1">
          <span className="text-[11px] font-medium tracking-[0.2em] text-stone-400 uppercase">
            Calculator
          </span>
          <div className="flex gap-1.5">
            <span className="h-2 w-2 rounded-full bg-stone-700"></span>
            <span className="h-2 w-2 rounded-full bg-stone-700"></span>
            <span className="h-2 w-2 rounded-full bg-amber-500/80"></span>
          </div>
        </div>

        {/* Display Screen */}
        <div className="mb-6 flex h-24 flex-col justify-end overflow-hidden rounded-2xl bg-[#0a0b0e]/90 p-4 text-right border border-stone-800/40 shadow-inner">
          <div className="text-[11px] tracking-wider text-stone-500 h-4">
            {input ? 'EXPRESSION' : 'READY'}
          </div>
          <h2 className="text-3xl font-light tracking-tight text-stone-100 overflow-x-auto whitespace-nowrap scrollbar-none">
            {input || '0'}
          </h2>
        </div>

        {/* Buttons Layout */}
        <div className="grid grid-cols-4 gap-2.5">
          {/* Top Control Bar */}
          <button 
            onClick={handleClean}
            className="col-span-2 rounded-xl bg-stone-800/50 p-3.5 text-xs font-medium tracking-wider text-rose-400 border border-stone-700/30 transition-all hover:bg-rose-500/10 hover:border-rose-500/20 active:scale-95"
          >
            AC
          </button>
          <button 
            onClick={handleDel}
            className="rounded-xl bg-stone-800/50 p-3.5 text-xs font-medium tracking-wider text-stone-300 border border-stone-700/30 transition-all hover:bg-stone-700/50 active:scale-95"
          >
            DEL
          </button>
          <button 
            onClick={() => handleClick('/')}
            className="rounded-xl bg-amber-500/10 p-3.5 text-base font-medium text-amber-400 border border-amber-500/20 transition-all hover:bg-amber-500/20 active:scale-95"
          >
            ÷
          </button>

          {/* Row 1 */}
          <button onClick={() => handleClick('7')} className="rounded-xl bg-stone-800/30 p-3.5 text-lg font-light text-stone-200 border border-stone-800/40 transition-all hover:bg-stone-800/60 active:scale-95">7</button>
          <button onClick={() => handleClick('8')} className="rounded-xl bg-stone-800/30 p-3.5 text-lg font-light text-stone-200 border border-stone-800/40 transition-all hover:bg-stone-800/60 active:scale-95">8</button>
          <button onClick={() => handleClick('9')} className="rounded-xl bg-stone-800/30 p-3.5 text-lg font-light text-stone-200 border border-stone-800/40 transition-all hover:bg-stone-800/60 active:scale-95">9</button>
          <button onClick={() => handleClick('*')} className="rounded-xl bg-amber-500/10 p-3.5 text-base font-medium text-amber-400 border border-amber-500/20 transition-all hover:bg-amber-500/20 active:scale-95">×</button>

          {/* Row 2 */}
          <button onClick={() => handleClick('4')} className="rounded-xl bg-stone-800/30 p-3.5 text-lg font-light text-stone-200 border border-stone-800/40 transition-all hover:bg-stone-800/60 active:scale-95">4</button>
          <button onClick={() => handleClick('5')} className="rounded-xl bg-stone-800/30 p-3.5 text-lg font-light text-stone-200 border border-stone-800/40 transition-all hover:bg-stone-800/60 active:scale-95">5</button>
          <button onClick={() => handleClick('6')} className="rounded-xl bg-stone-800/30 p-3.5 text-lg font-light text-stone-200 border border-stone-800/40 transition-all hover:bg-stone-800/60 active:scale-95">6</button>
          <button onClick={() => handleClick('-')} className="rounded-xl bg-amber-500/10 p-3.5 text-base font-medium text-amber-400 border border-amber-500/20 transition-all hover:bg-amber-500/20 active:scale-95">−</button>

          {/* Row 3 */}
          <button onClick={() => handleClick('1')} className="rounded-xl bg-stone-800/30 p-3.5 text-lg font-light text-stone-200 border border-stone-800/40 transition-all hover:bg-stone-800/60 active:scale-95">1</button>
          <button onClick={() => handleClick('2')} className="rounded-xl bg-stone-800/30 p-3.5 text-lg font-light text-stone-200 border border-stone-800/40 transition-all hover:bg-stone-800/60 active:scale-95">2</button>
          <button onClick={() => handleClick('3')} className="rounded-xl bg-stone-800/30 p-3.5 text-lg font-light text-stone-200 border border-stone-800/40 transition-all hover:bg-stone-800/60 active:scale-95">3</button>
          <button onClick={() => handleClick('+')} className="rounded-xl bg-amber-500/10 p-3.5 text-base font-medium text-amber-400 border border-amber-500/20 transition-all hover:bg-amber-500/20 active:scale-95">+</button>

          {/* Row 4 */}
          <button onClick={() => handleClick('0')} className="col-span-2 rounded-xl bg-stone-800/30 p-3.5 text-lg font-light text-stone-200 border border-stone-800/40 transition-all hover:bg-stone-800/60 active:scale-95">0</button>
          <button onClick={() => handleClick('.')} className="rounded-xl bg-stone-800/30 p-3.5 text-lg font-light text-stone-200 border border-stone-800/40 transition-all hover:bg-stone-800/60 active:scale-95">•</button>
          <button 
            onClick={handleEqual} 
            className="rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 p-3.5 text-lg font-semibold text-stone-950 shadow-[0_0_20px_rgba(245,158,11,0.25)] transition-all hover:brightness-110 active:scale-95"
          >
            =
          </button>
        </div>

      </div>
    </div>
  )
}