//__PackageDetailsPage__//
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  FaCheck,
  FaCreditCard,
  FaCopy,
  FaArrowLeft,
  FaMobile,
  FaUniversity,
  FaPaypal,
} from "react-icons/fa";
import data from "../data.json";
import Transition from "../components/Transition";
import ScrollToTop from "../components/ScrollToTop";
import { SiTether } from "react-icons/si";

const PackageDetailsPage = ({ selectedCountry }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("details");
  const [showPaymentAlert, setShowPaymentAlert] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState("");

  const packages = data;
  const pkg = packages.find((p) => p.id === parseInt(id));

  if (!pkg) {
    return (
      <div className="min-h-screen bg-gray-900 pt-20 flex items-center justify-center">
        <div className="text-white text-xl">الباقة غير موجودة</div>
      </div>
    );
  }

  const getPrice = () => {
    const price = pkg.price[selectedCountry?.code] || pkg.price.US;
    const currency = selectedCountry?.currency || "$";
    return { price, currency };
  };

  const { price, currency } = getPrice();

  //__paymentMethods__//
  const paymentMethods = [
    {
      id: 1,
      name: "بطاقة ائتمان",
      icon: FaCreditCard,
      color: "from-purple-500 to-pink-600",
      accounts: [
        { type: "Visa", number: "1234 5678 9012 3456", name: "John Doe" },
        { type: "MasterCard", number: "9876 5432 1098 7654", name: "John Doe" },
      ],
    },
    {
      id: 2,
      name: "محافظ رقمية",
      icon: FaMobile,
      color: "from-green-500 to-emerald-600",
      accounts: [
        { type: "Vodafone Cash", number: "0100 123 4567", name: "John Doe" },
        { type: "Orange Money", number: "0120 987 6543", name: "John Doe" },
      ],
    },
    {
      id: 3,
      name: "تحويل بنكي",
      icon: FaUniversity,
      color: "from-blue-500 to-cyan-600",
      accounts: [
        {
          type: "CIB",
          number: "123 456 789 012",
          name: "John Doe",
          branch: "Main Branch",
        },
        {
          type: "QNB",
          number: "987 654 321 098",
          name: "John Doe",
          branch: "Downtown",
        },
      ],
    },
    {
      id: 4,
      name: "PayPal",
      icon: FaPaypal,
      color: "from-blue-400 to-blue-600",
      accounts: [
        { type: "PayPal", email: "payment@company.com", name: "Company Name" },
      ],
    },
    {
  id: 5,
  name: "USDT",
  icon: SiTether, // لازم تكون مستوردها من react-icons/si
  color: "from-green-400 to-green-600",
  accounts: [
    {
      type: "USDT (Tether - TRC20)",
      address: "TX9XoExampleWalletAddress1234",
      name: "Company Name",
    },
  ],
}

  ];

  const handlePaymentMethodClick = (method) => {
    setSelectedMethod(method);
    setShowPaymentAlert(true);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    // يمكن إضافة toast للإشعار
    alert("تم نسخ المعلومات!");
  };

  return (
    <Transition>
      <ScrollToTop /> 
      <div dir="rtl" className="min-h-screen bg-gray-900 pt-0">
        <div className="container mx-auto px-4 py-8">
          {/* زر العودة */}
          <button
            onClick={() => navigate("/")}
            className="gap-1 flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 mb-8 transition-colors duration-300 rtl:space-x-reverse"
          >
            <FaArrowLeft />
            <span>العودة للرئيسية</span>
          </button>

          <div
            dir="rtl"
            className="bg-gray-800 rounded-2xl overflow-hidden shadow-2xl"
          >
            {/* الهيدر */}
            <div className={`bg-gradient-to-r ${pkg.color} p-8 text-white`}>
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold mb-2">
                    {pkg.name}
                  </h1>
                  <div className="flex items-center space-x-4 rtl:space-x-reverse gap-3">
                    <div className="text-2xl md:text-3xl font-bold ">
                      {price} {currency}
                    </div>
                    <div className="text-cyan-100 text-lg">
                      لمدة {pkg.duration}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* التبويبات */}
            <div className="border-b border-gray-700 bg-gray-750">
              <div className="flex overflow-x-auto">
                {["details", "payment"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`cursor-pointer flex-1 px-6 py-4 font-semibold transition-all duration-300 whitespace-nowrap min-w-[120px] ${
                      activeTab === tab
                        ? "text-cyan-400 border-b-2 border-cyan-400 bg-gray-800"
                        : "text-gray-400 hover:text-gray-300 hover:bg-gray-750"
                    }`}
                  >
                    {tab === "details" && "تفاصيل الباقة"}
                    {tab === "payment" && "طرق الدفع"}
                  </button>
                ))}
              </div>
            </div>

            {/* محتوى التبويب */}
            <div className="p-6 md:p-8">
              {activeTab === "details" && (
                <div className="space-y-6">
                  <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-white mb-4">
                      المميزات المتاحة
                    </h2>
                    <p className="text-gray-400">
                      استميع بأفضل تجربة بث مع باقة {pkg.name}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {pkg.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="bg-gray-750 rounded-xl p-4 border border-gray-600 hover:border-cyan-500 transition-all duration-300"
                      >
                        <div className="flex gap-3  items-center space-x-3 rtl:space-x-reverse">
                          <div className="bg-green-500/20 p-2 rounded-lg">
                            <FaCheck className="text-green-500 text-lg" />
                          </div>
                          <span className="text-gray-300 text-lg font-medium">
                            {feature}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "payment" && (
                <div className="space-y-8">
                  <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-white mb-4">
                      اختر طريقة الدفع
                    </h2>
                    <p className="text-gray-400">
                      اختر الطريقة المناسبة لك واتبع التعليمات
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {paymentMethods.map((method) => (
                      <div
                        key={method.id}
                        onClick={() => handlePaymentMethodClick(method)}
                        className="bg-gray-750 rounded-2xl p-6 border-2 border-gray-600 hover:border-cyan-500 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 cursor-pointer transform hover:scale-105"
                      >
                        <div className="flex gap-3 items-center space-x-4 rtl:space-x-reverse mb-4">
                          <div
                            className={`bg-gradient-to-r ${method.color} p-3 rounded-xl text-white`}
                          >
                            <method.icon className="text-2xl" />
                          </div>
                          <h3 className="text-xl font-bold text-white">
                            {method.name}
                          </h3>
                        </div>
                        <p className="text-gray-400 text-sm">
                          انقر لعرض معلومات التحويل
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Alert للدفع */}
        {showPaymentAlert && selectedMethod && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
            <div className="bg-gray-800 rounded-2xl max-w-md w-full p-6 border-2 border-cyan-500 shadow-2xl">
              <div className="flex items-center space-x-3 rtl:space-x-reverse mb-6">
                <div
                  className={`bg-gradient-to-r ${selectedMethod.color} p-3 rounded-xl text-white`}
                >
                  <selectedMethod.icon className="text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  دفع عبر {selectedMethod.name}
                </h3>
              </div>

              <div className="space-y-4 mb-6">
                <p className="text-gray-300 text-center mb-4">
                  يرجى استخدام إحدى الحسابات التالية:
                </p>

                {selectedMethod.accounts.map((account, idx) => (
                  <div
                    key={idx}
                    className="bg-gray-750 rounded-xl p-4 border border-gray-600"
                  >
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-cyan-400 font-semibold">
                          {account.type}
                        </span>
                        <button
                          onClick={() =>
                            copyToClipboard(account.number || account.email)
                          }
                          className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                        >
                          <FaCopy />
                        </button>
                      </div>

                      <div className="space-y-2">
                        {account.number && (
                          <div className="flex justify-between items-center">
                            <span className="text-gray-400">الرقم:</span>
                            <span className="text-white font-mono text-sm">
                              {account.number}
                            </span>
                          </div>
                        )}

                        {account.email && (
                          <div className="flex justify-between items-center">
                            <span className="text-gray-400">البريد:</span>
                            <span className="text-white font-mono text-sm">
                              {account.email}
                            </span>
                          </div>
                        )}

                        <div className="flex justify-between items-center">
                          <span className="text-gray-400">الاسم:</span>
                          <span className="text-white">{account.name}</span>
                        </div>

                        {account.branch && (
                          <div className="flex justify-between items-center">
                            <span className="text-gray-400">الفرع:</span>
                            <span className="text-white">{account.branch}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-cyan-500/10 border border-cyan-500 rounded-xl p-4 mb-6">
                <p className="text-cyan-400 text-sm text-center">
                  ⚠️ بعد التحويل، يرجى إرسال إيصال الدفع على الواتساب لتتمكن من
                  تفعيل الباقة
                </p>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setShowPaymentAlert(false)}
                  className="flex-1 bg-gray-600 hover:bg-gray-700 text-white py-3 rounded-xl font-semibold transition-colors duration-300"
                >
                  إغلاق
                </button>
                <button
                  onClick={() => {
                    // يمكن إضافة رابط الواتساب هنا
                    window.open("https://wa.me/1234567890", "_blank");
                  }}
                  className="flex-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-3 rounded-xl font-semibold transition-all duration-300"
                >
                  تواصل على الواتساب
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Transition>
  );
};

export default PackageDetailsPage;
