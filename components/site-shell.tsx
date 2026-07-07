"use client";

import type { ReactNode } from "react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { OfficeAddresses } from "@/components/office-addresses";
import { LanguageProvider } from "@/lib/language-context";
import { Preloader } from "@/components/preloader";
import { PageTransition } from "@/components/page-transition";


import { usePathname } from "next/navigation";

type SiteShellProps = {
  children: ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
  const pathname = usePathname();
  const isAdminRoute = pathname?.startsWith("/admin");

  if (isAdminRoute) {
    return (
      <LanguageProvider>
        <div className="flex min-h-screen flex-col bg-slate-900 text-slate-100" suppressHydrationWarning>
          <main className="flex-1 flex flex-col">{children}</main>
        </div>
      </LanguageProvider>
    );
  }

  return (
    <LanguageProvider>
      <Preloader />
      <PageTransition>
        <div className="flex min-h-screen flex-col bg-white text-[#1f2937]" suppressHydrationWarning>
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <OfficeAddresses />
          <SiteFooter />
        </div>
      </PageTransition>
    </LanguageProvider>
  );
}


