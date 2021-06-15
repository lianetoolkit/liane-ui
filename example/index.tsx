import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Link } from '../';

const App = () => {
  return (
    <div style={{ padding: 100 }}>
      <h1>Link</h1>
      <Link href="http://google.com" size="lg" color="primary">
        Testing
      </Link>
      <Link href="http://google.com" underlined color="secondary">
        Testing
      </Link>
      <Link href="http://google.com" size="sm" onClick={() => alert('hi')}>
        Testing
      </Link>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
