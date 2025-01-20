import { Geist, Geist_Mono, Roboto } from "next/font/google";
import "./globals.css";
import FormContext from "./context/formContext";
import UpperHeader from "./components/website/upperHeader/UpperHeader";
import Header from "./components/website/Header/Header";
import Footer from "./components/website/Footer/Footer";
import SearchContext from "./context/searchContext";
import CountContext from "./context/countContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  preload: false,
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  preload: false,
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  preload: false,
  display: "swap",
});

export const metadata = {
  title: "e-commerce",
  description: "e-commerce",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${roboto.className}`}
      >
        <UpperHeader />
        <div className="bodyContainer">
          <SearchContext>
            <CountContext>
              <Header />
              <FormContext>{children}</FormContext>
            </CountContext>
            <Footer />
          </SearchContext>
        </div>
      </body>
    </html>
  );
}
