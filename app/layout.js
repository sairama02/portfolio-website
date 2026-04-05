import "./globals.css";

export const metadata = {
  title: "Sai Rama Balakrishnan Portfolio",
  description: "Interactive portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}