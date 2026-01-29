import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Sidebar({ isOpen, onClose }) {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div
      className={`fixed top-0 right-0 w-72 h-full bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out 
      ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      aria-hidden={!isOpen}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b">
        <h2 className="text-lg font-semibold text-gray-800">{t("navigation")}</h2>
        <button
          onClick={onClose}
          className="text-gray-700 hover:text-red-500 focus:outline-none"
          aria-label={t("closeMenu")}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      {/* Main Navigation */}
      <nav className="flex flex-col p-4 space-y-3 text-sm">
        <Link
          to="/"
          className="text-gray-700 hover:text-blue-600 font-medium"
          onClick={onClose}
        >
          {t("home")}
        </Link>

        <Link
          to="/guide"
          className="text-gray-700 hover:text-blue-600 font-medium"
          onClick={onClose}
        >
          {t("guide")}
        </Link>

        <Link
          to="/about"
          className="text-gray-700 hover:text-blue-600 font-medium"
          onClick={onClose}
        >
          {t("about")}
        </Link>

        <Link
          to="/contact"
          className="text-gray-700 hover:text-blue-600 font-medium"
          onClick={onClose}
        >
          {t("contact")}
        </Link>
      </nav>

      {/* Divider */}
      <div className="border-t my-2"></div>

      {/* Student Guidance Section */}
      <div className="px-4 py-2">
        <h3 className="text-xs font-semibold text-gray-500 uppercase mb-3">
          {t("studentInfo")}
        </h3>

        <ul className="space-y-2 text-sm">
          <li className="text-gray-600">{t("admissions")}</li>
          <li className="text-gray-600">{t("accommodation")}</li>
          <li className="text-gray-600">{t("campusLife")}</li>
        </ul>
      </div>

      {/* Divider */}
      <div className="border-t my-2"></div>

      {/* Language Switcher */}
      <div className="px-4 py-3">
        <h3 className="text-xs font-semibold text-gray-500 uppercase mb-2">
          {t("language")}
        </h3>
        <div className="flex items-center gap-3 text-sm">
          <button
            onClick={() => changeLanguage("en")}
            className="text-blue-600 font-medium"
            aria-label={t("switchToEnglish")}
          >
            EN
          </button>
          <button
            onClick={() => changeLanguage("fr")}
            className="text-gray-600 hover:text-blue-600"
            aria-label={t("switchToFrench")}
          >
            FR
          </button>
        </div>
      </div>
    </div>
  );
}
