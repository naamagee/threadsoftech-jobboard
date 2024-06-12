import { initializeApp } from "firebase/app";
import { getFirestore, collection, query, getDocs } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { COMPANIES_COLLECTION_NAME, JOBS_COLLECTION_NAME, STORAGE_BUCKET_LOGO_DIR } from "./app/constants.js";

const db = getFirestore(initializeApp({
    apiKey: process.env.FIRESTORE_APIKEY,
    authDomain: process.env.FIRESTORE_AUTHDOMAIN,
    databaseURL: process.env.FIRESTORE_DATABASEURL,
    projectId: process.env.FIRESTORE_PROJECTID,
    storageBucket: process.env.FIRESTORE_STORAGEBUCKET,
    messagingSenderId: process.env.FIRESTORE_MESSAGESENDERID,
    appId: process.env.FIRESTORE_APPID,
    measurementId: process.env.FIRESTORE_MEASUREMENTID
}));

export async function fetchCompanies() {
    const q = query(collection(db, COMPANIES_COLLECTION_NAME)),
        querySnapshot = await getDocs(q);

    let companies = [];

    return new Promise(resolve => {
        if (querySnapshot) {
            querySnapshot.forEach((doc) => {
                let companyDoc = doc.data();
                companyDoc.id = doc.id;
                companies.push(companyDoc);
            });

            return resolve(companies);
        } else {
            return resolve(1);
        }
    });
}

export async function fetchJobs() {
    const q = query(collection(db, JOBS_COLLECTION_NAME)),
        querySnapshot = await getDocs(q);

    let jobs = [];

    return new Promise(resolve => {
        if (querySnapshot) {
            querySnapshot.forEach((doc) => {
                let jobDoc = doc.data();
                jobDoc.id = doc.id;
                jobs.push(jobDoc);
            });

            return resolve(jobs);
        } else {
            return resolve(1);
        }
    });
}

export async function fetchLogo(filename) {
    const storage = getStorage();

    return new Promise(resolve => {
        getDownloadURL(ref(storage, `${STORAGE_BUCKET_LOGO_DIR}${filename}`))
        .then((url) => {
            if (url) { 
                return resolve(url);
            } else { 
                return null;
            }
        });
    });
}
