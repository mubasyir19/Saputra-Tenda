import '../globals.css';

export const metadata = {
  title: 'PT Saputra Tenda Sejahtera',
  description: 'Konveksi pembuat perlengkapan kain untuk dekorasi tenda, hotel, dan kantor.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
