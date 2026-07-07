import type { ReactNode } from "react";

export const metadata = {
  title: "River Tyne - Admin Portal",
  description: "Manage River Tyne website content, translations, and assets.",
};

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="w-full flex flex-col flex-1 min-h-screen bg-slate-950 text-slate-100">
      {children}
    </div>
  );
}
