import React from 'react';
import './App.css';

function App(props) {
  const {
    handleClick,
    count,
    calculatebyform,
    handleClear
  } = props
  return (
    <div className="App">
      <div id="background">
        <div id="result">{count || 0}</div>
        <div id="main">
          <div id="first-rows">
            <button className="deleteb" onClick={handleClear}>clear</button>
            <button value="+" class="btn-style opera-bg value operator" onClick={(e) => handleClick('+')}>+</button>
          </div>

          <div class="rows">
            <button value="7" className="btn-style  num first-child" onClick={(e) => handleClick(7)}>7</button>
            <button value="8" className="btn-style num" onClick={(e) => handleClick(8)} >8</button>
            <button value="9" className="btn-style num" onClick={(e) => handleClick(9)}>9</button>
            <button value="-" className="btn-style opera-bg operator" onClick={(e) => handleClick('-')}>-</button>
          </div>

          <div class="rows">
            <button value="4" className="btn-style num first-child" onClick={(e) => handleClick(4)}>4</button>
            <button value="5" className="btn-style num" onClick={(e) => handleClick(5)}>5</button>
            <button value="6" className="btn-style num" onClick={(e) => handleClick(6)}>6</button>
            <button value="*" className="btn-style opera-bg operator" onClick={(e) => handleClick('*')}>x</button>
          </div>

          <div class="rows">
            <button value="1" className="btn-style num first-child" onClick={(e) => handleClick(1)}>1</button>
            <button value="2" className="btn-style num" onClick={(e) => handleClick(2)}>2</button>
            <button value="3" className="btn-style num" onClick={(e) => handleClick(3)}>3</button>
            <button value="/" className="btn-style opera-bg operator" onClick={(e) => handleClick('/')} >/</button>
          </div>

          <div class="rows">
            <button value="0" className="zero" id="delete" onClick={(e) => handleClick(0)} >0</button>
            <button value="." className="btn-style period opera-bg " onClick={(e) => handleClick('.')}>.</button>
            <button value="=" className="eqn" onClick={() => calculatebyform()}>=</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
