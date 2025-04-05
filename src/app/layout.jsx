//import { Geist, Geist_Mono } from "next/font/google";
import "./reset.css";
import "./globals.css";



/*const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});*/

export const metadata = {
  title: "Rinha do Campus IV",
  description: "Site oficial da Rinha do Campus IV",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
