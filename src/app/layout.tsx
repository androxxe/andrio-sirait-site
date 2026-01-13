import "./globals.css";
import { Footer, SidebarProfile } from "@/components";
import { Plus_Jakarta_Sans } from "next/font/google";
import { profile } from "@/data";
import { Metadata } from "next";
import Script from "next/script";

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: `${profile.name} - ${profile.role}`,
    template: `%s | ${profile.name}`,
  },
  description: profile.about,
  keywords: ['Full-stack Developer', 'Web Developer', 'Mobile Developer', 'TypeScript', 'React', 'Next.js', 'Portfolio'],
  authors: [{ name: profile.name, url: `https://${profile.website}` }],
  creator: profile.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: `https://${profile.website}`,
    title: `${profile.name} - ${profile.role}`,
    description: profile.about,
    siteName: profile.name,
    images: [
      {
        url: `https://${profile.website}${profile.photo_path}`,
        width: 1200,
        height: 630,
        alt: profile.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${profile.name} - ${profile.role}`,
    description: profile.about,
    images: [`https://${profile.website}${profile.photo_path}`],
    creator: '@andriosirait',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const UMAMI_URL = process.env.UMAMI_URL;
  const UMAMI_WEBSITE_ID = process.env.UMAMI_WEBSITE_ID;

  return (
    <html lang="en">
      {UMAMI_URL && UMAMI_WEBSITE_ID && <Script defer src={UMAMI_URL} data-website-id={UMAMI_WEBSITE_ID}></Script>}
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
