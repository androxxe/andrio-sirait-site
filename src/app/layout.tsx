import "./globals.css";
import { Footer, SidebarProfile } from "@/components";
import { Plus_Jakarta_Sans } from "next/font/google";
import { profile } from "@/data";
import { Metadata } from "next";

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${profile.name}`,
  description: `${profile.name} Personal Website`,
};

export default async function RootLayout({ children }: { children: React.ReactNode; menu: string }) {
  fetch(`${process.env.APP_URL}/api/stats`);

  return (
    <html lang="en">
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
