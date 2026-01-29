import React from "react";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <main className="bg-gray-50 pt-20 px-6">
      {/* ================= HEADER ================= */}
      <header className="mx-auto max-w-3xl text-center">
        <h1 className="text-3xl font-bold text-orange-600">
          {t("contactTitle")}
        </h1>
        <p className="mt-2 text-gray-700">
          {t("contactSubtitle")}
        </p>
      </header>

      {/* ================= CONTENT ================= */}
      <section className="mx-auto mt-12 grid max-w-5xl gap-10 md:grid-cols-2">
        {/* CONTACT INFO */}
        <div className="rounded-xl bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-green-700">
            {t("contactInfoTitle")}
          </h2>

          <p className="mt-3 text-gray-700">
            {t("contactAddress")}
          </p>

          <p className="mt-2">
            📞{" "}
            <a
              href="tel:+2348102345678"
              className="text-green-700"
            >
              +234 xxx xxx xxxx
            </a>
          </p>

          <p>
            ✉️{" "}
            <a
              href="mailto:AENIZ@gmail.com"
              className="text-orange-600"
            >
              aeniz2026@gmail.com
            </a>
          </p>
        </div>

        {/* CONTACT FORM */}
        <form className="rounded-xl bg-white p-6 shadow-sm space-y-4">
          <input
            className="w-full rounded border px-3 py-2"
            placeholder={t("fullName")}
            aria-label={t("fullName")}
          />

          <input
            type="email"
            className="w-full rounded border px-3 py-2"
            placeholder={t("email")}
            aria-label={t("email")}
          />

          <textarea
            className="w-full rounded border px-3 py-2"
            rows="4"
            placeholder={t("message")}
            aria-label={t("message")}
          />

          <button
            type="submit"
            className="w-full rounded bg-green-700 py-2 text-white hover:bg-green-800"
          >
            {t("send")}
          </button>
        </form>
      </section>
    </main>
  );
}
