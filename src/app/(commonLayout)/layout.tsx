import Footer from "@/components/shared/Footer/Footer";
import Navbar from "@/components/shared/navbar/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="bg-white">
      <Navbar />
      <div className="min-h-screen">{children}</div>
      <Footer />
    </main>
  );
}
