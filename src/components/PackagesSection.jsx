
import React from "react";
import { FaCopy, FaCreditCard, FaPaypal, FaExternalLinkAlt, FaGem } from "react-icons/fa";

const SubscriptionsAndPayment = () => {
  // داتا الباقات مع ربط كل باقة بصورتها الصحيحة من الملفات المرفقة
  const subscriptions = [
    {
      name: "Star10",
      price: "100 درهم / سنوي",
      imgSrc: "/star.jpeg", 
      // badge: "الأكثر مبيعاً",
      whatsappUrl: "https://wa.me/971559572339?text=أريد%20الاشتراك%20في%20باقة%20Star10",
    },
    {
      name: "Sbooot77 IPTV",
      price: "100 درهم / سنوي",
      imgSrc: "/WhatsApp Image 2026-06-09 at 5.50.56 PM.jpeg",
      // badge: "باقة مميزة",
      whatsappUrl: "https://wa.me/971559572339?text=أريد%20الاشتراك%20في%20باقة%20Sbooot77",
    },
    {
      name: "Dino",
      price: "150 درهم / سنوي",
      imgSrc: "/WhatsApp Image 2026-06-09 at 5.50.56 PM (2).jpeg",
      // badge: "VIP ثبات عالي",
      whatsappUrl: "https://wa.me/971559572339?text=أريد%20الاشتراك%20في%20باقة%20Dino",
    },
    {
      name: "Neo",
      price: "150 درهم / سنوي",
      imgSrc: "/WhatsApp Image 2026-06-09 at 5.50.57 PM (1).jpeg",
      // badge: "جودة 4K فائقة",
      whatsappUrl: "https://wa.me/971559572339?text=أريد%20الاشتراك%20في%20باقة%20Neo",
    },
    {
      name: "Maxott",
      price: "100 درهم / سنوي",
      imgSrc: "/WhatsApp Image 2026-06-09 at 5.50.57 PM.jpeg",
      // badge: "سيرفر مستقر",
      whatsappUrl: "https://wa.me/971559572339?text=أريد%20الاشتراك%20في%20باقة%20Maxott",
    },
  ];

  // دالة لتسهيل نسخ النصوص للعملاء بضغطة زر
  const handleCopy = (text, message) => {
    navigator.clipboard.writeText(text);
    alert(`${message} تم نسخه بنجاح!`);
  };

  return (
    <div id="packages" className="bg-gradient-to-bl from-gray-900 via-gray-900 to-black text-white py-16 px-4 md:px-8 overflow-hidden">
      
      {/* ==================== سكشن الباقات والاشتراكات ==================== */}
      <section className="container mx-auto mb-24">
        <div className="text-center mb-16 relative">
          <div className="absolute inset-0 bg-amber-500/10 blur-[120px] w-72 h-72 mx-auto rounded-full"></div>
          <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-amber-400 mb-4 tracking-tight">
            باقات البث والاشتراكات العالمية
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm md:text-base">
            اختر سيرفرك المفضل الآن واستمتع بثبات كامل وبدون تقطيع مع دعم فني على مدار الساعة.
          </p>
        </div>

        {/* شبكة عرض الباقات المجرمة */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {subscriptions.map((sub, index) => (
            <div 
              key={index} 
              className="group relative bg-gradient-to-b from-neutral-900 to-neutral-950 border border-neutral-800 rounded-3xl overflow-hidden transition-all duration-500 hover:border-amber-500/50 hover:shadow-[0_0_30px_rgba(217,70,239,0.15)] hover:-translate-y-2"
            >
              {/* البادج العلوي المميز */}
              <div className="absolute top-4 right-4 z-10 bg-black/70 backdrop-blur-md border border-amber-700/50 text-amber-400 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                <FaGem className="text-[16px]" />
                {/* {sub.badge} */}
              </div>

              {/* حاوية الصورة مع تأثير تقريب مذهل عند الـ Hover */}
              <div className="relative w-full h-52 overflow-hidden bg-neutral-900">
                <img 
                  src={sub.imgSrc} 
                  alt={sub.name} 
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110 group-hover:opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent"></div>
              </div>

              {/* تفاصيل الكرت السفلي */}
              <div className="p-6">
                <h3 className="text-2xl font-bold tracking-wide text-neutral-100 group-hover:text-amber-500 transition-colors duration-300">
                  {sub.name}
                </h3>
                
                <div className="flex items-baseline gap-1 mt-3 mb-6">
                  <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-400">
                    {sub.price.split(" ")[0]}
                  </span>
                  <span className="text-sm text-gray-400 font-medium">
                    {sub.price.substring(sub.price.indexOf(" "))}
                  </span>
                </div>

                {/* زر الشراء والتوجيه المباشر */}
                <a 
                  href={sub.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-amber-800 hover:bg-amber-600 text-white font-bold py-3 px-4 rounded-xl transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(217,70,239,0.3)]"
                >
                  <span>اشترك الآن</span>
                  <FaExternalLinkAlt className="text-xs opacity-60" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* ==================== سكشن وسائل الدفع الفاخرة ==================== */}
      <section id="payment" className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 relative">
          <div className="absolute inset-0 bg-amber-500/10 blur-[120px] w-72 h-72 mx-auto rounded-full"></div>
          <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-amber-400 mb-4 tracking-tight">
            طرق الدفع الآمنة والسريعة
          </h2>
          <p className="text-gray-400 max-w-md mx-auto text-sm">
            نقبل التحويلات البنكية المباشرة عبر بنك الإمارات NBD أو الدفع السريع والآمن من أي مكان في العالم باستخدام حساب PayPal.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* كرت الحساب البنكي الفخم (تأثير كروت الفيزا) - يأخذ 7 أعمدة */}
          <div className="lg:col-span-7 bg-gradient-to-br from-neutral-900 to-neutral-950 border border-neutral-800 p-8 rounded-3xl relative overflow-hidden shadow-2xl group">
            <div className="absolute -top-16 -left-16 w-40 h-40 bg-amber-500/10 rounded-full blur-3xl group-hover:bg-amber-500/20 transition-all duration-500"></div>
            
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-amber-500/10 text-amber-400 rounded-2xl border border-amber-500/20">
                  <FaCreditCard className="text-2xl" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">التحويل البنكي المباشر</h4>
                  <p className="text-xs text-amber-500/80 font-medium">Emirates NBD</p>
                </div>
              </div>
              <span className="text-xs font-mono text-neutral-500 tracking-wider">OFFICIAL POOL</span>
            </div>

            {/* تفاصيل بيانات الحساب مع أزرار نسخ ذكية للعميل */}
            <div className="space-y-4 font-sans">
              
              {/* اسم صاحب الحساب */}
              <div className="bg-black/40 border border-neutral-800 p-4 rounded-2xl flex justify-between items-center">
                <div>
                  <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">اسم المستفيد</p>
                  <p className="text-sm md:text-base font-semibold text-neutral-200">Juma Saeed Sbait Sal Al Kaabi</p>
                </div>
                <button 
                  onClick={() => handleCopy("Juma Saeed Sbait Sal Al Kaabi", "الاسم")}
                  className="p-2 text-neutral-400 hover:text-white bg-neutral-800/50 hover:bg-neutral-800 rounded-lg transition-colors"
                  title="نسخ الاسم"
                >
                  <FaCopy />
                </button>
              </div>

              {/* الـ IBAN */}
              <div className="bg-black/40 border border-neutral-800 p-4 rounded-2xl flex justify-between items-center">
                <div>
                  <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">رقم الآيبان (IBAN)</p>
                  <p className="text-sm md:text-base font-mono font-bold tracking-wider text-amber-400">AE33 0260 7512 3000 0424 687</p>
                </div>
                <button 
                  onClick={() => handleCopy("AE330260751230000424687", "الآيبان")}
                  className="p-2 text-neutral-400 hover:text-white bg-neutral-800/50 hover:bg-neutral-800 rounded-lg transition-colors"
                  title="نسخ الآيبان"
                >
                  <FaCopy />
                </button>
              </div>

              {/* رقم الحساب وباقي التفاصيل الصغيره */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-black/40 border border-neutral-800 p-4 rounded-2xl flex justify-between items-center">
                  <div>
                    <p className="text-[10px] text-gray-500 mb-1">رقم الحساب</p>
                    <p className="text-sm font-mono font-bold text-neutral-300">751230000424687</p>
                  </div>
                  <button onClick={() => handleCopy("751230000424687", "رقم الحساب")} className="text-neutral-500 hover:text-white"><FaCopy size={14}/></button>
                </div>

                <div className="bg-black/40 border border-neutral-800 p-4 rounded-2xl flex justify-between items-center">
                  <div>
                    <p className="text-[10px] text-gray-500 mb-1">رمز السويفت (SWIFT Code)</p>
                    <p className="text-sm font-mono font-bold text-neutral-300">EBILAEADXXX</p>
                  </div>
                  <button onClick={() => handleCopy("EBILAEADXXX", "رمز السويفت")} className="text-neutral-500 hover:text-white"><FaCopy size={14}/></button>
                </div>
              </div>

              {/* ملاحظة ظهور اسم الشركة الوسيطة المذكورة في الداتا */}
              <div className="bg-amber-500/5 border border-amber-500/20 p-4 rounded-2xl">
                <p className="text-xs text-amber-400/90 leading-relaxed">
                  💡 <strong className="font-bold">ملاحظة هامة:</strong> قد يظهر اسم صاحب الحساب كـ <span className="font-mono bg-black/30 px-1 py-0.5 rounded text-white">EITC FINANCIAL SERVICES POOL ACCOUNT</span> بعد إضافته كمستفيد في تطبيقك البنكي.
                </p>
              </div>

            </div>
          </div>

          {/* كرت الـ PayPal والدفع عبر الـ QR Code - يأخذ 5 أعمدة */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-6 w-full">
            
            {/* اللوجو الصغير الخاص بالـ PayPal */}
            <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-3xl flex items-center justify-between group hover:border-blue-500/40 transition-colors">
              <div className="flex items-center gap-4">
                <img 
                  src="/WhatsApp Image 2026-06-09 at 5.50.57 PM (2).jpeg" 
                  alt="PayPal Logo" 
                  className="w-12 h-12 rounded-2xl object-cover"
                />
                <div>
                  <h4 className="font-bold text-lg text-white">بوابة PayPal العالمية</h4>
                  <p className="text-xs text-gray-400">دفع فوري آمن ومحمي بالكامل</p>
                </div>
              </div>
              <FaPaypal className="text-2xl text-[#003087] group-hover:scale-110 transition-transform" />
            </div>

            {/* كرت ماسح الـ QR Code لـ PayPal */}
            <div className="bg-white text-black p-6 rounded-3xl flex flex-col items-center justify-center text-center shadow-xl relative group">
              <div className="absolute top-3 right-3 bg-neutral-100 text-neutral-600 font-mono text-[9px] font-bold px-2 py-0.5 rounded-full border border-neutral-200">
                FAST SCAN
              </div>
              
              <h5 className="font-black text-xl tracking-tight text-neutral-900 mb-1">Juma Alkaabi</h5>
              <p className="text-xs text-neutral-500 mb-4">امسح الكود التالي ضوئياً للإرسال الفوري</p>
              
              <div className="w-56 h-56 p-2 bg-neutral-50 rounded-2xl border border-neutral-100 shadow-inner flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                <img 
                  src="/WhatsApp Image 2026-06-09 at 5.50.57 PM (3).jpeg" 
                  alt="PayPal QR Code" 
                  className="w-full h-full object-contain"
                />
              </div>

              <span className="text-[11px] font-medium text-neutral-400 mt-4 tracking-wide">
                مسح ضوئي للدفع لحساب Juma Alkaabi
              </span>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};

export default SubscriptionsAndPayment;