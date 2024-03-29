"use client";
import { hasCookie, setCookie } from "cookies-next";
import { useEffect, useState } from "react";

const CookieConsent = (props) => {
  const [showConsent, setShowConsent] = useState(true);

  useEffect(() => {
    setShowConsent(hasCookie("localConsent"));
  }, []);

  const acceptCookie = () => {
    const expirationDate = new Date();
    // Set the cookie to expire in 30 days (you can adjust the expiration time as needed)
    expirationDate.setDate(expirationDate.getDate() + 30);

    setShowConsent(true);
    setCookie("localConsent", "true", { expires: expirationDate });
  };

  if (showConsent) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 z-[2147483647] flex p-4">
      <div className="flex max-md:flex-col items-center max-md:items-start justify-start gap-4 bg-gray-100 p-5 border-[1px] border-gray-300 shadow-lg shadow-gray-400/20">
        <span className="">
          🍪 This website uses cookies to improve user experience. By using our
          website you consent to all cookies in accordance with our{" "}
          <a href="/cookies-policy" target="_blank" className="font-bold">
            Cookie Policy
          </a>
          .
        </span>
        <button
          className="bg-green-500 hover:bg-green-600 py-1 px-4 rounded text-white"
          onClick={() => acceptCookie()}
        >
          Accept
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
