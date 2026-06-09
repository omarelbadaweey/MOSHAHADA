// //__ProgramsSection__//
// import React from "react";
// import { FaDownload } from "react-icons/fa";

// const ProgramsSection = () => {
//   const programs = [
//     {
//       id: 1,
//       name: "تطبيق الأندرويد",
//       description: "لتشغيل البث على أجهزة الأندرويد",
//       downloadUrl: "https://aftv.news/2169095",
//       code: "2169095",
//       image:
//         "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
//       gradient: "from-green-500 to-emerald-600",
//       link: "https://aftv.news/2169095",
//     },
//     {
//       id: 2,
//       name: "تطبيق الأيفون",
//       description: "لتشغيل البث على أجهزة iOS",
//       downloadUrl: "https://apps.apple.com/app/000-player/id1665441224",
//       code: "882",
//       image:
//         "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
//       gradient: "from-blue-500 to-cyan-600",
//       link: "https://apps.apple.com/app/000-player/id1665441224",
//     },
//     {
//       id: 3,
//       name: "تطبيق الويندوز",
//       description: "لتشغيل البث على أجهزة الكمبيوتر",
//       downloadUrl: "https://ch4k.live/CeMe/CeMe-win.exe",
//       code: "لا يحتاج كود تفعيل",
//       image:
//         "https://images.unsplash.com/photo-1547082299-de196ea013d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
//       gradient: "from-purple-500 to-pink-600",
//       link: "https://ch4k.live/CeMe/CeMe-win.exe",
//     },
//   ];

//   return (
//     <section
//       dir="rtl"
//       id="programs"
//       className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden"
//     >
//       <div className="absolute inset-0 opacity-5">
//         <div className="absolute top-10 left-10 w-64 h-64 bg-cyan-500 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute bottom-10 right-10 w-64 h-64 bg-blue-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
//       </div>

//       <div className="container mx-auto px-4 relative z-10">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
//             برامج{" "}
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
//               التشغيل
//             </span>
//           </h2>
//           <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
//             حمل البرامج المناسبة لجهازك واستمتع بتجربة بث متميزة بجودة عالية
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
//           {programs.map((program) => (
//             <div
//               key={program.id}
//               className=" group relative bg-gray-800 rounded-3xl overflow-hidden border border-gray-700 hover:border-cyan-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20"
//             >
//               {/* الصورة */}
//               <div className="relative h-48 overflow-hidden">
//                 <img
//                   src={program.image}
//                   alt={program.name}
//                   className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
//                 />
//                 <div
//                   className={`absolute inset-0 bg-gradient-to-br ${program.gradient} opacity-20`}
//                 ></div>
//                 <div className="absolute top-4 right-4">
//                   <span className="bg-black/70 text-white px-3 py-2 rounded-full text-sm font-semibold backdrop-blur-sm">
//                     {program.name.split(" ")[1]}
//                   </span>
//                 </div>
//               </div>

//               {/* content */}
//               <div className="p-4">
//                 <h3 className="text-2xl font-bold text-white mb-2">
//                   {program.name}
//                 </h3>
//                 <p className="text-gray-400 text-lg mb-6 leading-relaxed">
//                   {program.description}
//                 </p>

//                 {/*active code*/}
//                 {program.code && (
//                   <div className="mb-4 p-3 bg-gray-700/50 rounded-xl border border-gray-600 backdrop-blur-sm">
//                     <div className="text-cyan-400 text-sm mb-2 font-semibold">
//                       كود التفعيل:
//                     </div>
//                     <div className="flex items-center justify-between">
//                       <code className="text-white font-mono text-lg bg-gray-800 px-4 py-2 rounded-lg">
//                         {program.code}
//                       </code>
//                       <a
//                         href={program.link}
//                         className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 p-2"
//                       >
//                         <FaDownload className="text-base" />
//                       </a>
//                     </div>
//                   </div>
//                 )}

//                 {/* download button*/}
//                 <a
//                   href={program.downloadUrl}
//                   rel="noopener noreferrer"
//                   className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white py-4 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-3 rtl:space-x-reverse group/btn text-lg shadow-lg hover:shadow-cyan-500/25"
//                 >
//                   <span>تحميل البرنامج</span>
//                   <FaDownload className="group-hover/btn:animate-bounce text-xl mr-2" />
//                 </a>
//               </div>

//               {/* effect*/}
//               <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProgramsSection;



//__ProgramsSection__//
import React from "react";
import { FaDownload, FaCopy, FaLaptop, FaApple, FaAndroid } from "react-icons/fa";

const ProgramsSection = () => {
  const programs = [
    {
      id: 1,
      name: "تطبيق الأندرويد",
      description: "لتشغيل البث على أجهزة الأندرويد والشاشات الذكية الشغالة بنظام Android.",
      downloadUrl: "https://aftv.news/2169095",
      code: "2169095",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      icon: <FaAndroid className="text-xl text-emerald-400" />,
      badge: "Android",
    },
    {
      id: 2,
      name: "تطبيق الأيفون",
      description: "لتشغيل البث على أجهزة iOS (أيفون، أيباد، و Apple TV) بأداء مستقر.",
      downloadUrl: "https://apps.apple.com/app/000-player/id1665441224",
      code: "882",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      icon: <FaApple className="text-xl text-cyan-400" />,
      badge: "iOS / Apple",
    },
    {
      id: 3,
      name: "تطبيق الويندوز",
      description: "البرنامج الرسمي لتشغيل البث على أجهزة الكمبيوتر واللاب توب بنظام Windows.",
      downloadUrl: "https://ch4k.live/CeMe/CeMe-win.exe",
      code: "لا يحتاج كود تفعيل",
      image: "https://images.unsplash.com/photo-1547082299-de196ea013d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
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

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
  );
};

export default ProgramsSection;