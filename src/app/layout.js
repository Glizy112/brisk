import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  //variable: "--font-poppins-sans",
  weight: '400',
  subsets: ["latin"],
});

export const metadata = {
  title: "Brisk | Focuspaces",
  description: "A cohesive research and browsing assistant workspace",
  robots: {
    index: true,
    follow: true,
    nocache: false,
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${poppins.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
