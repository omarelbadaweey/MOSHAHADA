// // //__Header__//
// // import React, { useState } from "react";
// // import {
// //   FaWhatsapp,
// //   FaBars,
// //   FaTimes,
// //   FaGlobe,
// //   FaChevronDown,
// // } from "react-icons/fa";

// // const Header = ({ onCountrySelect }) => {
// //   const [selectedCountry, setSelectedCountry] = useState("SA");
// //   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
// //   const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);

// //   const countries = [
// //     { code: "SA", name: "السعودية", currency: "ر.س", flag: "🇸🇦" },
// //     { code: "AE", name: "الإمارات", currency: "د.إ", flag: "🇦🇪" },
// //     { code: "US", name: "أمريكا", currency: "$", flag: "🇺🇸" },
// //     { code: "EU", name: "أوروبا", currency: "€", flag: "🇪🇺" },
// //   ];

// //   const selectedCountryData = countries.find(
// //     (country) => country.code === selectedCountry
// //   );

// //   const handleCountrySelect = (country) => {
// //     setSelectedCountry(country.code);
// //     onCountrySelect(country);
// //     // setIsCountryDropdownOpen(false);
// //     // setIsMobileMenuOpen(false);
// //   };

// //   return (
// //     <header className="bg-black border-b border-gray-700 sticky top-0 z-50">
// //       <div className="container mx-auto px-4 py-1">
// //         <div className="flex items-center justify-between">
// //           <div className="w-32 h-20  rounded flex items-center justify-center">
// //             <img src="/logo.jpeg" alt="CemeUtv logo" className="w-[80%] h-[80%] object-cover" />
// //           </div>

// //           {/* nav For Laptop */}
// //           <div className="flex items-center gap-3">
// //             <div className="hidden md:block relative">
// //               <button
// //                 onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
// //                 className="flex items-center space-x-3 bg-gray-900 hover:bg-gray-700 border border-fuchsia-400 rounded-lg px-4 py-2 text-white transition-all duration-300 min-w-48 justify-between"
// //               >
// //                 <div className="flex items-center space-x-2">
// //                   <FaGlobe className="text-fuchsia-400" />
// //                   <span className="text-lg">{selectedCountryData.flag}</span>
// //                   <span className="text-sm">{selectedCountryData.name}</span>
// //                 </div>
// //                 <FaChevronDown
// //                   className={`text-gray-400 transition-transform duration-300 ${
// //                     isCountryDropdownOpen ? "rotate-180" : ""
// //                   }`}
// //                 />
// //               </button>

// //               {/* Dropdown for labtop*/}
// //               {isCountryDropdownOpen && (
// //                 <div className="absolute top-full left-0 mt-2 w-full bg-gray-800 border border-gray-600 rounded-lg shadow-xl z-50 animate-fadeIn">
// //                   {countries.map((country) => (
// //                     <button
// //                       key={country.code}
// //                       onClick={() => handleCountrySelect(country)}
// //                       className={`flex items-center space-x-3 w-full px-4 py-3 text-left transition-all duration-200 ${
// //                         selectedCountry === country.code
// //                           ? "bg-blue-600 text-white"
// //                           : "text-gray-300 hover:bg-gray-700"
// //                       } ${
// //                         country.code !== countries[0].code
// //                           ? "border-t border-gray-600"
// //                           : ""
// //                       }`}
// //                     >
// //                       <span className="text-lg">{country.flag}</span>
// //                       <span className="flex-1 text-sm">{country.name}</span>
// //                       <span className="text-xs text-gray-400">
// //                         {country.currency}
// //                       </span>
// //                     </button>
// //                   ))}
// //                 </div>
// //               )}
// //             </div>
// //             <a
// //               href="https://wa.me/message/T5TPLJI4W7NCK1"
// //               rel="noopener noreferrer"
// //               className="hidden md:block border-3 border-white outline-3 outline-green-500 bg-green-500 hover:bg-green-600 text-white p-2 rounded-full transition-all duration-300"
// //             >
// //               <FaWhatsapp className="text-2xl font-bold" />
// //             </a>
// //           </div>

// //           {/* nav For mobile */}
// //           <div className="flex items-center space-x-4 md:hidden">
// //             <div className="flex items-center space-x-2 bg-gray-900 px-3 py-2 rounded-lg border border-gray-600">
// //               <span className="text-lg text-fuchsia-400">
// //                 {selectedCountryData.flag}
// //               </span>
// //               <span className="text-sm text-white">
// //                 {selectedCountryData.name}
// //               </span>
// //             </div>

// //             {/* menu button */}
// //             <button
// //               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
// //               className="cursor-pointer text-white p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all duration-300 border border-fuchsia-400"
// //             >
// //               {isMobileMenuOpen ? (
// //                 <FaTimes className="text-xl" />
// //               ) : (
// //                 <FaBars className="text-xl" />
// //               )}
// //             </button>

// //             <a
// //               href="https://wa.me/message/T5TPLJI4W7NCK1"
// //               rel="noopener noreferrer"
// //               className="border-3 border-white outline-3 outline-green-500 bg-green-500 hover:bg-green-600 text-white p-2 rounded-full transition-all duration-300"
// //             >
// //               <FaWhatsapp className="text-2xl" />
// //             </a>
// //           </div>
// //         </div>

// //         {/* drop_down for mobile*/}
// //         {isMobileMenuOpen && (
// //           <div className="md:hidden mt-4 bg-gray-800 rounded-lg p-4 border border-gray-700 animate-slideDown">
// //             <div className="space-y-2">
// //               {countries.map((country) => (
// //                 <button
// //                   key={country.code}
// //                   onClick={() => handleCountrySelect(country)}
// //                   className={`flex items-center justify-between w-full px-4 py-3 rounded-lg transition-all duration-300 ${
// //                     selectedCountry === country.code
// //                       ? "bg-blue-600 text-white"
// //                       : "bg-gray-700 text-gray-300 hover:bg-gray-600"
// //                   }`}
// //                 >
// //                   <div className="flex items-center space-x-3">
// //                     <span className="text-lg">{country.flag}</span>
// //                     <span className="text-sm">{country.name}</span>
// //                   </div>
// //                   <span className="text-xs text-gray-300">
// //                     {country.currency}
// //                   </span>
// //                 </button>
// //               ))}
// //             </div>
// //           </div>
// //         )}
// //       </div>
// //     </header>
// //   );
// // };

// // export default Header;




// //__Header__//
// import React, { useState } from "react";
// import {
//   FaWhatsapp,
//   FaBars,
//   FaTimes,
//   FaGlobe,
//   FaChevronDown,
// } from "react-icons/fa";

// const Header = ({ onCountrySelect }) => {
//   const [selectedCountry, setSelectedCountry] = useState("SA");
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);

//   const countries = [
//     { code: "SA", name: "السعودية", currency: "ر.س", flag: "🇸🇦" },
//     { code: "AE", name: "الإمارات", currency: "د.إ", flag: "🇦🇪" },
//     { code: "US", name: "أمريكا", currency: "$", flag: "🇺🇸" },
//     { code: "EU", name: "أوروبا", currency: "€", flag: "🇪🇺" },
//   ];

//   const selectedCountryData = countries.find(
//     (country) => country.code === selectedCountry
//   );

//   const handleCountrySelect = (country) => {
//     setSelectedCountry(country.code);
//     onCountrySelect(country);
//     setIsCountryDropdownOpen(false);
//     setIsMobileMenuOpen(false);
//   };

//   // روابط الواتساب بعد إزالة الـ Domain والاكتفاء بالرقم المباشر
//   const whatsapp1 = "https://wa.me/971543334355";
//   const whatsapp2 = "https://wa.me/971559572339";

//   return (
//     <header className="bg-black border-b border-gray-700 sticky top-0 z-50">
//       <div className="container mx-auto px-4 py-1">
//         <div className="flex items-center justify-between">
//           {/* Logo */}
//           <div className="w-32 h-20 rounded flex items-center justify-center">
//             <img src="/logo.jpeg" alt="CemeUtv logo" className="w-[80%] h-[80%] object-cover" />
//           </div>

//           {/* Navigation for Laptop / Desktop */}
//           <div className="flex items-center gap-4">
//             <div className="hidden md:block relative">
//               <button
//                 onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
//                 className="flex items-center bg-gray-900 hover:bg-gray-700 border border-fuchsia-400 rounded-lg px-4 py-2 text-white transition-all duration-300 min-w-48 justify-between"
//               >
//                 <div className="flex items-center gap-2">
//                   <FaGlobe className="text-fuchsia-400" />
//                   <span className="text-lg">{selectedCountryData.flag}</span>
//                   <span className="text-sm">{selectedCountryData.name}</span>
//                 </div>
//                 <FaChevronDown
//                   className={`text-gray-400 transition-transform duration-300 ${
//                     isCountryDropdownOpen ? "rotate-180" : ""
//                   }`}
//                 />
//               </button>

//               {/* Dropdown for Laptop */}
//               {isCountryDropdownOpen && (
//                 <div className="absolute top-full left-0 mt-2 w-full bg-gray-800 border border-gray-600 rounded-lg shadow-xl z-50 animate-fadeIn">
//                   {countries.map((country) => (
//                     <button
//                       key={country.code}
//                       onClick={() => handleCountrySelect(country)}
//                       className={`flex items-center w-full px-4 py-3 text-left transition-all duration-200 ${
//                         selectedCountry === country.code
//                           ? "bg-blue-600 text-white"
//                           : "text-gray-300 hover:bg-gray-700"
//                       } ${
//                         country.code !== countries[0].code
//                           ? "border-t border-gray-600"
//                           : ""
//                       }`}
//                     >
//                       <span className="text-lg ml-2">{country.flag}</span>
//                       <span className="flex-1 text-sm text-right">{country.name}</span>
//                       <span className="text-xs text-gray-400">
//                         {country.currency}
//                       </span>
//                     </button>
//                   ))}
//                 </div>
//               )}
//             </div>

//             {/* Desktop WhatsApp Buttons */}
//             <div className="hidden md:flex items-center gap-2">
//               <a
//                 href={whatsapp1}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 title="الدعم الفني 1"
//                 className="border-3 border-white outline-3 outline-green-500 bg-green-500 hover:bg-green-600 text-white p-2 rounded-full transition-all duration-300"
//               >
//                 <FaWhatsapp className="text-2xl font-bold" />
//               </a>
//               <a
//                 href={whatsapp2}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 title="الدعم الفني 2"
//                 className="border-3 border-white outline-3 outline-green-500 bg-green-500 hover:bg-green-600 text-white p-2 rounded-full transition-all duration-300"
//               >
//                 <FaWhatsapp className="text-2xl font-bold" />
//               </a>
//             </div>
//           </div>

//           {/* Navigation for Mobile */}
//           <div className="flex items-center gap-2 md:hidden">
//             <div className="flex items-center gap-1 bg-gray-900 px-2 py-2 rounded-lg border border-gray-600">
//               <span className="text-lg text-fuchsia-400">
//                 {selectedCountryData.flag}
//               </span>
//               <span className="text-sm text-white">
//                 {selectedCountryData.name}
//               </span>
//             </div>

//             {/* Mobile WhatsApp Buttons */}
//             <a
//               href={whatsapp1}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="border-3 border-white outline-3 outline-green-500 bg-green-500 hover:bg-green-600 text-white p-2 rounded-full transition-all duration-300"
//             >
//               <FaWhatsapp className="text-xl" />
//             </a>
//             <a
//               href={whatsapp2}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="border-3 border-white outline-3 outline-green-500 bg-green-500 hover:bg-green-600 text-white p-2 rounded-full transition-all duration-300"
//             >
//               <FaWhatsapp className="text-xl" />
//             </a>

//             {/* Menu Button */}
//             <button
//               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//               className="cursor-pointer text-white p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all duration-300 border border-fuchsia-400"
//             >
//               {isMobileMenuOpen ? (
//                 <FaTimes className="text-xl" />
//               ) : (
//                 <FaBars className="text-xl" />
//               )}
//             </button>
//           </div>
//         </div>

//         {/* Dropdown for Mobile */}
//         {isMobileMenuOpen && (
//           <div className="md:hidden mt-4 bg-gray-800 rounded-lg p-4 border border-gray-700 animate-slideDown">
//             <div className="space-y-2">
//               {countries.map((country) => (
//                 <button
//                   key={country.code}
//                   onClick={() => handleCountrySelect(country)}
//                   className={`flex items-center justify-between w-full px-4 py-3 rounded-lg transition-all duration-300 ${
//                     selectedCountry === country.code
//                       ? "bg-blue-600 text-white"
//                       : "bg-gray-700 text-gray-300 hover:bg-gray-600"
//                   }`}
//                 >
//                   <div className="flex items-center gap-3">
//                     <span className="text-lg">{country.flag}</span>
//                     <span className="text-sm">{country.name}</span>
//                   </div>
//                   <span className="text-xs text-gray-300">
//                     {country.currency}
//                   </span>
//                 </button>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Header;



//__Header__//
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const Header = () => {
  // روابط الواتساب المباشرة
  const whatsappTechnical = "https://wa.me/971543334355"; // الدعم الفني
  const whatsappSales = "https://wa.me/971559572339";     // المبيعات والحسابات

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
              <FaWhatsapp className="text-2xl transition-transform group-hover:rotate-12" />
              <span className="hidden md:inline-block mr-2 text-sm font-bold tracking-wide">الدعم الفني</span>
            </a>

            {/* الزر الثاني: المبيعات والاشتراكات (ذهبي ملكي فاخر) */}
            <a
              href={whatsappSales}
              target="_blank"
              rel="noopener noreferrer"
              title="المبيعات والحسابات"
              className="relative flex items-center justify-center bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-white p-3 rounded-xl transition-all duration-300 shadow-[0_0_15px_rgba(245,158,11,0.4)] hover:shadow-[0_0_25px_rgba(245,158,11,0.7)] hover:scale-105 group border border-amber-400/30"
            >
              <FaWhatsapp className="text-2xl transition-transform group-hover:rotate-12" />
              <span className="hidden md:inline-block mr-2 text-sm font-bold tracking-wide">المبيعات والحسابات</span>
            </a>

          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;