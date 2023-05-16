import { useState } from 'react'
import './App.css'
import CountContext from './CountContext'
import Counter from './Counter'

function App() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    setCount(count - 1);
  };

  return (
    <>
      <CountContext.Provider
        value={{ count, increase, decrease }}
      >
        <Counter />
        <Counter />
      </CountContext.Provider>
    </>
  )
}

export default App
