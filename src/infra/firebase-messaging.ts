import * as firebase from "firebase/app";
import "firebase/messaging";

let messaging;

// このerror分岐ないとsafariでバグる(messaging.hogehoge読んだ瞬間に落ちるぽい)
if (firebase.messaging.isSupported()) {
  const FIREBASE_API_KEY = process.env.FIREBASE_API_KEY;
  const FIREBASE_PROJECT_ID = process.env.FIREBASE_PROJECT_ID;
  const FIREBASE_VAPID_KEY = process.env.FIREBASE_VAPID_KEY;
  const FIREBASE_SENDER_ID = process.env.FIREBASE_SENDER_ID;

  const firebaseConfig = {
    apiKey: FIREBASE_API_KEY,
    authDomain: `${FIREBASE_PROJECT_ID}.firebaseapp.com`,
    projectId: FIREBASE_PROJECT_ID,
    messagingSenderId: FIREBASE_SENDER_ID
  };

  firebase.initializeApp(firebaseConfig);

  messaging = firebase.messaging();

  messaging.usePublicVapidKey(FIREBASE_VAPID_KEY);

  // tokenが変更されていたら更新する
  messaging.onTokenRefresh(() => {
    messaging
      .getToken()
      .then(refreshedToken => {
        console.log("refreshedToken:", refreshedToken);
        //  refreshedTokenをどこかに保存したい
      })
      .catch(err => {
        console.log("Unable to retrieve refreshed token ", err);
      });
  });

  // messageを受け取った時の処理
  messaging.onMessage(payload => {
    console.log("Message received. ", payload);
    //   TODO: messageをUIに反映させる
  });
} else {
  console.error("safariとかはダメ");
}
export const getToken = () => {
  if (messaging == null) return;
  const token = messaging.getToken();
  return token;
};
