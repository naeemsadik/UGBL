"use client";

import type { ReactNode } from "react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { OfficeAddresses } from "@/components/office-addresses";
import { LanguageProvider } from "@/lib/language-context";

type SiteShellProps = {
  children: ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
  return (
    <LanguageProvider>
      <div className="flex min-h-screen flex-col bg-white text-[#1f2937]" suppressHydrationWarning>
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <OfficeAddresses />
        <SiteFooter />
      </div>
    </LanguageProvider>
  );
}

