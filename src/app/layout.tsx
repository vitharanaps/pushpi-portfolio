import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from 'next/font/google'
import { ThemeProvider } from "@/providers/theme-provider";
import { InfoProvider } from "@/context/infoContext";
const poppins = Poppins({
  subsets: ['latin'],
weight:["300","500","800"]
})


export const metadata: Metadata = {
  title: "Witharana's Bio",
  description: "Hello Dear, This is mys short description about me",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body
        className={poppins.className}
      >
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <InfoProvider>
        {children}
            </InfoProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
