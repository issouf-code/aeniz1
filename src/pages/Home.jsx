import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

// Assets
import president from "../assets/president.jpg";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.JPG";
import image3 from "../assets/image3.JPG";
import image4 from "../assets/image4.JPG";

export default function Home() {
  const { t } = useTranslation();

  // Memoized image list
  const images = useMemo(() => [image1, image2, image3, image4], []);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide gallery highlight
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <main className="bg-gray-50 pb-16 space-y-14">
      {/* ================= HERO SECTION ================= */}
      <section className="mx-auto max-w-6xl rounded-lg bg-gradient-to-r from-orange-500 via-white to-green-600 p-8 md:p-12 text-center shadow">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug">
          {t("welcomeText1")}{" "}
          <span className="text-orange-700">{t("welcomeText2")}</span>
        </h1>

        <p className="mx-auto mt-4 max-w-3xl text-gray-800">{t("heroDescription")}</p>

        <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/guide"
            className="rounded-md bg-green-700 px-6 py-2 font-medium text-white transition hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-600"
          >
            {t("exploreGuide")}
          </Link>

          <Link
            to="/about"
            className="rounded-md border border-green-700 px-6 py-2 font-medium text-green-700 transition hover:bg-green-50"
          >
            {t("learnAbout")}
          </Link>
        </div>
      </section>

      {/* ================= PRESIDENT MESSAGE ================= */}
      <section className="mx-auto max-w-6xl rounded-lg bg-white p-6 md:p-10 shadow">
        <div className="flex flex-col gap-8 md:flex-row md:items-center">
          <img
            src={president}
            alt={t("presidentAlt")}
            loading="lazy"
            className="h-80 w-full rounded-lg object-cover md:w-1/2"
          />

          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="mb-4 border-l-4 border-green-600 pl-3 text-2xl md:text-3xl font-bold text-gray-800">
              {t("presidentMessageTitle")}
            </h2>

            <h3 className="mb-2 font-semibold text-orange-700">{t("presidentPosition")}</h3>

            <p className="leading-relaxed text-gray-700">{t("presidentMessage")}</p>

            <p className="mt-4 italic text-gray-800">— {t("presidentSignature")}</p>
          </div>
        </div>
      </section>

      {/* ================= ACTIVITIES & GALLERY ================= */}
      <section className="mx-auto max-w-6xl rounded-lg bg-white p-6 md:p-10 shadow">
        <h2 className="mb-4 border-l-4 border-orange-500 pl-3 text-xl md:text-2xl font-semibold text-gray-800">
          {t("activitiesTitle")}
        </h2>

        <p className="mb-6 text-gray-600">{t("activitiesDescription")}</p>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {images.map((img, idx) => (
            <figure
              key={idx}
              className={`overflow-hidden rounded-lg transition ${
                idx === currentIndex ? "ring-2 ring-green-500" : "hover:shadow-md"
              }`}
            >
              <img
                src={img}
                alt={`${t("activityAlt")} ${idx + 1}`}
                loading="lazy"
                className="h-56 w-full object-cover"
              />
            </figure>
          ))}
        </div>
      </section>

      {/* ================= MISSION ================= */}
      <section className="mx-auto max-w-6xl rounded-lg bg-gray-50 p-6 md:p-8 shadow-sm">
        <h2 className="mb-4 border-l-4 border-green-600 pl-3 text-xl md:text-2xl font-semibold text-gray-800">
          {t("missionTitle")}
        </h2>
        <p className="leading-relaxed text-gray-700">{t("missionDescription")}</p>
      </section>

      {/* ================= VISION ================= */}
      <section className="mx-auto max-w-6xl rounded-lg bg-white p-6 md:p-8 shadow">
        <h2 className="mb-4 border-l-4 border-orange-500 pl-3 text-xl md:text-2xl font-semibold text-gray-800">
          {t("visionTitle")}
        </h2>
        <p className="leading-relaxed text-gray-700">{t("visionDescription")}</p>
      </section>
    </main>
  );
}
