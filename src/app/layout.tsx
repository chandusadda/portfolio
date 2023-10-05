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
      <body className="bg-white dark:bg-black min-h-[100vh] overflow-y-auto">
        <ThemeProvider storageKey="theme" enableSystem={false} attribute="class">
          <HeaderComp />
          <div className="w-full">
            {children}
          </div>
          <FooterComp />
        </ThemeProvider>
      </body>
    </html>
  );
}
