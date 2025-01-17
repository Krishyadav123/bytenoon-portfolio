import localFont from "next/font/local";
import "./globals.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./fontawesome.config";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Bytenoon",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/ShortLogo.png" sizes="any" />
        <link rel="icon" type="image/png" href="/ShortLogo.png" />
        <link rel="apple-touch-icon" href="/ShortLogo.png" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
