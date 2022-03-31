import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Select } from '../';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

const App = () => {
  const [value, setValue] = React.useState('');

  React.useEffect(() => {
    console.log("klasdjdlaskjdaskljdsakljklasddaskl " + value);

  }, [value]);

  return (
    <div style={{ padding: 100 }}>
      <Select
        options={options}
        isMulti={true}
        value={value}
        setValue={setValue}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
