import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '../src/components/Home/App';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();