import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function MainLayout({ children }) {
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
    </div>
  );
}

export default MainLayout;
