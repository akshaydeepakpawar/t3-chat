export const dynamic = "force-dynamic";
import "./globals.css";
import { Poppins } from "next/font/google";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { QueryProvider } from "@/components/providers/query-provider";
import { Toaster } from "sonner";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "T3-Chat app",
  description: "this is the t3 chat you can use free models of ai at one place",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} antialiased`}>
        <QueryProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Toaster />
            {children}
          </ThemeProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
