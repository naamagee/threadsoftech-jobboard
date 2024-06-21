export type Job = {
    yearlySalary: string;
    isInternship: boolean;
    postingCompanyId: string;
    jobTitle: string;
    hourlySalary: string;
    isHybrid: boolean;
    postedDate: string;
    isActive: boolean;
    postContent: string;
    id: string;
    applicationLink: string;
    isRemote: boolean;
    isOnsite: boolean;
    tags: string;
    shortDescription: string;
    isContract: boolean;
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
    Jobs: Job[];  
  }