import React from 'react';
const lazyload = () => {
  require.ensure([],
    (require)=>{
      require('../alert');
    }
  )
}
const Counter = ({count,increment,decrement}) =>
    (
      <div className="container">
        <div className ='row'>
          <h1>Count : {count}</h1>
          <button type="button" className="btn btn-warning" onClick={increment}  >Increment</button>
          <button type="button" className="btn btn-danger" onClick={decrement} >Decrement</button>
          <button type="button" className="btn btn-success" onClick={lazyload}>Lazy Load</button>
        </div>
      </div>
    );
export default Counter;
