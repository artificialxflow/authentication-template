import './globals.css';
import Navbar from './components/Navbar';

export const metadata = {
  title: 'Authentication App',
  description: 'A Next.js application with authentication',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}