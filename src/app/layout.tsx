import { Inconsolata } from "next/font/google";
import "./globals.css";

const inconsolata = Inconsolata({
  variable: "--font-inconsolata",
  weight: ["400", "500", "700", "800"],
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-dvh antialiased bg-mobile bg-size-mobile bg-no-repeat md:bg-desktop md:bg-size-desktop bg-position-mobile md:bg-position-desktop">
        <main className="px-4 pt-8 pb-36 2xl:pb-4">{children}</main>
      </body>
    </html>
  );
}
