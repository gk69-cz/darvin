import type { Metadata } from "next";
import { DM_Sans, Limelight } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";

const inter = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Darvin",
  description: "Your Personal Agency Builder",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >{children}
          </ThemeProvider>
        </body>
      </html>

  );
}
