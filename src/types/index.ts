export type Job = {
    salary: string;
    postingCompanyId: string;
    jobTitle: string;
    postedDate: string;
    isActive: boolean;
    postContent: string;
    id: string;
    applicationLinks: string;
    tags: string;
    shortDescription: string;
    jobType: string
    locationType: string;
  }
  
 export type Company = {
    linkTikTok: string;
    subtitle: string;
    linkLinkedin: string;
    title: string;
    linkTelegram: string;
    linkDiscord: string;
    linkXTwitter: string;
    companyLogoId: string;
    linkFacebook: string;
    linkWebsite: string;
    linkInsta: string;
    companyContent: string;
    hqLocation: string;
    id: string;
  }

export type CompanyWithJobs = {
    linkTikTok: string;
    subtitle: string;
    linkLinkedin: string;
    title: string;
    linkTelegram: string;
    linkDiscord: string;
    linkXTwitter: string;
    companyLogoId: string;
    linkFacebook: string;
    linkWebsite: string;
    linkInsta: string;
    companyContent: string;
    hqLocation: string;
    id: string;
    companyLogoUrl: string;
    Jobs: Job[];  
  }