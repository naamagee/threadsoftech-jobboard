import "./globals.css";

export const metadata = {
  // TODO
  title: "Work In Fashion-Tech | Threads of Tech",
  description: "Threads of Tech is curating a list of roles in fashion-tech.",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
