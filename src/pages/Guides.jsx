import React, { useMemo, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Section = ({ title, accent = "orange", children }) => {
  const borderColor =
    accent === "green" ? "border-green-600" : "border-orange-500";

  return (
    <section className="rounded-2xl border bg-white p-6 shadow-sm space-y-4">
      <h2 className={`border-l-4 ${borderColor} pl-3 text-2xl font-semibold`}>
        {title}
      </h2>
      {children}
    </section>
  );
};

export default function Guide() {
  const { t } = useTranslation();

  const [rates, setRates] = useState({ NGN: 1, XOF: 0 });
  const [loadingRates, setLoadingRates] = useState(true);

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const res = await fetch(
          "https://v6.exchangerate-api.com/v6/94ade798e53b47c139d889ba/latest/NGN"
        );
        const data = await res.json();
        setRates({ NGN: 1, XOF: data.conversion_rates.XOF });
      } catch (error) {
        console.error("Error fetching exchange rates:", error);
      } finally {
        setLoadingRates(false);
      }
    };
    fetchRates();
  }, []);

  const admissionLinks = useMemo(
    () => [
      { label: t("admissionUG"), path: "/table-ug" },
      { label: t("admissionMS"), path: "/table-ms" },
      { label: t("admissionPhD"), path: "/table-ph" },
    ],
    [t]
  );

  const languageCenters = t("languageCentersList", { returnObjects: true });
  const languageCourses = t("languageCoursesList", { returnObjects: true });
  const institutions = t("otherInstitutionsList", { returnObjects: true });
  const rooms = t("accommodationRooms", { returnObjects: true });
  const essentials = t("essentialItemsList", { returnObjects: true });
  const tips = t("lifeInZariaTips", { returnObjects: true });
  const skills = t("skillsTrainingList", { returnObjects: true });

  const documentFee = parseFloat(t("documentTranslationFee") || 0);
  const documentbain1 = parseFloat(t("bain1") || 0);
  const documentbain2  = parseFloat(t("bain2") || 0);
  const documentlog1 = parseFloat(t("log1") || 0);
  const documentlog2 = parseFloat(t("log2") || 0);
  const documentlog3 = parseFloat(t("log3") || 0);
  const documentlog4 = parseFloat(t("log4") || 0);

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12 space-y-14">
      <header className="max-w-4xl mx-auto text-center space-y-4">
        <h1 className="text-4xl font-bold text-orange-600">
          {t("guideHeader")}
        </h1>
        <p className="text-gray-600">{t("guideSubHeader")}</p>
      </header>
       <Section title={t("ExchangeRate")} accent="green">
        {loadingRates ? (
          <p>Loading currency rates...</p>
        ) : (
          <ul className="list-disc pl-6">

            <li>1000 Franc CFA XOF ≈ {(1000 / rates.XOF).toFixed(2)} NGN</li>
          </ul>


        )}
      </Section>
      <Section title={t("documentTranslationTitle")}>
        <p>{t("documentTranslationText")}</p>
        <p>
           {documentFee.toLocaleString()} NGN{" "}
          {rates.XOF && !loadingRates && (
            <>≈ {(documentFee * rates.XOF).toFixed(2)} Franc CFA XOF</>
          )}
        </p>
        {loadingRates && <p>Loading currency rates...</p>}
      </Section>

      <Section title={t("languagePreparationTitle")} accent="green">
        <p>{t("languagePreparationText")}</p>
        <p>
           {documentbain1.toLocaleString()} NGN{" "}
          {rates.XOF && !loadingRates && (
            <>≈ {(documentbain1 * rates.XOF).toFixed(2)} Franc CFA XOF</>
          )}
        </p>
        <p>
           {documentbain2.toLocaleString()} NGN{" "}
          {rates.XOF && !loadingRates && (
            <>≈ {(documentbain2 * rates.XOF).toFixed(2)} Franc CFA XOF</>
          )}
        </p>

        <ul className="list-disc pl-6">
          {languageCenters.map((c, i) => (
            <li key={i}>{c}</li>
          ))}
        </ul>
        </Section>
        <Section title={t("languageCoursesList0")} accent="green">
         
        <ul className="list-disc pl-6">
          {languageCourses.map((c, i) => (
            <li key={i}>{c}</li>
          ))}
        </ul>
      </Section>

      <Section title={t("abuAdmissionTitle")}>
        <nav className="flex flex-wrap gap-4">
          {admissionLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="bg-green-700 text-white px-5 py-2 rounded"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </Section>

      <Section title={t("otherInstitutionsTitle")} accent="green">
        <ul className="list-disc pl-6">
          {institutions.map((i, idx) => (
            <li key={idx}>{i}</li>
          ))}
        </ul>
      </Section>

      <Section title={t("accommodationTitle")}>
        <ul className="list-disc pl-6">
            <li>{t("welcomeHouse")} </li>
            <li>{t("membershipFee")} ≈ {(documentFee * rates.XOF).toFixed(2)} Franc CFA XOF</li>
            <li>{t("room1")}  ≈ {(documentlog1 * rates.XOF).toFixed(2)} Franc CFA XOF  {t("room1-1")}  ≈ {(documentlog2 * rates.XOF).toFixed(2)} Franc CFA XOF</li>
            <li>{t("room2")} ≈ {(documentlog3 * rates.XOF).toFixed(2)} Franc CFA XOF {t("room2-1")} ≈ {(documentlog4 * rates.XOF).toFixed(2)} Franc CFA XOF</li>
            <li>{t("note")}</li>
        </ul>
      </Section>

      <Section title={t("essentialItemsTitle")} accent="green">
        <ul className="list-disc pl-6">
          {essentials.map((e, idx) => (
            <li key={idx}>{e}</li>
          ))}
        </ul>
      </Section>

      <Section title={t("lifeInZariaTitle")}>
        <ul className="list-disc pl-6">
          {tips.map((t, idx) => (
            <li key={idx}>{t}</li>
          ))}
        </ul>
      </Section>

      <Section title={t("skillsTrainingTitle")} accent="green">
        <ul className="list-disc pl-6">
          {skills.map((s, idx) => (
            <li key={idx}>{s}</li>
          ))}
        </ul>
      </Section>

      
    </main>
  );
}
