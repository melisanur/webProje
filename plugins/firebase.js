import { initializeApp, getApps } from "firebase/app";
import { getDatabase } from "firebase/database";

export default defineNuxtPlugin(() => {
  const firebaseConfig = {
    apiKey: "AIzaSyBi3p_8p_2g-tmCyCcsjhYqKdq5srBnIIs",
    authDomain: "web-proje-69f7a.firebaseapp.com",
    databaseURL: "https://web-proje-69f7a-default-rtdb.firebaseio.com",
    projectId: "web-proje-69f7a",
    storageBucket: "web-proje-69f7a.firebasestorage.app",
    messagingSenderId: "455482248165",
    appId: "1:455482248165:web:ad535bfb9954b342d97d0c",
    measurementId: "G-MNXBRZCHD3",
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
