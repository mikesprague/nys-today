import * as PushNotifications from '@pusher/push-notifications-web';
import { register } from 'register-service-worker';

export function isDev () {
  if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    return true;
  }
  return false;
}

export function handleError(error) {
  console.error(error);
}

const initPushNotifications = () => {
  PushNotifications.init({
    instanceId: 'f2471e6b-dded-41ed-944e-ec74d924a568',
  })
  .then((beamsClient) =>
    beamsClient
      .start()
      .then(() => beamsClient.addDeviceInterest('nys-today'))
      .then(() => console.log('Successfully registered and subscribed! Device ID:', beamsClient.deviceId, beamsClient)),
  )
  .catch(error => {
    handleError(error);
  });
};

export function initServiceWorker () {
  register('/sw.js', {
    ready() {
      console.log('yo yo yo');
      initPushNotifications();
    },
    updated(registration) {
      console.log(`Updated to the latest version.\n${registration}`);
      // window.location.reload(true);
    },
    offline() {
      console.info('No internet connection found. App is currently offline.');
    },
    error(error) {
      console.error('Error during service worker registration:', error);
    },
  });
};
