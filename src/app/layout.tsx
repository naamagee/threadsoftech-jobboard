import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Fashion-Tech Jobs | Threads of Tech",
  description:
    "Threads of Tech is curating a list of roles in fashion-tech. Find your next fashion-tech job here.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jobs.threadsoftech.com",
    siteName: "Jobs by Threads of Tech",
    title: "Fashion-Tech Jobs | Threads of Tech",
    description:
      "Threads of Tech is curating a list of roles in fashion-tech. Find your next fashion-tech job here.",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    noimagecache: true,
  },
  author: [
    {
      name: "Threads of Tech",
      email: "threadsoftechnyc@gmail.com",
    },
  ],
  keywords:
    "fashion-tech, fashion tech, fashion technology, fashion jobs, tech jobs, fashion tech jobs, fashion technology jobs, fashion-tech jobs, fashion tech job board, fashion technology job board, fashion job board, tech job board, fashion-tech job board, fashion tech job listing, fashion technology job listing, fashion job listing, tech job listing, fashion-tech job listing, fashion tech job search, fashion technology job search, fashion job search, tech job search, fashion-tech job search, fashion tech job search, fashion technology job search, fashion job search, tech job search, fashion-tech job search, fashion tech job search, fashion technology job search, fashion job search, tech job search, fashion-tech job search, fashion tech job search, fashion technology job search, fashion job search, tech job search, fashion-tech job search, fashion tech job search, fashion technology job search, fashion job search, tech job search, fashion-tech job search, fashion tech job search, fashion technology job search, fashion job search, tech job search, fashion-tech job search, fashion tech job search, fashion technology job search, fashion job search, tech job search, fashion-tech job search, fashion tech job search, fashion technology job search, fashion job search, tech job search, fashion-tech job search, fashion tech job search, fashion technology job search, fashion job search, tech job search, fashion-tech job search, fashion tech job search, fashion technology job search, fashion job search, tech job search, fashion-tech job search, fashion tech job search, fashion technology job search, fashion job search, tech job search, fashion-tech job search, fashion tech job search, fashion technology job search, fashion job search, tech job search, fashion-tech job search, fashion tech job search, fashion technology job search, fashion job search, tech job search, fashion-tech job search, fashion tech job search, fashion technology job search, fashion job search, tech job search, fashion-tech job search, fashion tech job search, fashion technology job search, fashion job search, tech job search, fashion-tech job search, fashion tech job search, fashion technology job search, fashion job search, tech job search, fashion-tech job search, fashion tech job search, fashion technology job search, fashion job search, tech job search, threads of tech",
    creator: "Threads of Tech",
    category: "fashion technology jobs"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
      <Analytics />
    </html>
  );
}

export const revalidate = 0