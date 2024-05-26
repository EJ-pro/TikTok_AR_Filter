// firebaseConfig.js
const firebaseConfig = {
    apiKey: "AIzaSyA9qet5OLaAGsKFz__wqO2SePsJdB6x3Hs",
    authDomain: "tiktok-make-a-thon.firebaseapp.com",
    projectId: "tiktok-make-a-thon",
    storageBucket: "tiktok-make-a-thon.appspot.com",
    messagingSenderId: "864090443791",
    appId: "1:864090443791:web:1766737cca9c9aa4f6137a",
    measurementId: "G-BXJZWQ30E0"
  };

// Firebase 초기화
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();

export { app, db, storage };
