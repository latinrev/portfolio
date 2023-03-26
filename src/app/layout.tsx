import "./globals.css";

export const metadata = {
  title: "JOEL CASTILLO PORTFOLIO",
  description: "FULL STACK WEB DESIGN PORTFOLIO --- JOEL CASTILLO",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
