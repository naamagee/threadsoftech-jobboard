import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getPerformance } from "firebase/performance";

const app = initializeApp({
    apiKey: process.env.FIRESTORE_APIKEY,
    authDomain: process.env.FIRESTORE_AUTHDOMAIN,
    databaseURL: process.env.FIRESTORE_DATABASEURL,
    projectId: process.env.FIRESTORE_PROJECTID,
    storageBucket: process.env.FIRESTORE_STORAGEBUCKET,
    messagingSenderId: process.env.FIRESTORE_MESSAGESENDERID,
    appId: process.env.FIRESTORE_APPID,
    measurementId: process.env.FIRESTORE_MEASUREMENTID
});

export const db = getFirestore(app);
export const analytics = getAnalytics(app);
export const perf = getPerformance(app);
