import { fetchCompanies, fetchJobs, fetchLogo } from '../firebase';

export async function _fetchCompanies() {
    const res = await fetchCompanies();
  
    if (res === 0) {
      throw new Error('Failed to fetch companies data');
    }
  
    return res;
  }
  
 export async function _fetchJobs() {
    const res = await fetchJobs();
  
    if (res === 0) {
      throw new Error('Failed to fetch jobs data');
    }
  
    return res;
  }