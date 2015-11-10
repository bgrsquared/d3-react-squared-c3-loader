require('babel/polyfill');

import React from 'react';
import ReactDOM from 'react-dom';

// load example component
import C3Example from './c3example';

ReactDOM.render(<C3Example/>, document.getElementById('app'));
