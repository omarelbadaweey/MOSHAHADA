
//__ProgramsSection__//
import React from "react";
import { FaDownload, FaCopy, FaLaptop, FaApple, FaAndroid, FaTelegramPlane } from "react-icons/fa";

const ProgramsSection = () => {
  const programs = [
    {
      id: 1,
      name: "تطبيق الأندرويد (1) ",
      description: "لتشغيل البث على أجهزة الأندرويد والشاشات الذكية الشغالة بنظام Android.",
      downloadUrl: "https://aftv.news/7983703",
      code: "7983703",
      image: "/android.png",
      icon: <FaAndroid className="text-xl text-emerald-400" />,
      badge: "Android",
    },
    {
      id: 2,
      name: "تطبيق الأندرويد (2) ",
      description: "لتشغيل البث على أجهزة الأندرويد والشاشات الذكية الشغالة بنظام Android.",
      downloadUrl: "https://aftv.news/7348505",
      code: "7348505",
      image: "/android2.png",
      icon: <FaAndroid className="text-xl text-emerald-400" />,
      badge: "Android",
    },
    {
      id: 3,
      name: "تطبيق الأيفون",
      description: "لتشغيل البث على أجهزة iOS (أيفون، أيباد، و Apple TV) بأداء مستقر.",
      downloadUrl: "https://apps.apple.com/app/id6443335504",
      code: "4010",
      image: "/iphone.png",
      icon: <FaApple className="text-xl text-cyan-400" />,
      badge: "iOS / Apple",
    },
    {
      id: 4,
      name: "تطبيق الويندوز",
      description: "البرنامج الرسمي لتشغيل البث على أجهزة الكمبيوتر واللاب توب بنظام Windows.",
      downloadUrl: "https://ch4k.live/CeMe/CeMe-win.exe",
      code: "لا يحتاج كود تفعيل",
      image: "/Windows.png",
      icon: <FaLaptop className="text-xl text-purple-400" />,
      badge: "Windows",
    },
  ];

  // دالة نسخ كود التفعيل للعميل
  const handleCopyCode = (code, programName) => {
    if (code === "لا يحتاج كود تفعيل") return;
    navigator.clipboard.writeText(code);
    alert(`تم نسخ كود تفعيل ${programName} بنجاح!`);
  };

  return (

    <>
        <section
      dir="rtl"
      id="programs"
      className="py-24 bg-gradient-to-b from-neutral-950 via-gray-950 to-black text-white relative overflow-hidden"
    >
      {/* تأثير الإضاءة النيون الخلفية المطابقة للسكشن السابق */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-fuchsia-500/10 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-[150px]"></div>
      </div>

      <div className="container mx-auto relative z-10 px-4">
        
        {/* الهيدر والعنوان بتأثير التدرج اللوني الفخم */}
        <div className="text-center mb-16 relative">
          <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-fuchsia-400 mb-4 tracking-tight">
            برامج وتطبيقات التشغيل
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            حمّل التطبيق المتوافق مع نوع جهازك الآن، وأدخل كود التفعيل الموضح لتبدأ الاستمتاع ببث فاخر وثابت.
          </p>
        </div>

        {/* شبكة عرض تطبيقات التشغيل */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8 max-w-7xl mx-auto">
          {programs.map((program) => (
            <div
              key={program.id}
              className="group relative bg-gradient-to-b from-neutral-900 to-neutral-950 border border-neutral-800 rounded-3xl overflow-hidden transition-all duration-500 hover:border-fuchsia-500/50 hover:shadow-[0_0_30px_rgba(217,70,239,0.15)] hover:-translate-y-2"
            >
              
              {/* صورة التطبيق مع البادج والمؤثرات البصرية */}
              <div className="relative h-48 overflow-hidden bg-neutral-900">
                <img
                  src={program.image}
                  alt={program.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent"></div>
                
                {/* بادج نوع النظام العلوي */}
                <div className="absolute top-4 right-4 z-10 bg-black/70 backdrop-blur-md border border-neutral-700/50 text-neutral-200 text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5">
                  {program.icon}
                  {program.badge}
                </div>
              </div>

              {/* محتوى الكرت السفلي */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-neutral-100 group-hover:text-fuchsia-400 transition-colors duration-300 mb-2">
                  {program.name}
                </h3>
                <p className="text-gray-400 text-sm md:text-base min-h-[48px] mb-6 leading-relaxed">
                  {program.description}
                </p>

                {/* كرت كود التفعيل المطور بزر النسخ الذكي */}
                <div className="mb-6 p-4 bg-black/40 rounded-2xl border border-neutral-800 backdrop-blur-sm flex items-center justify-between">
                  <div>
                    <div className="text-fuchsia-400 text-xs mb-1 font-bold">
                      كود تفعيل التطبيق:
                    </div>
                    <code className="text-white font-mono font-bold text-base tracking-wider">
                      {program.code}
                    </code>
                  </div>
                  
                  {program.code !== "لا يحتاج كود تفعيل" && (
                    <button
                      onClick={() => handleCopyCode(program.code, program.name)}
                      className="p-2.5 text-neutral-400 hover:text-white bg-neutral-800/50 hover:bg-neutral-800 rounded-xl transition-all border border-neutral-800 hover:border-neutral-700"
                      title="نسخ كود التفعيل"
                    >
                      <FaCopy className="text-sm" />
                    </button>
                  )}
                </div>

                {/* زر تحميل البرنامج بالتأثير المتوهج الجديد */}
                <a
                  href={program.downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-neutral-800 hover:bg-fuchsia-600 text-white font-bold py-3.5 px-4 rounded-xl transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(217,70,239,0.3)]"
                >
                  <span>تحميل البرنامج</span>
                  <FaDownload className="text-sm opacity-80 group-hover:animate-bounce" />
                </a>

              </div>

              {/* الخط النيوني السفلي الجمالي */}
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-fuchsia-500 to-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>




    <section
      dir="rtl"
      id="telegram-channel"
      className="py-24 bg-gradient-to-b from-neutral-950 via-gray-950 to-black text-white relative overflow-hidden"
    >
      {/* تأثير الإضاءة النيون الخلفية المطابقة تماماً للسكشن الأول ولكن بثيم أزرق متوهج */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[150px]"></div>
      </div>

      <div className="container mx-auto relative z-10 px-4">
        
        {/* الهيدر والعنوان بتأثير التدرج اللوني الفخم مطابق للسكشن الأول */}
        <div className="text-center mb-16 relative">
          <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-blue-400 mb-4 tracking-tight">
            تابعنا على تليجرام
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            انضم إلى قناتنا الرسمية لتكون أول من يصله التحديثات، العروض الحصرية، وأحدث الأخبار فور صدورها.
          </p>
        </div>

        {/* كارت التليجرام الرئيسي المطور بنفس ستايل كروت التطبيقات */}
        <div className="max-w-3xl mx-auto group relative bg-gradient-to-b from-neutral-900 to-neutral-950 border border-neutral-800 p-8 md:p-12 rounded-3xl overflow-hidden transition-all duration-500 hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] text-center">
          
          {/* تأثير التوهج الداخلي عند التحويم للمظهر الفخم */}
          <div className="absolute -top-16 -left-16 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-all duration-500"></div>
          <div className="absolute -bottom-16 -right-16 w-40 h-40 bg-cyan-500/5 rounded-full blur-3xl group-hover:bg-cyan-500/15 transition-all duration-500"></div>

          <div className="flex flex-col items-center space-y-6 relative z-10">
            
            {/* أيقونة التليجرام الكبيرة المطورة بتأثير الباك دروب لوك والنبض */}
            <div className="p-5 bg-blue-500/10 text-blue-400 rounded-2xl border border-blue-500/20 shadow-lg shadow-blue-950/20 group-hover:scale-110 transition-transform duration-300">
              <FaTelegramPlane className="text-4xl" />
            </div>

            {/* تفاصيل القناة بنصوص واضحة */}
            <div className="space-y-2">
              <h3 className="text-2xl md:text-3xl font-black text-neutral-100 group-hover:text-blue-400 transition-colors duration-300 tracking-tight">
                القناة الرسمية MOSHAHADA 

              </h3>
              <p className="text-sm md:text-base text-blue-400/80 font-mono tracking-wider">
                MOSHAHADA TV

              </p>
            </div>

            <p className="text-gray-400 text-sm md:text-base max-w-md leading-relaxed">
              مجتمعنا ينمو بسرعة! لا تفوت فرصة التواجد معنا للاستفادة من المحتوى اليومي والتواصل المباشر مع مجتمعنا الإبداعي.
            </p>

            {/* زر الانضمام الشيك والمطور بالتأثير المتوهج الجديد المطابق للأول */}
            <a
              href="https://t.me/sbooot47"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-neutral-800 hover:bg-blue-600 text-white font-bold py-4 px-10 rounded-xl transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] group/btn"
            >
              <FaTelegramPlane className="text-xl opacity-80 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
              <span>انضم للقناة الآن</span>
            </a>

            {/* عداد التفاعل السفلي الجمالي */}
            <div className="pt-6 border-t border-neutral-800/80 w-full max-w-xs flex justify-center items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-ping"></span>
              <p className="text-xs text-neutral-500 font-medium">
                متفاعلون ومتاحون الآن على مدار الساعة
              </p>
            </div>
          </div>

          {/* الخط النيوني السفلي الجمالي المطابق تماماً لستايل الأول */}
          <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-500 to-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
        </div>
      </div>
    </section>


    </>


  );
};

export default ProgramsSection;