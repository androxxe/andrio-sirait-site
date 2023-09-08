import "./globals.css";
import { Footer, SidebarProfile } from "@/components";
import { Plus_Jakarta_Sans } from "next/font/google";
import { profile } from "@/data";
import { Metadata } from "next";
import Head from "next/head";
import Script from "next/script";

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${profile.name}`,
  description: `${profile.name} Personal Website`,
};

export default async function RootLayout({ children }: { children: React.ReactNode; menu: string }) {
  return (
    <html lang="en">
      <Script async defer src="https://umami.andriosirait.com/script.js" data-website-id="366ca6bc-1e5d-4693-afb9-e737abcd2e41" data-domains="andriosirait.com"></Script>
      <body className={plusJakartaSans.className}>
        <main className="bg-background p-3 md:p-10 lg:h-screen">
          <div className="bg-gray-50 rounded-lg lg:h-full relative flex flex-col lg:flex-row justify-start items-start">
            <SidebarProfile />
            <div className="ml-auto w-full h-full relative">{children}</div>
          </div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
