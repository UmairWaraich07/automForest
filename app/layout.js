import "./globals.css";

export const metadata = {
  title: "AutomForest AI",
  description: "Future Proof Your Business with AI Automation.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/logo.png"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
