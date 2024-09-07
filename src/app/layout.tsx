import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
export const metadata = {
  title: "Joel Castillo",
  description: "I'm Joel Castillo a Full stack web developer based on the US, inspired by minimalism and creating proudcts that connect the world",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Analytics/>
      <body>{children}</body>
    </html>
  );
}
