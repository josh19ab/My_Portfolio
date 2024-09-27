import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Roboto_Mono } from "next/font/google";

const roboto_mono = Roboto_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Joshua's Portfolio",
  description: "A simple NextJs portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={roboto_mono.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
