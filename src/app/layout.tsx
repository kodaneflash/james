import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata = {
  title: `James Archer`,
  description: "Showcase of software projects by James Archer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="scroll-smooth antialiased [font-feature-settings:'ss01'] font-soehne">
        {children}
      </body>
      <Analytics />
    </html>
  );
}
