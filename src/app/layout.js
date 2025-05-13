import HeapAnalytics from "@/app/analytics/HeapAnalytics";
import { Figtree } from "next/font/google";
import "./globals.css";

const figtreeSans = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

export const metadata = {
  title: "DesignOrah",
  description: "Design template store for SaaS startups",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <HeapAnalytics />
      <body
        className={`${figtreeSans.variable} antialiased font-[family-name:var(--font-figtree)]`}
      >
        {children}
      </body>
    </html>
  );
}
