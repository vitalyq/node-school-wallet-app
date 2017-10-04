import React from 'react';
import ReactDOM from 'react-dom';
import { hydrate as hydrateStyles } from 'emotion'
import { App } from './components';

// Adds server generated styles to emotion cache.
if (typeof window !== 'undefined') {
  hydrateStyles(window.__STYLES__);
}

ReactDOM.hydrate(<App />, document.getElementById('root'));
