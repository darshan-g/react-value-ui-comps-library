import React from 'react';
import reactDom from 'react-dom';
import { HelloWorld, InputBox } from './lib';

const App = () => {
  return (
    <div>
      <HelloWorld />
      <InputBox />
    </div>
  );
};
reactDom.render(<App />, document.getElementById('root'));
