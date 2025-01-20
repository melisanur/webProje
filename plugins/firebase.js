import { initializeApp, getApps } from "firebase/app";
import { getDatabase } from "firebase/database";

export default defineNuxtPlugin(() => {
  const firebaseConfig = {
    apiKey: "AIzaSyCXvvDuC0uHJtPbCyOGktwQoJYebQ62XmY",
    authDomain: "webp-70ef3.firebaseapp.com",
    databaseURL: "https://webp-70ef3-default-rtdb.firebaseio.com",
    projectId: "webp-70ef3",
    storageBucket: "webp-70ef3.firebasestorage.app",
    messagingSenderId: "178169931274",
    appId: "1:178169931274:web:367a74786b2b24b3b1a1f3",
    databaseURL: "https://webp-70ef3-default-rtdb.firebaseio.com",
  };

  // Firebase uygulamasını başlatmadan önce kontrol et
  const firebaseApp =
    getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

  const database = getDatabase(firebaseApp);

  return {
    provide: {
      firebase: firebaseApp,
      database,
    },
  };
});
