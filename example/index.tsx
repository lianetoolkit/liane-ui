import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Button } from '../.';

const App = () => {
  const types = [
    'primary',
    'secondary',
    'tertiary',
    'ghost',
    'destructive',
    'inverse',
  ];
  const sizes = ['compact', 'comfortable'];
  return (
    <div style={{ padding: 100 }}>
      {types.map((type) => (
        <>
          <div className="my-3">
            <Button type={type} size={sizes[0]}>
              button {type} compact
            </Button>
          </div>
          <div>
            <Button type={type} size={sizes[1]}>
              button {type} compact
            </Button>
          </div>
        </>
      ))}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
