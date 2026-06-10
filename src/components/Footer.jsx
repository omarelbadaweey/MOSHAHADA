//__Footer__//
import React, { useState, useEffect } from "react";
import {
  FaWhatsapp,
  FaArrowUp,
  FaTelegram,
  FaInstagram,
  FaTwitter,
  FaFacebook,
} from "react-icons/fa";

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>


      {/*__Scroll_To_Top__*/}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="cursor-pointer fixed bottom-6 right-6 z-50 border-white border-3 outline-3 outline-amber-500 bg-amber-500 hover:bg-amber-600 text-white p-2 rounded-full shadow-lg transition-all duration-300"
        >
          <FaArrowUp className="text-3xl" />
        </button>
      )}

      {/* Footer */}
      <footer dir="rtl" className="bg-black border-t border-gray-800">
        <div className="container mx-auto px-4 py-10">
          <div className="text-center">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-white">
                <img
                  className="w-44 mx-auto"
                  src="/logo.jpeg"
                  alt="MOSHAHADA Logo"
                />
              </h3>
            </div>

            {/* social */}

            <div className=" my-5 flex justify-center space-x-3 rtl:space-x-reverse ">
              <a
                // href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg transition-all duration-300 transform hover:scale-110"
                title="فيسبوك"
              >
                <FaFacebook className="text-2xl" />
              </a>

              <a
                // href="#"
                target="_blank"
                rel="noopener noreferrer"
                className=" bg-sky-500 hover:bg-sky-600 text-white p-2 rounded-lg transition-all duration-300 transform hover:scale-110"
                title="تويتر"
              >
                <FaTwitter className="text-2xl" />
              </a>

              <a
                // href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-pink-600 mx-3 hover:bg-pink-700 text-white p-2 rounded-lg transition-all duration-300 transform hover:scale-110"
                title="انستجرام"
              >
                <FaInstagram className="text-2xl" />
              </a>

              <a
                // href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg transition-all duration-300 transform hover:scale-110"
                title="تلجرام"
              >
                <FaTelegram className="text-2xl" />
              </a>
            </div>

            <div className="text-gray-200 text-md">
              © 2026 MOSHAHADA. جميع الحقوق محفوظة.
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
