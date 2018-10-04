console.log("serviceworker");

importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');

var config = {
  messagingSenderId: "27904652077"
};
firebase.initializeApp(config);

var messaging = firebase.messaging();

self.addEventListener('install', e => {
  console.log('Service Worker oninstall: ', e);
});

self.addEventListener('activate', e => {
  console.log('Service Worker onactivate: ', e);

  e.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', e => {
  console.log('Service Worker onfetch: ', e);
});

// self.addEventListener('push', e => {
//   console.log('Service Worker onpush: ', e);

//   e.waitUntil(
//     self.registration.showNotification('Push Notification Title', {
//       body: 'message',
//       icon: 'http://placehold.it/192x192',
//       tag: 'push-notification-tag'
//     })
//   );
// });

messaging.setBackgroundMessageHandler(function (e) {
  console.log("onMessage", e);
});

console.log("finish serviceworker");