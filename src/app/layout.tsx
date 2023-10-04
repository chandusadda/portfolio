import "./globals.css";
import { ThemeProvider } from "../components/ThemeProvider";
import HeaderComp from "@/components/Header";
import FooterComp from "@/components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white dark:bg-black min-h-[100dvh]">
        <ThemeProvider storageKey="theme" enableSystem={false} attribute="class">
          <HeaderComp />
          <div className="w-full container p-4 mx-auto h-[100vh]">
            {children}
          </div>
          <FooterComp />
        </ThemeProvider>
      </body>
    </html>
  );
}
