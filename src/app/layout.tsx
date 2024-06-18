import "./globals.css";
import localFont from "next/font/local"
import { Libre_Caslon_Display } from 'next/font/google'

export const metadata = { // TODO
  title: "Threads of Tech - Fashion-Tech Jobboard Site Title",
  description: "copy about description",
};
export const myFont = localFont({
  src: './fonts/MendlSans_DawnBd.ttf',
  display: 'swap',
})
export const libreCaslonDisplay = Libre_Caslon_Display({weight: '400', display: "swap", subsets: ["latin"]})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" >
      <body>{children}</body>
    </html>
  )
}