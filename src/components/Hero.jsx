//__Hero.jsx__//
import React, { useState, useEffect } from "react";
const Hero = () => {
  //__Use_Animation__//
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);

  //__scroll_To_payments__//
  const paymentsScroll = () => {
    const paymenta = document.getElementById("payment");
    if (paymenta) {
      paymenta.scrollIntoView({ behavior: "smooth" });
    }
  };

  //__scroll_To_packages__//
  const packagesScroll = () => {
    const packages = document.getElementById("packages");
    if (packages) {
      packages.scrollIntoView({ behavior: "smooth" });
    }
  };

    //__scroll_To_programs__//
  const programsScroll = () => {
    const programs = document.getElementById("programs");
    if (programs) {
      programs.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      dir="rtl"
      className="relative lg:-mt-5 bg-gradient-to-br from-gray-900 via-gray-800 to-black min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <img
          src="/bg-hero.png"
          alt="Hero MOSHAHADA"
          className="w-full h-full object-cover opacity-10"
        />
      </div>

      <div className="container mx-auto px-4 py-4  relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* text_div */}
          <div
            className={`flex-1 text-center lg:text-right space-y-6 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              تجربة بث
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-600 animate-gradient">
                {" "}
                استثنائية
              </span>
            </h1>

            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl">
              استمتع بأفضل محتوى مع جودة عالية وسرعة فائقة.
              <span className="block mt-2 text-amber-500 font-semibold">
                انضم إلى آلاف المستخدمين الراضين
              </span>
            </p>

            <div className="flex flex-wrap gap-4 lg:gap-6 justify-center lg:justify-start">
              <div
                className="text-center animate-fade-in-up"
                style={{ animationDelay: "0.3s" }}
              >
                <div className="text-2xl lg:text-3xl font-bold text-amber-600">
                  +50K
                </div>
                <div className="text-gray-400 text-sm lg:text-base">
                  مستخدم نشط
                </div>
              </div>
              <div
                className="text-center animate-fade-in-up"
                style={{ animationDelay: "0.5s" }}
              >
                <div className="text-2xl lg:text-3xl font-bold text-amber-500">
                  +10000
                </div>
                <div className="text-gray-400 text-sm lg:text-base">
                  قناة مباشرة
                </div>
              </div>
              <div
                className="text-center animate-fade-in-up"
                style={{ animationDelay: "0.7s" }}
              >
                <div className="text-2xl lg:text-3xl font-bold text-blue-400">
                  24/7
                </div>
                <div className="text-gray-400 text-sm lg:text-base">
                  دعم فني
                </div>
              </div>
            </div>

            {/*button_Div*/}
            <div className="flex flex-wrap gap-3 lg:gap-4 justify-center lg:justify-start pt-4 lg:pt-6">
              <button
                onClick={packagesScroll}
                className="cursor-pointer bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg text-sm lg:text-base"
              >
                احدث العروض
              </button>
              <button
                onClick={paymentsScroll}
                className="cursor-pointer border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-6 lg:px-8 py-3 lg:py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 text-sm lg:text-base"
              >
                طرق الدفع
              </button>
                            <button
                onClick={programsScroll}
                className="cursor-pointer bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg text-sm lg:text-base"
              >
               تحميل البرامج
              </button>
            </div>
          </div>

          {/*Image_Div*/}
          <div
            className={`flex-1 w-full lg:w-auto transition-all duration-1000 delay-500 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div className="relative max-w-md mx-auto lg:max-w-full">
              {/*image_content */}
              <div className="relative bg-gray-800 rounded-2xl p-4 lg:p-4 border-5 border-amber-700/50 shadow-2xl">
                <div className="w-full overflow-hidden h-64 md:h-80 lg:h-96 bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl flex items-center justify-center border-3 border-dashed border-amber-700/70 p-.5 ">
                  <div className="h-full text-center space-y-3 lg:space-y-4">
                    <img
                      src="/hero.jpeg"
                      className="h-full rounded-lg"
                      alt="📱 صورة التطبيق"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*Animation*/}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="w-full h-12 bg-gradient-to-t from-gray-900 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;