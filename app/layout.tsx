import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import { ThemeProvider } from "@/context/theme-provider";
import { Header } from "@/components/sections";
import "./globals.css";

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next.js Template",
  description: "A Next.js template with shadcn/ui and tailwind css installed",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${josefinSans.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
