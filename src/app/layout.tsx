import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-dvh antialiased bg-custom">
        <main className="px-4 pt-8 pb-36 2xl:pb-4">{children}</main>
      </body>
    </html>
  );
}
