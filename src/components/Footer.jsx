import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-auto border-t bg-white">
      <div className="mx-auto max-w-7xl px-4 py-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          
          {/* Association Info */}
          <div className="text-center md:text-left">
            <p className="text-sm font-semibold text-green-700">
              Association des Étudiants Nigériens à Zaria (AENIZ)
            </p>
            <p className="mt-1 text-xs text-gray-500">
              © {new Date().getFullYear()} Tous droits réservés.
            </p>
          </div>

          {/* Quick Links */}
          <nav className="flex justify-center gap-6 text-sm text-gray-600">
            <Link to="/about" className="hover:text-green-700">
              À propos
            </Link>
            <Link to="/guide" className="hover:text-green-700">
              Guide
            </Link>
            <Link to="/contact" className="hover:text-green-700">
              Contact
            </Link>
          </nav>

          {/* Credits */}
          <div className="text-center md:text-right">
            <p className="text-xs text-gray-500">
              Développé par{" "}
              <span className="font-medium text-orange-600">
                <a href="issouf-code.github.io/portfolio">
                issouf-code
                </a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
