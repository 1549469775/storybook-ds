import React from 'react';
import './App.css';
import Radio from './Radio.js';
import Radiogroup from './Radiogroup';

function App() {
  return (
    <form>
      <div className="App">
        <Radiogroup className="mt16" legend="Select a fruit" >
          <Radio checked={true} label="Apple" id="apple" name="fruits" value="apple"></Radio>
          <Radio label="Pear" id="pear" name="fruits" value="pear"></Radio>
        </Radiogroup>

        <Radiogroup className="mt40" legend="Pick a phone!" >
          <Radio value="iphone" label="iPhone!" id="iphone" name="phone"></Radio>
          <Radio value="galaxy" checked={true} label="Galaxy" id="galaxy" name="phone"></Radio>
        </Radiogroup>
      </div>
      <button>submit</button>
    </form>
  );
}

export default App;
