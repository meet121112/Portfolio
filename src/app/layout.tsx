import type {Metadata} from 'next';
import Script from 'next/script';
import './globals.css';

export const metadata: Metadata = {
  title: 'Meet Patel | Web Designer & Developer',
  description: 'Professional portfolio of Meet Patel, a Web Designer & Developer specializing in building high-performance digital experiences.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body 
        className="font-body antialiased min-h-screen selection:bg-accent/30 selection:text-foreground"
        suppressHydrationWarning
      >
        {children}
        {/* Global Instagram Embed Script - Loaded once with lazyOnload to prevent hydration/unload noise */}
        <Script 
          src="https://www.instagram.com/embed.js" 
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
