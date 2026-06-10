
//__Header__//
import React from "react";
import { FaTelegram, FaWhatsapp } from "react-icons/fa";

const Header = () => {
  // روابط الواتساب المباشرة
  const whatsappTechnical = "https://wa.me/971543334355"; // الدعم الفني
  const whatsappSales = "https://wa.me/971559572339";     // المبيعات والحسابات
  const telegram = "https://t.me/sbooot47";    // المبيعات والحسابات

  return (
    <header className="bg-black border-b border-gray-800 sticky top-0 z-50 shadow-lg shadow-black/50">
      <div className="container mx-auto px-6 p-2">
        <div className="flex items-center justify-between">
          
          {/* الـ Logo جهة اليمين أو اليسار حسب الـ Flex */}
          <div className="w-32 h-16 rounded flex items-center justify-center">
            <img 
              src="/logo.jpeg" 
              alt="CemeUtv logo" 
              className="w-full h-full object-contain" 
            />
          </div>

          {/* أزرار الواتساب الفخمة والمميزة */}
          <div className="flex items-center gap-4">
            
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
              <span className="hidden md:inline-block mr-2 text-sm font-bold tracking-wide"> </span>
              <FaWhatsapp className="text-2xl transition-transform group-hover:rotate-12" />
              <span className="hidden md:inline-block mr-2 text-sm font-bold tracking-wide"> </span>
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

        </div>
      </div>
    </header>
  );
};

export default Header;