import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Button, ButtonSwitch } from '../.';

const App = () => {
  return (
    <div style={{ padding: 100 }}>
      <h1>Button Switch</h1>
      <ButtonSwitch
        defaultValue={1}
        options={[
          {
            label: 'Opt 1',
            value: 1,
          },
          {
            label: 'Opt 2',
            value: 2,
            disabled: true,
          },
          {
            label: 'Opt 3',
            value: 3,
          },
        ]}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
