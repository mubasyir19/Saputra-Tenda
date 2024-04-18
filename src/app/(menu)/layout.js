import '../globals.css';
import Chat from '@/components/Chat';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'PT Saputra Tenda Sejahtera',
  description: 'Konveksi pembuat perlengkapan kain untuk dekorasi tenda, hotel, dan kantor.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <main className='relative'>
          <Chat />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
