import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function MainLayout({ children }) {
  const handleWhatsAppClick = () => {
    const phoneNumber = "+923173070894"; // اپنا WhatsApp نمبر ڈالیں
    const message = "Hello! I need assistance."; // اپنا میسج ڈالیں
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div>
      {/* Header Section */}
      <header>
        <Header />
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer Section */}
      <footer>
        <Footer />
      </footer>

      {/* WhatsApp Button */}
      <div className="fixed bottom-8 right-8">
        <div
          onClick={handleWhatsAppClick}
          className="relative group cursor-pointer"
        >
          {/* WhatsApp Icon */}
          <img
            src="../../../whatsapp.png" // آئیکن کا راستہ
            alt="WhatsApp Icon"
            className="w-16 h-16" // آئیکن کا سائز بڑا
          />

          {/* Text on Hover */}
          <span className="absolute top-1/2 -left-[130px] transform -translate-y-1/2 bg-green-600 text-white text-sm px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            WhatsApp us
          </span>
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
