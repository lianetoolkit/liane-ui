import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { IconButton } from '../';

const App = () => {
  return (
    <div style={{ padding: 100 }}>
      <h1>Icon Button</h1>
      Testing:
      <IconButton iconName="delete" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
