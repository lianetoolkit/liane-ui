import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { IconButton, Select, Button } from '../';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
  { value: 'vanilla', label: 'Vanilla' },
];

const App = () => {
  return (
    <div style={{ padding: 100 }}>
      {/*<h1>Icon Button</h1>
      Testing:
      <IconButton iconName="delete" />*/}

      <Select options={options}/>
      {/*<Button type={'tertiary'} >dsakdsal</Button>*/}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
