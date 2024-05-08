import { Inter } from "next/font/google";
import "./globals.css";

require('dotenv').config()

const inter = Inter({ subsets: ["latin"] });
export const metadata = { // TODO
  title: "Threads of Tech - Fashion-Tech Jobboard Site Title",
  description: "copy about description",
};

if (typeof window !== 'undefined') {
  LogRocket.init('app/id');
  setupLogRocketReact(LogRocket);
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
