import "./globals.css";

export const metadata = {
  title: "AutomForest AI",
  description: "Future Proof Your Business with AI Automation.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>{children}</body>
    </html>
  );
}
