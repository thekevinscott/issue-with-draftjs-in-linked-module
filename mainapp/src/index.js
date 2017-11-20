import React from 'react';
import LinkedModule from 'linkedmodule';
import { render } from 'react-dom';

const Root = () => (
  <div style={{
    width: '100%',
    height: '100%',
    background: '#DDD',
  }}>
    Root:
    <LinkedModule />
  </div>
);

const target = document.getElementById('root');

render(<Root />, target);
