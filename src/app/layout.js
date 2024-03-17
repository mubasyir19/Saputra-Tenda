import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'PT Saputra Tenda Sejahtera',
  description: 'Konveksi pembuat perlengkapan kain untuk dekorasi tenda, hotel, dan kantor.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
