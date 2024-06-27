import { Job, Company, CompanyWithJobs } from "@/types";
import {
  fetchCompanies,
  fetchJobs,
  fetchJobsByCompany,
  fetchCompanyById,
  fetchLogo,
} from "../firebase";

export async function _fetchCompanies(): Promise<Company[]> {
  const res = await fetchCompanies();

  if (res === 0) {
    throw new Error("Failed to fetch companies data");
  }

  return res;
}

export async function _fetchJobs(): Promise<Job[]> {
  const res = await fetchJobs();

  if (res === 0) {
    throw new Error("Failed to fetch jobs data");
  }

  return res;
}

export async function _fetchJobsByCompany(
  companyIds: string[]
): Promise<Job[]> {
  const res = await fetchJobsByCompany(companyIds);

  if (res === 0) {
    throw new Error("Failed to fetch jobs data");
  }

  return res;
}
type CompanyLookup = Company & {
  companyLogoUrl: string;
  // Include other properties of company objects as needed
  Jobs: Job[]; // Use a more specific type instead of any if possible
};

export async function _allJobsByCompanies() {
  const companies = await _fetchCompanies();
  const companyIds = companies.map((c) => c.id);

  // const companyLogoUrls = companies.map(
  //   async (c) => await fetchLogo(c.companyLogoId))

  
if (!companyIds.length) {
    return {};
  }
  const jobs = await _fetchJobsByCompany(companyIds);

  const companyLogoUrls = await Promise.all(
    companies.map(async (c) => {
      const url = await fetchLogo(c.companyLogoId);
      return { [c.id]: url };
    })
  ).then((res) => {
    return res.reduce((acc, obj) => {
      return { ...acc, ...obj };
    }, {});
  });
    console.log("clu", companyLogoUrls)

  const companyLookup: Record<string, CompanyWithJobs> = companies.reduce<
    Record<string, CompanyLookup>
  >((acc, company) => {
    const companyLogoUrl = companyLogoUrls[company.id];
    acc[company.id] = {
      ...company,
      Jobs: [],
      companyLogoUrl,
    };
    return acc;
  }, {});

  jobs.forEach((job) => {
    const companyId = job.postingCompanyId;

    if (companyLookup[companyId]) {
      companyLookup[companyId].Jobs.push(job);
    }
  });

  // companyLogoUrls.forEach((url, i) => {


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
