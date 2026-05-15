import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Meritocracy Demos Platform",
  description: "A public platform to showcase agency artists and demos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <nav className="border-b border-gray-800 bg-black px-8 py-4">
          <div className="mx-auto flex max-w-6xl items-center justify-between">
            <Link href="/" className="text-xl font-bold text-white">
              Meritocracy Demos
            </Link>

            <div className="flex gap-6 text-sm text-gray-300">
              <Link href="/artists" className="hover:text-white">
                Artists
              </Link>
              <Link href="/all-songs" className="hover:text-white">
                All Songs
              </Link>
            </div>
          </div>
        </nav>

        {children}
      </body>
    </html>
  );
}
