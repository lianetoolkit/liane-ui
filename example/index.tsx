import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { IconButton } from '../';
import { Tooltip } from '../';

const App = () => {
  return (
    <div style={{ padding: 100 }}>
      <h1>Tooltips </h1>
      <br />
      <Tooltip title="Wow to the top" placement="top">
        Tooltip on the Top
      </Tooltip>
      <br />
      <br />
      <Tooltip title="Wow to the bottom" placement="bottom">
        Tooltip on the Bottom
      </Tooltip>
      <br />
      <br />
      <Tooltip title="Wow to the left" placement="left">
        Tooltip on the Left
      </Tooltip>
      <br />
      <br />
      <Tooltip title="Wow to the right" placement="right">
        Tooltip on the Right
      </Tooltip>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
