import type { Metadata } from "next";
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import "./globals.css";
import { Background } from "@/components/Background";

export const metadata: Metadata = {
  title: "Subhash Jha | Full Stack Developer",
  description: "Subhash Jha - Full stack developer / Javascript is <3. Portfolio featuring MERN, Next.js, and modern web technologies.",
  keywords: "Subhash Jha, developer portfolio, github portfolio, Developer, AWS, CSS3, Docker, Express.js, JavaScript, Material UI, Next.js, Node.js, Nuxt.js, Python, TypeScript",
  authors: [{ name: "Subhash Jha" }],
  creator: "Subhash Jha",
  publisher: "DevFolio",
  robots: "index, follow",
  openGraph: {
    title: "Subhash Jha - Developer | DevFolio",
    description: "Full stack developer / Javascript is <3",
    url: "https://github.com/subhash-jhaa",
    siteName: "DevFolio",
    locale: "en_US",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Subhash Jha - Developer",
    description: "Full stack developer / Javascript is <3",
  },
};


import { ThemeProvider } from "@/components/ThemeProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`} suppressHydrationWarning>
      <body className="antialiased selection:bg-blue-100 selection:text-blue-900 dark:selection:bg-blue-900 dark:selection:text-blue-100 bg-background text-foreground transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Background />
          <div className="max-w-[1440px] mx-auto min-h-screen">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

