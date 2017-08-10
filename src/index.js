import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

import './sass/styles.scss';
import App from './components/App';

const supportsHistory = 'pushState' in window.history

render((
  <BrowserRouter forceRefresh={!supportsHistory}>
    <App/>
  </BrowserRouter>
), document.getElementById('app'));
