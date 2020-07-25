import React from 'react';
import ReactDOM from 'react-dom';
import { register } from 'register-service-worker';
import './index.scss';
import NYSDate from './components/NYSDate';

const appElement = document.getElementById('root');

function initServiceWorker() {
  register('/service-worker.js', {
    updated(registration) {
      console.log(`Updated to the latest version.\n${registration}`);
      window.location.reload(true);
    },
    offline() {
      console.info('No internet connection found. App is currently offline.');
    },
    error(error) {
      console.error('Error during service worker registration:', error);
    },
  });
}

ReactDOM.render(
  <React.StrictMode>
    <NYSDate />
  </React.StrictMode>,
  appElement,
);

initServiceWorker();
