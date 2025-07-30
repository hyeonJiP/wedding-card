import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

console.log("firebaseConfig:", firebaseConfig);

// Firebase 초기화
const app = initializeApp(firebaseConfig);

// Firestore 초기화 및 내보내기
export const db = getFirestore(app);

// Analytics 초기화 및 내보내기 (브라우저 환경에서만)
export const analytics =
  typeof window !== "undefined" ? getAnalytics(app) : null;
