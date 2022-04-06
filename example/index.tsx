import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Select, IconButton, Tooltip } from '../';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

const App = () => {
  const [value, setValue] = React.useState('');

  return (
    <div style={{ padding: 100 }}>
      <Select
        options={options}
        hint="Hint is optional"
        isMulti={true}
        value={value}
        setValue={setValue}
        disabled={false}
      />
      
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
