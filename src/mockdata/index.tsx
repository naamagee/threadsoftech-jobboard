type Field = {
  name: string;
  quantity: number;
};
const fields: Array<Field> = [
  {
    name: "Engineering",
    quantity: 20,
  },
  {
    name: "Design",
    quantity: 12,
  },
  {
    name: "Sales",
    quantity: 5,
  },
  {
    name: "Marketing",
    quantity: 23,
  },
  {
    name: "Finance",
    quantity: 3,
  },
  {
    name: "Product",
    quantity: 2,
  },
  {
    name: "Data",
    quantity: 21,
  },
  {
    name: "Operations",
    quantity: 9,
  },
];

type JobListing = {
    title: string;
    company: string;
    location: string;
    salary: number;
    description: string;
}
const jobListings: Array<JobListing> = [
  {
    title: "Software Engineer",
    company: "Google",
    location: "Mountain View, CA",
    salary: 120000,
    description: "Work on the world's most popular search engine",
  },
  {
    title: "Product Designer",
    company: "Facebook  ",
    location: "Menlo Park, CA",
    salary: 100000,
    description: "Design the next generation of social media products",
    },
    {
    title: "Sales Manager",
    company: "Salesforce",
    location: "San Francisco, CA",
    salary: 80000,
    description: "Manage a team of sales professionals",
    }
]

