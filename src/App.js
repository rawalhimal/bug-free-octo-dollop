import logo from './logo.svg';
import './App.css';

import TestComponent from './TestComponent';

import { useState } from 'react';

function App() {
  const [count , setCount] = useState(0)
  const changeData=()=>{
    setCount((count) => count + 1);
  }
  return (
    <div className="App">
   <TestComponent name="sipalaya infotech"/>
        <p>
          {count}
        </p>
        <button onClick={changeData}>Clicked Me</button>
    
    </div>
  );
}

export default App;
