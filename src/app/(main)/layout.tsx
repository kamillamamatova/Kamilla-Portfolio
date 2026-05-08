import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative z-10 min-h-dvh">
      <Nav />
      <main id="main" className="mx-auto w-full max-w-5xl px-5 py-10">
        {children}
      </main>
      <Footer />
    </div>
  );
}
