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

  // روابط الواتساب المباشرة
  const whatsappTechnical = "https://wa.me/971543334355"; // الدعم الفني
  const whatsappSales = "https://wa.me/971559572339"; // المبيعات والحسابات
  const telegram = "https://t.me/sbooot47"; // المبيعات والحسابات

  return (
    <>
      {/*__Scroll_To_Top__*/}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="animate-bounce cursor-pointer fixed bottom-6 right-6 z-50 border-white border-3 outline-3 outline-amber-500 bg-amber-500 hover:bg-amber-600 text-white p-2 rounded-full shadow-lg transition-all duration-300"
        >
          <FaArrowUp className="text-2xl" />
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

            <div className="flex justify-center items-center gap-4 mb-5">
              {/* الزر الأول: الدعم الفني (أخضر مضيء ونبّاض) */}
              <a
                href={whatsappTechnical}
                target="_blank"
                rel="noopener noreferrer"
                title="الدعم الفني"
                className="relative flex items-center justify-center bg-green-500 hover:bg-green-600 text-white p-3 rounded-xl transition-all duration-300 shadow-[0_0_15px_rgba(34,197,94,0.5)] hover:shadow-[0_0_25px_rgba(34,197,94,0.8)] hover:scale-105 group"
              >
                {/* تأثير النبض الخلفي */}
                <span className="absolute inset-0 rounded-xl bg-green-500/30 animate-pulse pointer-events-none"></span>
                <span className="hidden md:inline-block mr-2 text-sm font-bold tracking-wide">
                  {" "}
                </span>
                <FaWhatsapp className="text-2xl transition-transform group-hover:rotate-12" />
                <span className="hidden md:inline-block mr-2 text-sm font-bold tracking-wide">
                  {" "}
                </span>
              </a>

              {/* الزر الثاني: المبيعات والاشتراكات (ذهبي ملكي فاخر) */}
              <a
                href={whatsappSales}
                target="_blank"
                rel="noopener noreferrer"
                title="المبيعات والحسابات"
                className="relative flex items-center justify-center bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-white p-3 rounded-xl transition-all duration-300 shadow-[0_0_15px_rgba(245,158,11,0.4)] hover:shadow-[0_0_25px_rgba(245,158,11,0.7)] hover:scale-105 group border border-amber-400/30"
              >
                <span className="hidden lg:inline-block  mr-2 text-sm font-bold tracking-wide"></span>
                <FaWhatsapp className="text-2xl transition-transform group-hover:rotate-12" />
                <span className="hidden lg:inline-block  mr-2 text-sm font-bold tracking-wide"></span>
              </a>

              {/* الزر الثالث: التليجرام (أزرق فاتح) */}
              <a
                href={telegram}
                target="_blank"
                rel="noopener noreferrer"
                title="التليجرام"
                className="relative flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-xl transition-all duration-300 shadow-[0_0_15px_rgba(59,130,246,0.4)] hover:shadow-[0_0_25px_rgba(59,130,246,0.7)] hover:scale-105 group border border-blue-400/30"
              >
                <span className=" hidden lg:inline-block   mr-2 text-sm font-bold tracking-wide"></span>
                <FaTelegram className="text-2xl transition-transform group-hover:rotate-12" />
                <span className=" hidden lg:inline-block mr-2 text-sm font-bold tracking-wide"></span>
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
