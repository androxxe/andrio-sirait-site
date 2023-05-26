import { profile } from "@/data";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: `Profile ${profile.name}`,
  description: `Profile ${profile.name} Personal Website`,
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
