import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  query,
  getDocs,
  where,
} from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import {
  COMPANIES_COLLECTION_NAME,
  JOBS_COLLECTION_NAME,
  STORAGE_BUCKET_LOGO_DIR,
} from "./constants.js";

// const app = initializeApp({
//   apiKey: process.env.FIRESTORE_APIKEY,
//   authDomain: process.env.FIRESTORE_AUTHDOMAIN,
//   databaseURL: process.env.FIRESTORE_DATABASEURL,
//   projectId: process.env.FIRESTORE_PROJECTID,
//   storageBucket: process.env.FIRESTORE_STORAGEBUCKET,
//   messagingSenderId: process.env.FIRESTORE_MESSAGESENDERID,
//   appId: process.env.FIRESTORE_APPID,
//   // measurementId: process.env.FIRESTORE_MEASUREMENTID,
// });

const app = initializeApp({
  apiKey: process.env.NEXT_PUBLIC_FIRESTORE_APIKEY,
  authDomain: process.env.NEXT_PUBLIC_FIRESTORE_AUTHDOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIRESTORE_DATABASEURL,
  projectId: process.env.NEXT_PUBLIC_FIRESTORE_PROJECTID,
  storageBucket: process.env.NEXT_PUBLIC_FIRESTORE_STORAGEBUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIRESTORE_MESSAGESENDERID,
  appId: process.env.NEXT_PUBLIC_FIRESTORE_APPID,
  measurementId: process.env.NEXT_PUBLIC_FIRESTORE_MEASUREMENTID
});

export const db = getFirestore(app);

export async function fetchCompanies() {
  const q = query(collection(db, COMPANIES_COLLECTION_NAME)),
    querySnapshot = await getDocs(q);

  let companies = [];

  return new Promise((resolve) => {
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
  const q = query(
      collection(db, JOBS_COLLECTION_NAME),
      where("isActive", "==", true)
    ),
    querySnapshot = await getDocs(q);

  let jobs = [];

  return new Promise((resolve) => {
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
export async function fetchCompanyById(companyId) {
  const q = query(
      collection(db, COMPANIES_COLLECTION_NAME),
      where("id", "==", companyId)
    ),
    querySnapshot = await getDocs(q);

  let company = [];

  return new Promise((resolve) => {
    if (querySnapshot) {
      querySnapshot.forEach((doc) => {
        let companyDoc = doc.data();
        companyDoc.id = doc.id;
        company.push(companyDoc);
      });

      return resolve(company);
    } else {
      return resolve(1);
    }
  });
}
export async function fetchJobsByCompany(companyIds) {
  // Create a query to filter jobs by postingCompanyId
  const chunkSize = 30;
  let allJobs = [];

  // Split companyIds into chunks of 30 or fewer
  for (let i = 0; i < companyIds.length; i += chunkSize) {
    const chunk = companyIds.slice(i, i + chunkSize);

    // Create a query to filter jobs by postingCompanyId for this chunk
    const q = query(
      collection(db, JOBS_COLLECTION_NAME),
      where("postingCompanyId", "in", chunk),
      where("isActive", "==", true)
    );

    // Fetch the query results
    const querySnapshot = await getDocs(q);

    // Process the results and add to allJobs
    if (querySnapshot) {
      querySnapshot.forEach((doc) => {
        let jobDoc = doc.data();
        jobDoc.id = doc.id;
        allJobs.push(jobDoc);
      });
    }
  }

  return allJobs;
  // const q = query(
  //   collection(db, JOBS_COLLECTION_NAME),
  //   where("postingCompanyId", "in", companyIds),
  //   where("isActive", "==", true)
  // );

  // // Fetch the query results
  // const querySnapshot = await getDocs(q);

  // // Process the results into an array of jobs
  // let jobs = [];

  // return new Promise((resolve) => {
  //   if (querySnapshot) {
  //     querySnapshot.forEach((doc) => {
  //       let jobDoc = doc.data();
  //       jobDoc.id = doc.id;
  //       jobs.push(jobDoc);
  //     });

  //     resolve(jobs);
  //   } else {
  //     resolve([]);
  //   }
  // });
}
export async function fetchLogo(filename) {
  const storage = getStorage();

  return new Promise((resolve) => {
    getDownloadURL(ref(storage, `${STORAGE_BUCKET_LOGO_DIR}${filename}`)).then(
      (url) => {
        if (url) {
          return resolve(url);
        } else {
          return null;
        }
      }
    );
  });
}
