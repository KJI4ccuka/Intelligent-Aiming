import { Lexend } from 'next/font/google';
import './globals.css';

const lexend = Lexend({
  subsets: ['latin'],
  variable: '--font-lexend',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});


export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body className={`${lexend.className} relative antialiased`}>
      {children}
    </body>
    </html>
  );
}
