import { Job, Company } from "@/types";
import {
  fetchCompanies,
  fetchJobs,
  fetchJobsByCompany,
  fetchCompanyById,
} from "../firebase";

export async function _fetchCompanies(): Promise<Company[]>{
  const res = await fetchCompanies();

  if (res === 0) {
    throw new Error("Failed to fetch companies data");
  }

  return res;
}

export async function _fetchJobs(): Promise<Job[]>{
  const res = await fetchJobs();

  if (res === 0) {
    throw new Error("Failed to fetch jobs data");
  }

  return res;
}

export async function _fetchJobsByCompany(companyIds: string[]): Promise<Job[]> {
  const res = await fetchJobsByCompany(companyIds);

  if (res === 0) {
    throw new Error("Failed to fetch jobs data");
  }

  return res;
}
type CompanyLookup = {
  id: string;
  // Include other properties of company objects as needed
  Jobs: Job[]; // Use a more specific type instead of any if possible
};
export async function _allJobsByCompanies() {
  const companies = await _fetchCompanies();
  const companyIds = companies.map((c) => c.id);
  if (!companyIds.length) {
    return {};
  }
  const jobs = await _fetchJobsByCompany(companyIds);

  const companyLookup: Record<string, CompanyLookup> = companies.reduce<Record<string, CompanyLookup>>((acc, company) => {
    acc[company.id] = {
      ...company,
      Jobs: [],
    };
    return acc;
  }, {});

  jobs.forEach((job) => {
    const companyId = job.postingCompanyId;

    if (companyLookup[companyId]) {
      companyLookup[companyId].Jobs.push(job);
    }
  });

  // Convert companyLookup to the desired format
  // return Object.values(companyLookup);
  const companiesWithJobs = Object.values(companyLookup).filter(
    (company) => company.Jobs.length > 0
  );

  return companiesWithJobs;
}

export async function _fetchCompanyById(id: string) {
  const res = await fetchCompanyById(id);

  if (res === 0) {
    throw new Error("Failed to fetch company data");
  }

  return res;
}
