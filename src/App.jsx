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
    <div className="relative flex min-h-screen items-center justify-center bg-slate-950 p-4 font-sans select-none overflow-hidden">
      
      {/* Background Ambient Glowing Lights */}
      <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-indigo-600/20 blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-emerald-600/20 blur-[120px] pointer-events-none" />

      {/* Main Glassmorphism Container */}
      <div className="relative w-full max-w-xs rounded-3xl bg-slate-900/60 p-6 backdrop-blur-2xl border border-slate-800/80 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        
        {/* Brand / Header */}
        <div className="mb-4 flex items-center justify-between px-1">
          <span className="text-xs font-semibold tracking-widest text-slate-400 uppercase">
            Calculator
          </span>
          <div className="flex gap-1.5">
            <span className="h-2 w-2 rounded-full bg-rose-500/80"></span>
            <span className="h-2 w-2 rounded-full bg-amber-500/80"></span>
            <span className="h-2 w-2 rounded-full bg-emerald-500/80"></span>
          </div>
        </div>

        {/* Display Screen */}
        <div className="mb-6 flex h-24 flex-col justify-end overflow-hidden rounded-2xl bg-slate-950/80 p-4 text-right border border-slate-800/50 shadow-inner">
          <div className="text-xs text-slate-500 h-4">
            {input ? 'Expression' : 'Ready'}
          </div>
          <h2 className="text-3xl font-light tracking-tight text-slate-100 overflow-x-auto whitespace-nowrap scrollbar-none">
            {input || '0'}
          </h2>
        </div>

        {/* Buttons Layout */}
        <div className="grid grid-cols-4 gap-2.5">
          {/* Top Control Bar */}
          <button 
            onClick={handleClean}
            className="col-span-2 rounded-xl bg-rose-500/10 p-3.5 text-sm font-semibold text-rose-400 border border-rose-500/20 transition-all hover:bg-rose-500/20 active:scale-95"
          >
            AC
          </button>
          <button 
            onClick={handleDel}
            className="rounded-xl bg-amber-500/10 p-3.5 text-sm font-semibold text-amber-400 border border-amber-500/20 transition-all hover:bg-amber-500/20 active:scale-95"
          >
            DEL
          </button>
          <button 
            onClick={() => handleClick('/')}
            className="rounded-xl bg-indigo-500/15 p-3.5 text-base font-medium text-indigo-300 border border-indigo-500/20 transition-all hover:bg-indigo-500/25 active:scale-95"
          >
            ÷
          </button>

          {/* Row 1 */}
          <button onClick={() => handleClick('7')} className="rounded-xl bg-slate-800/40 p-3.5 text-lg font-normal text-slate-200 border border-slate-700/30 transition-all hover:bg-slate-700/50 active:scale-95">7</button>
          <button onClick={() => handleClick('8')} className="rounded-xl bg-slate-800/40 p-3.5 text-lg font-normal text-slate-200 border border-slate-700/30 transition-all hover:bg-slate-700/50 active:scale-95">8</button>
          <button onClick={() => handleClick('9')} className="rounded-xl bg-slate-800/40 p-3.5 text-lg font-normal text-slate-200 border border-slate-700/30 transition-all hover:bg-slate-700/50 active:scale-95">9</button>
          <button onClick={() => handleClick('*')} className="rounded-xl bg-indigo-500/15 p-3.5 text-base font-medium text-indigo-300 border border-indigo-500/20 transition-all hover:bg-indigo-500/25 active:scale-95">×</button>

          {/* Row 2 */}
          <button onClick={() => handleClick('4')} className="rounded-xl bg-slate-800/40 p-3.5 text-lg font-normal text-slate-200 border border-slate-700/30 transition-all hover:bg-slate-700/50 active:scale-95">4</button>
          <button onClick={() => handleClick('5')} className="rounded-xl bg-slate-800/40 p-3.5 text-lg font-normal text-slate-200 border border-slate-700/30 transition-all hover:bg-slate-700/50 active:scale-95">5</button>
          <button onClick={() => handleClick('6')} className="rounded-xl bg-slate-800/40 p-3.5 text-lg font-normal text-slate-200 border border-slate-700/30 transition-all hover:bg-slate-700/50 active:scale-95">6</button>
          <button onClick={() => handleClick('-')} className="rounded-xl bg-indigo-500/15 p-3.5 text-base font-medium text-indigo-300 border border-indigo-500/20 transition-all hover:bg-indigo-500/25 active:scale-95">−</button>

          {/* Row 3 */}
          <button onClick={() => handleClick('1')} className="rounded-xl bg-slate-800/40 p-3.5 text-lg font-normal text-slate-200 border border-slate-700/30 transition-all hover:bg-slate-700/50 active:scale-95">1</button>
          <button onClick={() => handleClick('2')} className="rounded-xl bg-slate-800/40 p-3.5 text-lg font-normal text-slate-200 border border-slate-700/30 transition-all hover:bg-slate-700/50 active:scale-95">2</button>
          <button onClick={() => handleClick('3')} className="rounded-xl bg-slate-800/40 p-3.5 text-lg font-normal text-slate-200 border border-slate-700/30 transition-all hover:bg-slate-700/50 active:scale-95">3</button>
          <button onClick={() => handleClick('+')} className="rounded-xl bg-indigo-500/15 p-3.5 text-base font-medium text-indigo-300 border border-indigo-500/20 transition-all hover:bg-indigo-500/25 active:scale-95">+</button>

          {/* Row 4 */}
          <button onClick={() => handleClick('0')} className="col-span-2 rounded-xl bg-slate-800/40 p-3.5 text-lg font-normal text-slate-200 border border-slate-700/30 transition-all hover:bg-slate-700/50 active:scale-95">0</button>
          <button onClick={() => handleClick('.')} className="rounded-xl bg-slate-800/40 p-3.5 text-lg font-normal text-slate-200 border border-slate-700/30 transition-all hover:bg-slate-700/50 active:scale-95">•</button>
          <button 
            onClick={handleEqual} 
            className="rounded-xl bg-emerald-500 p-3.5 text-lg font-semibold text-slate-950 shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all hover:bg-emerald-400 active:scale-95"
          >
            =
          </button>
        </div>

      </div>
    </div>
  )
}