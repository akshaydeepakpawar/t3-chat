import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "T3-Chat app",
  description: "this is the t3 chat you can use free models of ai at one place",
};

export default function RootLayout({children}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} antialiased`}>{children}</body>
    </html>
  );
}
