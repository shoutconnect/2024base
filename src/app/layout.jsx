import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";

export const metadata = {
  title: "Title",
  description: "Description",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <CookieConsent />
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
