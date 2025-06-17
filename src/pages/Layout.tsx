import Header from "@/components/Header/Header";
import HeaderProvider from "@/context/HeaderProvider";
import type { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
  pageTitle?: string;
  showBackButton?: boolean;
}

export default function Layout({ children, pageTitle = 'Pop Movies', showBackButton = false }: LayoutProps) {
  return (
    <HeaderProvider initialTitle={pageTitle} initialShowBackButton={showBackButton}>
      <div className="container">
        <div className="wrapper">
          <div className="application">
            <Header />
            <main className="content">
              {children}
            </main>
          </div>
        </div>
      </div>
    </HeaderProvider>
  );
}