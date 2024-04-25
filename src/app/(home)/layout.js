import Navbar from "@/components/Navbar";
import "../globals.css";
import Footer from "@/components/Footer";
import Chat from "@/components/Chat";
import { Bilbo_Swash_Caps, Poppins } from "next/font/google";

export const metadata = {
  title: "PT Saputra Tenda Sejahtera",
  description:
    "Konveksi pembuat perlengkapan kain untuk dekorasi tenda, hotel, dan kantor.",
};

const bilboSwashCaps = Bilbo_Swash_Caps({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className="relative">
          <Chat />
          <header
            className="relative h-screen bg-cover bg-center text-white"
            style={{
              backgroundImage:
                "linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/background.jpg')",
            }}
          >
            <Navbar />
            <section className="flex h-screen items-center justify-center px-8 text-center">
              <div>
                <h1
                  className="text-6xl italic md:text-6xl lg:text-7xl xl:text-8xl"
                  style={bilboSwashCaps.style}
                >
                  Pt Saputra Tenda Sejahtera
                </h1>
                <p
                  className="mt-6 text-sm md:text-base lg:text-xl"
                  style={poppins.style}
                >
                  Konveksi pembuat perlengkapan kain untuk dekorasi tenda,
                  hotel, dan kantor.
                </p>
              </div>
            </section>
          </header>
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
