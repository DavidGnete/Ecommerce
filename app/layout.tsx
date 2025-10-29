import './globals.css';
import { Inter } from 'next/font/google';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 font-sans">


        <main>{children}</main>

        {/* Example: footer */}
        <footer className="p-4 text-center text-gray-600">© 2025 Acme</footer>
      </body>
    </html>
  );
}
