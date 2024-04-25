import "../globals.css";
import Chat from "@/components/Chat";
import Footer from "@/components/Footer";
import { Poppins } from "next/font/google";

export const metadata = {
  title: "PT Saputra Tenda Sejahtera",
  description:
    "Konveksi pembuat perlengkapan kain untuk dekorasi tenda, hotel, dan kantor.",
};

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className="relative" style={poppins.style}>
          <Chat />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
