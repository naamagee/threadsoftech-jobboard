//'use client'

import { collection, doc, setDoc, getDoc, getDocs } from "firebase/firestore"; 
import { COMPANIES_COLLECTION_NAME, JOBS_COLLECTION_NAME } from '../constants';
import { db } from '../firebase'

// async function getCompanies() {
//     return await getDocs(collection(db, COMPANIES_COLLECTION_NAME))
// }

async function getData() {
    let companies = [], jobs = [];
    const firestoreCompaniesCollection = await getDocs(collection(db, COMPANIES_COLLECTION_NAME));

    firestoreCompaniesCollection.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        companies.push(doc.data())
    });

    return {
        companies: companies,
        //jobs: jobs
    };
  }

export default async function DataDemo() {
    const firestoreData = await getData();

    return (
        <>
            <h3>companies list</h3>
            <div style={{ maxHeight: 500, overflowX: 'scroll' }}>
                {
                    firestoreData.companies ? 
                    JSON.stringify(firestoreData.companies ) : 
                    'no data'
                }
            </div>
        </>
    )
}
