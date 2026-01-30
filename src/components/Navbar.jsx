import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Logo from "../assets/logo.JPG";
import Sidebar from "./Sidebar";

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <>
      <nav className="bg-white shadow-sm fixed w-full top-0 left-0 z-30">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <Link to="/" className="flex items-center gap-2">
                <img
                  src={Logo}
                  alt={t("logoText")}
                  className="h-10 w-10 object-cover rounded"
                />
                <span className="hidden sm:block font-semibold text-gray-800 text-sm">
                  {t("logoText")}
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6 text-sm font-medium">
              <Link to="/" className="text-gray-700 hover:text-blue-600">
                {t("home")}
              </Link>
              <Link to="/guide" className="text-gray-700 hover:text-blue-600">
                {t("guide")}
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-blue-600">
                {t("about")}
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-blue-600">
                {t("contact")}
              </Link>

              {/* Language Switcher */}
              <div className="flex items-center gap-1 border-l pl-4 text-gray-600">
                <button
                  onClick={() => changeLanguage("en")}
                  className="hover:text-blue-600"
                  aria-label="Switch to English"
                >
                  EN
                </button>
                <span>|</span>
                <button
                  onClick={() => changeLanguage("fr")}
                  className="hover:text-blue-600"
                  aria-label="Passer au français"
                >
                  FR
                </button>
              </div>
            </div>
                {/* Mobile Language Switcher */}
<div className="md:hidden flex items-center gap-2 text-sm text-gray-600">
  <button
    onClick={() => changeLanguage("en")}
    className="hover:text-blue-600 font-medium"
    aria-label="Switch to English"
  >
    EN
  </button>
  <span>|</span>
  <button
    onClick={() => changeLanguage("fr")}
    className="hover:text-blue-600 font-medium"
    aria-label="Passer au français"
  >
    FR
  </button>
</div>


            {/* Mobile Controls */}
<div className="md:hidden flex items-center gap-3">

              <button
                type="button"
                onClick={() => setSidebarOpen(true)}
                className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                aria-label="Open navigation menu"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar for mobile */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </>
  );
}
