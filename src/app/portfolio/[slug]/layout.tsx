import { portfolios, profile } from "@/data";
import { Metadata } from "next";
import { redirect } from "next/navigation";

type LayoutProps = {
  children: React.ReactNode;
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params: { slug } }: LayoutProps): Promise<Metadata> {
  const portfolio = portfolios.find((item) => item.slug === slug);

  return {
    title: `${portfolio?.name} - Portfolio ${profile.name}`,
    description: `Profile ${profile.name} Personal Website`,
  };
}

export default function Layout({ children, params: { slug } }: LayoutProps) {
  const portfolio = portfolios.find((item) => item.slug === slug);
  if (!portfolio) {
    return redirect("/portfolio");
  }

  return <>{children}</>;
}
