import { useContext } from 'react'
import './Counter.css'
import CountContext from './CountContext'

const Counter = () => {
  const { count, increase, decrease } = useContext(CountContext);
  return (
    <div className="wrapper">
      <button onClick={decrease}>-</button>
      <span className="count">{count}</span>
      <button onClick={increase}>+</button>
    </div>
  );
};

export default Counter;