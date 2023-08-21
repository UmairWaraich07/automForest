import "./globals.css";

export const metadata = {
  title: "AutomForest AI",
  description: "Future Proof Your Business with AI Automation.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
