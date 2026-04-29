import type { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <nav>Dashboard Menu</nav>
      <section>{children}</section>
    </div>
  );
}
