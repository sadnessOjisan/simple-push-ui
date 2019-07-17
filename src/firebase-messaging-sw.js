importScripts("https://www.gstatic.com/firebasejs/6.2.4/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/6.2.4/firebase-messaging.js");

firebase.initializeApp({
  messagingSenderId: "315975119135"
});

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  var notificationTitle = "Background Message Title";
  var notificationOptions = {
    body: "Background Message body.",
    icon: "/firebase-logo.png"
  };

  return self.registration.showNotification(
    notificationTitle,
    notificationOptions
  );
});
