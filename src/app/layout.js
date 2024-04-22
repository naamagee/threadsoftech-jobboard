import { Inter } from "next/font/google";
import "./globals.css";

const LogRocket = require('logrocket');
const setupLogRocketReact = require('logrocket-react');

// only initialize when in the browser
if (typeof window !== 'undefined') {
  LogRocket.init('app/id');
  // plugins should also only be initialized when in the browser
  setupLogRocketReact(LogRocket);
}

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Threads of Tech - Fashion-Tech Jobboard Site Title",
  description: "copy about description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
