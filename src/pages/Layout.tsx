import Header from "@/components/Header/Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
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
  );
}