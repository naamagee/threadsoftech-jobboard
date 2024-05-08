class Job { 
    // all commented args here are left for future use, not including now bc simpler for now 
    constructor(
        id, // guid
        //postedBy
        postedDate,
        contactWebsite,
        //contactEmailAddr
        //contactLink1
        //contactLink2
        // desiredStartDateType
        desiredStartDateFixed, // make sure this is a properly formatted date (when it is input)
        // desiredStartDateRangeMin
        // desiredStartDateRangeMax
        // contractLengthType
        // contractLengthUnits
        // contractLengthFixed
        // contractLengthRangeMin
        // contractLengthRangeMax
        jobTitle, // aka title 
        shortDescription, // aka subtitle
        // jobApplicationType, // link or form 
        jobApplicationLink,
        //jobApplicationForm, // as id? figure this out
        payType, // ('hourly' || 'yearly'), determines which of the following 2 args are shown on the post 
        hourlyRate,
        yearlyRate,
        // one two or all of these can be checked: 
        isRemote, 
        isHybrid,
        isOnsite,
        tags, // (as csv, no repeaters, eg. - react,sql,nodejs,marketing  )
        postContent, // (formatted rich text)
        isActive // null and true mean active, false means not active (TODO: default dont select non actives to client)
    ) { 
        this.id = id;
        //this.postedBy
        this.postedDate = postedDate;
        this.contactWebsite = contactWebsite;
        //this.contactEmailAddr
        //this.contactLink1
        //this.contactLink2
        // this.desiredStartDateType
        this.desiredStartDateFixed = desiredStartDateFixed;
        // this.desiredStartDateRangeMin
        // this.desiredStartDateRangeMax
        // this.contractLengthType
        // this.contractLengthUnits
        // this.contractLengthFixed
        // this.contractLengthRangeMin
        // this.contractLengthRangeMax
        this.jobTitle = jobTitle;
        this.shortDescription = shortDescription;
        this.jobApplicationLink = jobApplicationLink;
        this.payType = payType;
        this.hourlyRate = hourlyRate;
        this.yearlyRate = yearlyRate;
        // this.hourlyRateRangeMin
        // this.hourlyRateRangeMax
        this.isRemote = isRemote;
        this.isHybrid = isHybrid;
        this.isOnsite = isOnsite;
        this.tags = tags;
        this.postContent = postContent;
        this.isActive = isActive;
    }
}
