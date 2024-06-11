import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../globals.css";
import Header from '../../ui/header';
import Footer from '../../ui/footer';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Thank you! Your interview is complete.",
  description: "Thank you for completing your interview.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Meta tags for responsive design */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} bg-gray-100`}>
        <Header />
        <main className="flex flex-col min-h-screen items-center justify-between p-6">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
